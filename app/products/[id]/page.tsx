import { Corousal, ProductDetails } from "@/components";
import { activeData, singlePageData } from "@/constants";
import Image from "next/image";
export default function Single() {


  //get gender from global state

  const recommendedData = activeData.filter((item) => item.title === "Recommended For You");
  return (
    <div className="overflow-hidden px-16 min-sm:px-5 max-sm:px-1 max-lg:px-7 flex mt-5 flex-col items-center gap-5">
      <div className="mb-3">
        <p className="text-gray-700 cursor-pointer">Home / Products / Product</p>
      </div>
      <div className="flex max-lg:flex-col">
        <div className="flex-[5] flex flex-wrap gap-5 justify-center items-start">
          {
            singlePageData[0].items.map((item, i) => (
              <div key={i} className="h-[550px] w-[400px] relative max-sm:h-[350px] max-sm:w-[300px] max-lg:w-[40%] max-lg:h-[300px]">
                <Image key={i} src={item.image} fill alt='product_image' className="object-fill" />
              </div>
            ))
          }
        </div>
        <div className="flex-[3] max-lg:mt-5 max-lg:px-10">
          <ProductDetails />
        </div>
      </div>
      <div className="flex w-full px-5 py-16">
        <Corousal activeItem={recommendedData[0]} type="Recommended For You" />
      </div>
    </div>
  )
}