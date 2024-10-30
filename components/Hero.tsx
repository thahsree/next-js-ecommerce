import { Trending } from "@/components"
import Image from "next/image"

const Hero = () => {

  return (
    <div className=''>
      <div className="relative h-[80vh]">
        <Image src='/Main7.jpg' fill alt="main" className="object-cover bg-cyan-50" />
        <div className="absolute top-[10%] left-[40%] z-10 px-10 py-7 gap-2 text-white flex flex-col justify-center items-center">
          <h3 className="font-extrabold text-[30px]">Your Cozy Era</h3>
          <div className="flex flex-col items-center gap-0 text-lg font-semibold">
            <p>Get peak comfy outfits </p>
            <p>with new winter essentials.</p>
          </div>
          <button className="bg-white text-black px-9 rounded-md py-3 font-semibold transition ease-in-out duration-300 hover:bg-slate-200">SHOP NOW</button>
        </div>
      </div>
      <Trending />

      <div className="relative h-[80vh] flex">
        <div className="relative w-[50%] h-full">
          <Image src='/men3.jpg' fill alt="main" className="object-cover bg-cyan-50" />
        </div>
        <div className="relative w-[50%] h-full ">
          <Image src='/heromain.jpg' fill alt="main" className="object-cover bg-cyan-50" />
        </div>
        <div className="absolute top-[0%] left-[40%] z-10 px-10 py-7 gap-2 flex flex-col justify-center items-center">
          <h3 className="fontbold text-[30px]">Automn update</h3>
          <div className="flex flex-col items-center gap-0 text-lg font-bold">
            <p>Get peak comfy outfits </p>
            <p>with new winter essentials.</p>
          </div>
          <button className="bg-white text-black px-9 rounded-md py-3 font-semibold transition ease-in-out duration-300 hover:bg-slate-200">SHOP NOW</button>
        </div>
      </div>
    </div>
  )
}

export default Hero