"use client";

// Importing statements
import {useEffect, useState } from "react";
import Parser from "html-react-parser";

const Typing = () => {
  // Typing string
  let str =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, dolorem repudiandae, nobis corporis voluptatum nihil maiores ullam quibusdam natus impedit officiis error commodi recusandae laborum eaque aut, quam tempore pariatur! Dolorem, quaerat.";
  // storing individial array into an array
  const [text, settext] = useState(str.split(""));
  // positioning
  const [left, setleft] = useState(0);

  // pointer for typed text
  const [count, setCount] = useState(0);
  // pointer for orignal text
  const [Oricount, setOriCount] = useState(0);

  // Positioning text into middle of screen
  useEffect(() => {
    setleft(window.innerWidth / 2)
  }, [])
  
  

  // Keys to avoid
  const avoid = [
    "Escape",
    "F1",
    "F2",
    "F3",
    "F4",
    "F5",
    "F6",
    "F7",
    "F8",
    "F9",
    "F10",
    "F11",
    "F12",
    "ScrollLock",
    "Pause",
    "PageUp",
    "PageDown",
    "Home",
    "End",
    "Insert",
    "Delete",
    "Backspace",
    "\\",
    "Enter",
    "Shift",
    "Control",
    "ContextMenu",
    "Control",
    "AltGraph",
    "Alt",
    "Meta",
    "Control",
    "Shift",
    "CapsLock",
    "Tab",
  ];

  // Handelling position
  const HandlePos = (e: KeyboardEvent) => {
    // Checking for restricted keys
    if (avoid.includes(e.key)) {
      // Backspacing functionality
      if (e.key === "Backspace" && count !== 0 && count !== Oricount) {
        setleft(left + 1.8);
        setCount(count - 1);
        text.splice(count - 1, 1);
      }
    } else {
      // Checking if typed text is same as given text
      if (e.key === text[count]) {
        // Moving to left 12px
        setleft(left - 12);
        // incrementing counter and orignal counter
        setCount(count + 1);
        setOriCount(Oricount + 1);

        // Removig current text on pointer
        text.splice(count, 1);
        // Adding coloured text on pointer
        text.splice(
          count,
          0,
          `<span letter" class="text-blue-300">${e.key}</span>`
        );
      } else {
        // Removig and adding coloured text on current pointer
        text.splice(
          count,
          0,
          `<span letter" class="text-red-300 line-through">${e.key}</span>`
        );
        setleft(left - 12);
        setCount(count + 1);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", HandlePos);

    return () => {
      document.removeEventListener("keydown", HandlePos);
    };
  }, [left]);

  return (
    <div className="relative w-full mt-16 flex justify-center items-center">
      <div className="w-1 h-12 bg-red-400 absolute left-1/2"></div>
      <div className="overflow-hidden w-full inline-block whitespace-nowrap">
        <div className="flex flex-nowrap text-center">
          <div
            className="text-4xl str font-mono text-muted-foreground relative transition-all ease-linear flex whitespace-pre"
            style={{ left: left + "px" }}
          >
            {text.map((c, idx) => (
              <p key={idx}>{Parser(c)}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Typing;
