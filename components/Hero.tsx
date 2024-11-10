import { Trending } from "@/components"
import Image from "next/image"

const Hero = () => {

  return (
    <div className=''>
      <div className="relative h-[80vh] max-lg:mt-5">
        <Image src='/Main3.jpg' fill alt="main" className="object-cover bg-cyan-50" />
        {/* Overlay for shading */}
        <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

        {/* Content */}
        <div className="absolute top-[0%] px-10 w-full py-7 gap-2 text-white flex flex-col items-center">
          <h3 className="font-extrabold text-[30px]">Your Cozy Era</h3>
          <div className="flex flex-col items-center gap-0 text-lg font-semibold">
            <p>Get peak comfy outfits </p>
            <p>with new winter essentials.</p>
          </div>
          <a href="/products">
            <button className="bg-white text-black px-9 rounded-md py-3 font-semibold transition ease-in-out duration-300 hover:bg-slate-200">SHOP NOW </button>
          </a>
        </div>
      </div>
      <Trending />

      <div className="relative h-[80vh] flex max-sm:flex-col">
        <div className="relative w-[50%] h-full max-sm:w-full">
          <Image src='/men3.jpg' fill alt="main" className="object-cover " />
          {/* Overlay for shading */}
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

          {/* Content */}
        </div>
        <div className="relative w-[50%] h-full max-sm:w-full">
          <Image src='/main4.jpg' fill alt="main" className="object-cover" />
          {/* Overlay for shading */}
          <div className="absolute inset-0 bg-black opacity-30 z-0"></div>

          {/* Content */}
        </div>
        <div className="absolute top-[0%] w-full z-10 px-10 py-7 gap-2 flex flex-col justify-center items-center text-white max-sm:h-full">
          <h3 className="font-black text-[30px]">Automn update</h3>
          <div className="flex flex-col items-center gap-0 text-lg font-bold">
            <p className="text-sm font-semibold">Black and White looks.</p>
          </div>
          <a href="/products">
            <button className="bg-white text-black px-9 rounded-md py-3 font-semibold transition ease-in-out duration-300 hover:bg-slate-200">SHOP NOW </button>
          </a>
        </div>
      </div>


    </div>
  )
}

export default Hero