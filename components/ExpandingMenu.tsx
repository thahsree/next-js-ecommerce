"use client"
import { listItemsData } from "@/constants";
import Link from "next/link";
import { Dispatch, SetStateAction } from "react";

interface expandingMenuProps {
    section: string;
    setCurrentSelection:Dispatch<SetStateAction<string>>;

}

const ExpandingMenu = ({ section , setCurrentSelection }: expandingMenuProps) => {

    const filteredData = listItemsData.filter((item) => item.title === section)
    if (filteredData.length === 0) return null;
    return (
        <div className="flex w-full justify-between z-50 p-2 bg-white border border-t-transparent max-sm:hidden" onMouseLeave={()=> setCurrentSelection("")}>
            {
                filteredData[0].options.map((item, i) => (
                    <div key={i} className="flex flex-col p-12" >
                        <h2 className="text-sm text-gray-500 font-bold underline-offset-4 max-md:text-xs">{item.heading}</h2>
                        <div  className="flex  gap-2 py-2  flex-col">
                        {
                            item.datas.map((data, idx) => (
                                <Link href="/home/products" key={idx} className="text-sm font-normal max-md:text-xs text-gray-600 hover:text-black cursor-pointer">{data}</Link>
                            ))
                        }
                            
                        </div>
                        
                    </div>
                ))
            }
        </div>
    )
}

export default ExpandingMenu