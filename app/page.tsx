import Image from 'next/image'
import Navbar from './components/Navbar'
import Typing from './components/Typing';

export default function Home() {

  return (
    <>
    <Navbar/>
    <div className='flex flex-col justify-center items-center w-full py-14 overflow-x-hidden'>
      <p className='text-xl text-muted-foreground'>Test your speed</p>
      <h1 className='text-5xl font-bold mt-2'>Give your typing skill a shot</h1>
      <div className='flex mt-12 gap-x-12 items-center justify-center'>
        <div className='flex flex-col justify-center items-center'>
          <p className='text-4xl font-bold w-14 h-14 flex justify-center items-center'>60</p>
          <p className='text-muted-foreground mt-2'>seconds</p>
        </div>
        <div className='flex gap-x-8'>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-4xl font-bold bg-gray-800 w-14 h-14 flex justify-center items-center rounded-sm'>0</div>
            <p className='text-muted-foreground mt-2'>words/min</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-4xl font-bold bg-gray-800 w-14 h-14 flex justify-center items-center rounded-sm'>0</div>
            <p className='text-muted-foreground mt-2'>chars/min</p>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <div className='text-4xl font-bold bg-gray-800 w-14 h-14 flex justify-center items-center rounded-sm'>
              0
              <span className='text-sm mt-3'>%</span>
            </div>
            <p className='text-muted-foreground mt-2'>accuracy %</p>
          </div>
        </div>
      </div>
      <Typing/>
    </div>
    </>
  )
}
