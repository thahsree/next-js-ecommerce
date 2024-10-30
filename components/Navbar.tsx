import Image from "next/image";

const Navbar = () => {

    const navProp = "cursor-pointer font-light text-slate-900 flex items-center border-b-2 border-b-transparent h-full hover:border-b-2 hover:border-b-black transition ease-in-out duration-300"
    const nav2Prop = "font-light text-slate-700 text-md hover:text-black cursor-pointer"
    return (
        <header className="w-full">
            <div className="bg-black flex justify-center p-3 relative">
                <p className="text-white font-semibold">
                    Get early access on launches and offers.
                    <span className="font-extralight underline ml-2"> Sign up for more offers &rarr;</span>
                </p>
                <div className="absolute right-32 text-white flex justify-center items-center gap-2">
                    <Image src="/UAE.svg" height={25} width={25} alt="country" className="cursor-pointer" />
                    <p className="font-normal text-sm">UAE</p>
                </div>
            </div>
            <nav className="flex px-32 justify-between items-center h-20 border-b border-b-black-600"> {/* Explicit height on nav */}
                <ul className="flex gap-7 items-center h-full">
                    <li className={navProp}>Women</li>
                    <li className={navProp}>Men</li>
                    <li className={navProp}>Kids</li>
                    <li className={navProp}>About</li>
                </ul>
                <h3 className="font-bold font-inter text-[23px]">E V E R L A N E</h3>
                <div className="flex gap-5 h-full">
                    <p className={navProp}>
                        <Image src="/search.svg" width={20} height={20} alt="search" />
                    </p>
                    <p className={navProp}>
                        <Image src="/user.svg" width={20} height={20} alt="user" />
                    </p>
                    <p className={navProp}>
                        <Image src="/shopping-cart.svg" width={20} height={20} alt="cart" />
                    </p>
                </div>
            </nav>
            <nav className="flex p-5 justify-center items-center border-b">
                <ul className="flex gap-5">
                    <li className={nav2Prop}>Holiday Gifting</li>
                    <li className={nav2Prop}>New Arrivals</li>
                    <li className={nav2Prop}>Best-Sellers</li>
                    <li className={nav2Prop}>Clothing</li>
                    <li className={nav2Prop}>Tops & Sweaters</li>
                    <li className={nav2Prop}>Pants & Jeans</li>
                    <li className={nav2Prop}>Outwear</li>
                    <li className={nav2Prop}>Shoes & Bags</li>
                    <li className="font-light text-red-600 text-md hover:text-red-400 cursor-pointer">Sale</li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
