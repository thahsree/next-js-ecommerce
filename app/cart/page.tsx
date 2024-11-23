"use client"

import CartProducts from "@/components/CartProducts";
import Delivery from "@/components/Delivery";
import Image from "next/image";
import { useEffect, useState } from "react";
import Account from "../account/page";

function page() {

    const [active, setActive] = useState(1);


    useEffect(() => {
        
        // Push the current state to the browser history
        const handlePopState = (event:PopStateEvent) => {
            event.preventDefault();
            if (active > 1) {
                setActive((prev) => prev - 1); // Move to the previous step
            } else {
                window.history.pushState(null, "", window.location.href); // Prevent navigating to the previous page
            }
        };

        window.history.pushState(null, "", window.location.href); // Add a history entry
        window.addEventListener("popstate", handlePopState);

        return () => {
            window.removeEventListener("popstate", handlePopState);
        };
    }, [active]);

    return (
        <div className="flex flex-col w-full px-40 max-md:px-20 mt-2 items-center">
            <p className="text-center text-sm">HOME / CART</p>
            <div className="relative flex w-[70%] justify-between py-10 ">
                <div className="absolute w-full h-[1px] bg-gray-300 top-1/2 left-0 -z-10"></div>
                <div className={`relative rounded-full border p-5 w-[30px] h-[30px] flex items-center justify-center text-base ${active >= 1 ? 'bg-black text-white z-0' : 'bg-white text-grey z-10'}`}>
                    {active <= 1 ? 1 : <Image src='/tick.svg' fill alt='completed' className="p-2" />}
                    <div className={`absolute -bottom-8 text-black text-sm text-nowrap ${active >= 1 ? 'font-bold' : 'font-normal'}`}>
                        Bag
                    </div>
                </div>
                <div onClick={()=> setActive(2)} className={`relative rounded-full border p-5 w-[30px] h-[30px] flex items-center justify-center text-base ${active >= 2 ? 'bg-black text-white' : 'bg-white text-grey'}`}>
                    {active <= 2 ? 2 : <Image src='/tick.svg' fill alt='completed' className="p-2" />}
                    <div className={`absolute -bottom-8 text-black text-sm text-nowrap ${active == 2 ? 'font-bold' : 'font-normal'}`}>
                        Sign In
                    </div>
                </div>
                <div className={`relative rounded-full border p-5 w-[30px] h-[30px] flex items-center justify-center text-base ${active >= 3 ? 'bg-black text-white' : 'bg-white text-grey'}`}>
                    {active <= 3 ? 3 : <Image src='/tick.svg' fill alt='completed' className="p-2" />}

                    <div className={`absolute -bottom-8 text-black text-sm text-nowrap ${active == 3 ? 'font-bold' : 'font-normal'}`}>
                        Delivery and Payment
                    </div>
                </div>
                <div className={`relative rounded-full border p-5 w-[30px] h-[30px] flex items-center justify-center text-base ${active == 4 ? 'bg-black text-white' : 'bg-white text-grey'}`}>
                    4
                    <div className={`absolute -bottom-8 text-black text-sm text-nowrap ${active == 3 ? 'font-bold' : 'font-normal'}`}>
                        Confirmation
                    </div>
                </div>
            </div>
            {
                active == 1 ? <CartProducts /> :
                    active == 2 ? <Account /> :
                        active == 3 ? <Delivery /> : ''
            }
        </div>
    );
}

export default page;