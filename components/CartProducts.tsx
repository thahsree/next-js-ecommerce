import Image from 'next/image';

function CartProducts() {
    return (
        <div className="flex w-full gap-10 mt-10 ">
                <div className="flex flex-col flex-5 w-3/5 gap-3">

                    <div className="flex">
                        <div className="flex relative w-full gap-10 border p-2">
                            <div className="w-[150px] h-[150px] relative">
                                <Image src="/jeans.jpg" fill alt="image" className="object-cover" />
                                
                            </div>
                            <div className="flex flex-col w-full ">
                                <h3 className='font-bold text-base'>Cargo Pant</h3>
                                <p className='font-normal text-base mt-2'>AED 290</p>
                                <ul className='flex flex-wrap w-3/4 text-xs font-light mt-3 gap-2'>
                                    <li className='w-1/2 flex justify-between'>
                                        <span className='w-1/2'>Art.no.</span>
                                        <span className='w-1/2'>298735943</span>
                                    </li>
                                    <li className='w-1/2 flex justify-between'>
                                        <span className='w-1/2'>Size</span>
                                        <span className='w-1/2'>M</span>
                                    </li>
                                    <li className='w-1/2 flex justify-between'>
                                        <span className='w-1/2'>Color</span>
                                        <span className='w-1/2'>Blue</span>
                                    </li>
                                </ul>
                                <p></p>
                            </div>
                            <div className="absolute right-3 top-3">
                                <Image src='/delete.svg' height={20} width={20} alt='delete' className='object-contain cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="flex relative w-full gap-10 border p-2">
                            <div className="w-[150px] h-[150px] relative">
                                <Image src="/jeans.jpg" fill alt="image" className="object-cover" />
                                
                            </div>
                            <div className="flex flex-col w-full ">
                                <h3 className='font-bold text-base'>Cargo Pant</h3>
                                <p className='font-normal text-base mt-2'>AED 290</p>
                                <ul className='flex flex-wrap w-3/4 text-xs font-light mt-3 gap-2'>
                                    <li className='w-1/2 flex justify-between'>
                                        <span className='w-1/2'>Art.no.</span>
                                        <span className='w-1/2'>298735943</span>
                                    </li>
                                    <li className='w-1/2 flex justify-between'>
                                        <span className='w-1/2'>Size</span>
                                        <span className='w-1/2'>M</span>
                                    </li>
                                    <li className='w-1/2 flex justify-between'>
                                        <span className='w-1/2'>Color</span>
                                        <span className='w-1/2'>Blue</span>
                                    </li>
                                </ul>
                                <p></p>
                            </div>
                            <div className="absolute right-3 top-3">
                                <Image src='/delete.svg' height={20} width={20} alt='delete' className='object-contain cursor-pointer'/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-1 flex w-full flex-col gap-4">
                    <div className='flex justify-between w-3/4 items-center h-max border-b pb-4'>
                        <p className='font-bold text-gray-500 text-sm'>Discounts</p>
                        <p className='font-normal text-sm underline underline-offset-1'>Apply Discounts</p>
                    </div>
                    <ul className='flex flex-wrap text-sm pb-4 border-b border-b-black w-3/4'>
                        <li className='w-1/2 text-gray-500'>Order value</li>
                        <li className='w-1/2 text-end'>AED 580</li>
                        <li className='w-1/2 text-gray-500'>Delivery</li>
                        <li className='w-1/2 text-end'>Free</li>
                    </ul>
                    <ul className='flex w-3/4 font-bold'>
                        <li className='w-1/2'>Total</li>
                        <li className='w-1/2 text-end'>AED 580</li>
                    </ul>
                    <button className='w-3/4 bg-black text-white p-3 font-bold rounded'>
                        CONTINUE CHECKOUT
                    </button>
                    <div className='flex w-3/4 flex-col gap-2'>
                        <p className='w-full font-normal text-sm'>We Accept</p>
                        <div className='font-bold text-xs flex gap-4 items-center'>
                            <p className='cursor-pointer'>Cash On Delivery</p>
                            <Image src='/mastercard.svg' height={35} width={35} alt='mastercard' className='object-cover cursor-pointer'/>
                            <Image src='/visa.svg' height={35} width={35} alt='visa' className='object-cover cursor-pointer'/>
                            <Image src='/tabby.svg' height={50} width={50} alt='tabby' className='object-cover cursor-pointer'/>
                        </div>
                    </div>
                </div>
            </div>
    );
}

export default CartProducts;