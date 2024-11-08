import Image from "next/image"

export const ProductDetails = () => {
    return (
        <div className="flex flex-col gap-7">

            {/* heading section */}
            <div className="flex flex-col gap-4">
                <div className="flex justify-between">
                    <div className="text-3xl font-normal">
                        <h3>BRAND NAME</h3>
                        <h3>Over sized shirt</h3>
                    </div>
                    <div className="text-3xl font-normal flex gap-2">
                        <p className="line-through text-gray-500 font-thin">AED 258</p>
                        <p>AED 167.00</p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex gap-1">
                        <Image src="/star.svg" height={10} width={15} alt="star" className="object-contain" />
                        <Image src="/star.svg" height={10} width={15} alt="star" className="object-contain" />
                        <Image src="/star.svg" height={10} width={15} alt="star" className="object-contain" />
                        <Image src="/star.svg" height={10} width={15} alt="star" className="object-contain" />
                        <Image src="/star.svg" height={10} width={15} alt="star" className="object-contain" />
                    </div>
                    <p className="text-base text-gray-400">5.0 (2 Reviews) </p>
                </div>
            </div>

            <hr className="" />

            {/* color section */}
            <div className="flex flex-col">
                <div className="flex gap-3 items-center">
                    <h3 className="font-semibold text-base">Color :</h3>
                    <h3 className="font-thin text-base">Blue</h3>
                </div>
                <div className="flex mt-3 gap-5 items-center">
                    <div className="h-[25px] w-[25px] rounded-full bg-blue-800 ring-1 ring-offset-2 ring-black cursor-pointer"></div>
                    <div className="h-[25px] w-[25px] rounded-full bg-yellow-950 ring-1 ring-offset-2 ring-black cursor-pointer"></div>
                </div>
            </div>

            {/* size section */}

            <div className="flex flex-col gap-3">
                <div className="flex justify-between items-center">
                    <h3 className="font-semibold text-base">Size</h3>
                    <p className="underline underline-offset-2 text-sm text-gray-600">Size Guide</p>
                </div>
                <div className="flex gap-5">
                    <div className="h-[50px] w-[50px] p-2 flex items-center justify-center text-base bg-gray-200 cursor-pointer rounded-full">XS</div>
                    <div className="h-[50px] w-[50px] p-2 flex items-center justify-center text-base bg-gray-200 cursor-pointer rounded-full">S</div>
                    <div className="h-[50px] w-[50px] p-2 flex items-center justify-center text-base bg-gray-200 cursor-pointer rounded-full">M</div>
                    <div className="h-[50px] w-[50px] p-2 flex items-center justify-center text-base bg-gray-200 cursor-pointer rounded-full">L</div>
                    <div className="h-[50px] w-[50px] p-2 flex items-center justify-center text-base bg-gray-200 cursor-pointer rounded-full">XL</div>
                    <div className="h-[50px] w-[50px] p-2 flex items-center justify-center text-base bg-gray-200 cursor-pointer rounded-full">XXL</div>
                </div>
            </div>

            {/* cart and wishlist */}
            <div className="flex w-full items-center justify-center gap-6">
                <button className="py-3 px-10 border bg-black text-white">ADD TO BAG</button>
                <button className="py-3 px-10 border border-black">ADD TO WISHLIST</button>
            </div>

            <hr />

            {/* delivery instructions */}

            <div className="flex flex-col gap-3">
                <div className="flex gap-5">
                    <Image src="/truck.svg" height={50} width={50} alt="icons" className="" />
                    <div className="flex flex-col text-gray-700">
                        <h3 className="font-bold text-base">Free Shipping</h3>
                        <p className="font-light text-sm">On all orders above 100.00 AED.<span className="underline underline-offset-2 ml-2">Learn more</span></p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Image src="/box.svg" height={50} width={50} alt="icons" />
                    <div className="flex flex-col text-gray-700">
                        <h3 className="font-bold text-base">Easy Returns</h3>
                        <p className="font-light text-sm">Extended Returns.<span className="underline underline-offset-2 ml-2">Learn more</span></p>
                    </div>
                </div>
                <div className="flex gap-5">
                    <Image src="/gift.svg" height={50} width={50} alt="icons" />
                    <div className="flex flex-col text-gray-700">
                        <h3 className="font-bold text-base">Send It As A Gift</h3>
                        <p className="font-light text-sm">Add a free personalized note during checkout.<span className="underline underline-offset-2 ml-2">Learn more</span></p>
                    </div>
                </div>

                <hr />
            </div>

            {/* product description */}
            <div className="flex flex-col gap-2 text-gray-700">
                <h3 className="font-bold text-base">Description Heading</h3>
                <p className="text-sm font-normal"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate officia at reiciendis alias quibusdam iusto voluptates explicabo. Blanditiis veritatis voluptate cum! Perspiciatis id totam a quis perferendis eum ab? Ducimus!
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. In aut saepe quasi. Mollitia neque perspiciatis quisquam perferendis, doloremque praesentium aperiam hic ducimus adipisci harum ipsam at labore atque reprehenderit magni.
                    Exercitationem excepturi commodi vero reprehenderit possimus. Veniam aliquam, ipsum unde perferendis asperiores laborum ratione saepe magnam eveniet dolor porro aspernatur dicta fugit placeat, quod perspiciatis accusantium doloribus blanditiis temporibus rerum.
                </p>
                <div className="flex flex-col">
                    <div className="flex gap-7 py-5 border-b border-b-gray-300 items-center">
                        <h3 className="text-base font-semibold  w-[100px]"> Model</h3>
                        <p className="text-sm font-normal">Model is 6'2, wearing size M</p>
                    </div>
                    <div className="flex gap-7 py-5 border-b border-b-gray-300 items-cente">
                        <h3 className="text-base font-semibold  w-[100px]"> Fit</h3>
                        <p className="text-sm font-normal">Questions about fit? <br />Contact us <br />Size Guide</p>
                    </div>
                </div>
            </div>

        </div>
    )
}
