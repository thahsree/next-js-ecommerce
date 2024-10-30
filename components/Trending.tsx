"use client"

import { activeData, listItems } from "@/constants";
import { useState } from "react";
import Corousal from "./Corousal";
const Trending = () => {

    const [activeIndex , setActiveIndex] = useState(0)
    const [activeItem , setActiveItem] = useState(listItems[activeIndex]);
    const listProp = "px-3 py-2 border border-black rounded-full cursor-pointer"


    const filteredData = activeData.filter((item) => item.title === activeItem);
    const recommendedData = activeData.filter((item) => item.title === "Recommended For You");

    interface handleClickTypes {
        i:number;
        item:string
    }
    const handleClick = ({i,item}:handleClickTypes)=>{
        setActiveIndex(i);
        setActiveItem(item);
    }

    

    return (
        <div className="flex flex-col gap-6 justify-center items-center py-7">
            <h3 className="text-lg font-bold">Trending Now</h3>
            <nav className="list-none flex gap-4">
                {
                    listItems.map((item, i) => (
                        <li 
                            key={item} 
                            className={`${listProp} ${activeIndex === i ? 'bg-red-800 border-transparent text-white' : ''}`}
                            onClick={()=> handleClick({i,item})}
                        >
                            {item}
                        </li>
                    ))
                }
            </nav>
            <Corousal activeItem ={filteredData[0]} type="trending"/>
            <Corousal activeItem ={recommendedData[0]} type="Recommended For You"/>
        </div>
    )
}

export default Trending