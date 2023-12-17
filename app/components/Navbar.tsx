import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";
import Wrapper from "./Wrapper";

const Navbar = () => {
  return (
    <Wrapper>
      <div className="px-4 py-4 justify-between items-center flex">
        <Link
          href="/"
          className="text-3xl font-bold tracking-tight hover:tracking-wide transition-all ease-in-out cursor-pointer"
        >
          Typoger
        </Link>
        <div className="flex gap-x-3">
          <Button variant={"outline"}>Login</Button>
          <Button>Create An Account</Button>
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
