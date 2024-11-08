import { Corousal, ProductDetails } from "@/components";
import { activeData } from "@/constants";
import Image from "next/image";

export default function Single() {

  const images = ["", "", "", ""]
  //get gender from global state

  const recommendedData = activeData.filter((item) => item.title === "Recommended For You");
  return (
    <div className="overflow-hidden px-16 min-sm:px-5 max-sm:px-1 max-lg:px-7 flex mt-5 flex-col items-center gap-5">
      <div className="mb-3">
        <p className="text-gray-700 cursor-pointer">Home / Products / Product</p>
      </div>
      <div className="flex">
        <div className="flex-[5] flex flex-wrap gap-5 justify-center items-start">
          {
            images.map((item, i) => (
              <div key={i} className="h-[550px] w-[400px] relative">
                <Image key={i} src='/men2.jpg' fill alt='product_image' className="object-fill" />
              </div>
            ))
          }
        </div>
        <div className="flex-[3]">
          <ProductDetails/>
        </div>
      </div>
      <div className="flex w-full px-5 py-16">
        <Corousal activeItem ={recommendedData[0]} type="Recommended For You"/>
      </div>
    </div>
  )
}