import { activeData } from "@/constants";
import Image from "next/image";
import Corousal from "./Corousal";

const Category = () => {

    const categoryData = activeData.filter((item) => item.title === "Shop by Category");

    return (

        //GET CURRENT SELECTED SECTION THROUGH STATE MANAGEMENT;
        //NOW IT'S STATIC
        <div className="mt-5 mb-5 w-full flex flex-col items-center">
            <h3 className="font-semibold text-lg">Shop by Category</h3>
            <Corousal activeItem={categoryData[0]} type="Shop by Category" />

            <div className="mt-10 border border-black w-full relative h-[400px] max-sm:h-[200px]">
                <Image src="/landscape.jpg" fill alt="landscape" className="object-cover" />

                {/* Overlay for shading */}
                <div className="absolute inset-0 bg-black opacity-20 z-0"></div>

                {/* Content */}
                <div className="absolute top-[10%] w-full z-10 text-white flex flex-col items-center gap-4 text-center">
                    <h1 className="font-bold text-3xl max-sm:text-lg">We're on a Mission To Clean Up the Industry</h1>
                    <p className="font-thin text-sm max-sm:text-xs">Read about our progress in our latest Impact Report.</p>
                    <button className="text-black px-8 font-light py-2 bg-white max-sm:px-4 max-sm:py-1 max-sm:text-sm">LEARN MORE</button>
                </div>
            </div>

            <div className="w-full flex mt-24 justify-around items-center gap-2 max-sm:gap-0.2 flex-shrink">
                <div className="flex flex-col items-center flex-wrap p-5 gap-4 text-center max-sm:p-1" >
                    <Image src='/package.svg' width={50} height={50} alt="package" />
                    <div className="flex flex-col items-center">
                        <h4 className="text-sm font-semibold max-sm:text-[10px] text-nowrap">Complimentary Shipping</h4>
                        <p className="text-sm font-thin text-wrap max-sm:text-[10px]">
                            Enjoy free shipping over U.A.E, orders above 100 AED.
                        </p>
                    </div>
                </div>
                <div className="flex flex-col items-center flex-wrap p-5 gap-4 text-center max-sm:p-1">
                    <Image src='/hanger.svg' width={50} height={50} alt="hanger" />
                    <div className="flex flex-col items-center">
                        <h4 className="text-sm font-semibold max-sm:text-[10px] text-nowrap">Consciously Crafted</h4>
                        <p className="text-sm font-thin text-wrap max-sm:text-[10px]">Designed with you and the planet in mind.</p>
                    </div>

                </div>
                <div className="flex flex-col items-center flex-wrap p-5 gap-4 text-center max-sm:p-1" >
                    <Image src='/location.svg' width={50} height={50} alt="location" />
                    <div className="flex flex-col items-center">
                        <h4 className="text-sm font-semibold max-sm:text-[10px] text-nowrap">Come Say Hi..</h4>
                        <p className="text-sm font-thin text-wrap max-sm:text-[10px]">We have 7 stores across the U.A.E.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Category