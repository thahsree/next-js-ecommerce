"use client"
import { ExpandingMenu } from '@/components';
import Image from "next/image";
import Link from 'next/link';
import { useState } from "react";


const Navbar = () => {

    const [currentSelection, setCurrentSelection] = useState("")

    

    const navProp = "cursor-pointer font-light text-slate-900 flex items-center border-b-2 border-b-transparent h-full hover:border-b-2 hover:border-b-black transition ease-in-out duration-300"
    const nav2Prop = "font-light text-slate-700 text-md hover:text-black cursor-pointer text-sm text-nowrap"
    return (
        <header className="relative w-full">
            <div className="bg-black flex justify-center p-3 relative max-lg:hidden">
                <p className="text-white font-semibold">
                    Get early access on launches and offers.
                    <span className="font-extralight underline underline-offset-2 decoration-1 ml-2"> Sign up for more offers &rarr;</span>
                </p>
                <div className="absolute right-32 text-white flex justify-center items-center gap-2 max-lg:right-10">
                    <Image src="/UAE.svg" height={25} width={25} alt="country" className="cursor-pointer" />
                    <p className="font-normal text-sm">UAE</p>
                </div>
            </div>
            <nav className="flex px-32 justify-between items-center h-20 border-b border-b-black-600 max-lg:px-10"> {/* Explicit height on nav */}
                <ul className="flex gap-7 items-center h-full max-sm:hidden max-lg:gap-5 max-md:gap-3">
                    <li className={`${navProp} ${currentSelection === 'Women'? 'active':''}`} onMouseEnter={() => setCurrentSelection("Women")} >Women</li>
                    <li className={`${navProp} ${currentSelection === 'Men'? 'active':''}`} onMouseEnter={() => setCurrentSelection("Men")} >Men</li>
                    <li className={`${navProp} ${currentSelection === 'Kids'? 'active':''}`} onMouseEnter={() => setCurrentSelection("Kids")}>Kids</li>
                    <li className={navProp} >About</li>
                </ul>
                <Link href="/" className="font-bold font-inter text-[23px] text-nowrap max-sm:text-lg">E V E R L A N E</Link>
                <div className="flex gap-5 h-full">
                    <p className={navProp}>
                        <Image src="/search.svg" width={20} height={20} alt="search" />
                    </p>
                    <Link href='/auth' className={navProp}>
                        <Image src="/user.svg" width={20} height={20} alt="user" />
                    </Link>
                    <p className={navProp}>
                        <Image src="/shopping-cart.svg" width={20} height={20} alt="cart" />
                    </p>
                </div>
            </nav>
            {
                currentSelection &&
                <div className="absolute z-10 w-full px-20 flex items-center ">
                    <ExpandingMenu section={currentSelection} setCurrentSelection = {setCurrentSelection}/>
                </div>
            }

            <nav className="flex p-5 justify-center items-center border-b max-lg:p-3 max-lg:hidden">
                <ul className="flex gap-5 max-lg:gap-2">
                    <li className={nav2Prop}>Holiday Gifting</li>
                    <li className={nav2Prop}>New Arrivals</li>
                    <li className={nav2Prop}>Best-Sellers</li>
                    <li className={nav2Prop}>Clothing</li>
                    <li className={nav2Prop}>Tops & Sweaters</li>
                    <li className={nav2Prop}>Pants & Jeans</li>
                    <li className={nav2Prop}>Outwear</li>
                    <li className={nav2Prop}>Shoes & Bags</li>
                    <li className="font-light text-red-600 text-md hover:text-red-400 cursor-pointer text-sm">Sale</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
