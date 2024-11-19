"use client"

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";

interface FormProps {
    type?: string;
    setUserName?:Dispatch<SetStateAction<string>>;
    setPassword?:Dispatch<SetStateAction<string>>;
    setEmail?:Dispatch<SetStateAction<string>>;
    setConfirmPass?:Dispatch<SetStateAction<string>>;
    submitForm:()=>void 
}
export default function LoginForm({ type , submitForm , setUserName , setPassword , setEmail , setConfirmPass  }: FormProps) {
    
    const [showPass, setShowPass] = useState(false);  //for password show/hide
    const [showCpass, setShowCpass] = useState(false);

    const submitHandler = ((e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        submitForm();
    });

    return (
        <div className={`border flex flex-col  gap-7 p-12 max-md:justify-center  ${type === 'signup' ? 'my-20' :'w-[95%]'}`}>
            {
                type === 'signup' && <h3 className="text-lg font-bold text-center">SIGN UP</h3>
            }
            <form className="flex flex-col gap-7">
                {
                    type === "signup" && 
                    <input type="text" placeholder="username" className="px-5 py-2 border-b outline-none w-full placeholder:text-sm" onChange={(e)=> setUserName && setUserName(e.target.value)}/>
                }
                <input type="email" placeholder="email" className="px-5 py-2 border-b outline-none w-full placeholder:text-sm" onChange={(e)=> setEmail && setEmail(e.target.value)}/>
                <div className="relative">
                    <input type={showPass ? "text" : "password"} placeholder="password" className="px-5 py-2 border-b outline-none w-full placeholder:text-sm " onChange={(e)=> setPassword && setPassword(e.target.value)}/>
                    <div className="absolute top-[10%] right-0 cursor-pointer w-[20px] h-[20px] max-sm:w-[15px] max-sm:h-[15px] max-sm:top-[20%]" onClick={() => setShowPass(prev => !prev)}>
                        <div className="relative w-full h-full">
                            {
                                showPass ? <Image src="/unlocked.svg" alt="image" fill />
                                    : <Image src="/locked.svg" alt="image" fill />

                            }
                        </div>
                    </div>
                </div>
                {
                    type === "signup" && (
                        <div className="relative">
                            <input type={showCpass ? "text" : "password"} placeholder="confirm-password" className="px-5 py-2 border-b outline-none w-full placeholder:text-sm" onChange={(e)=> setConfirmPass && setConfirmPass(e.target.value)}/>
                            <div className="absolute top-[0%] right-0 cursor-pointer  w-[20px] h-[20px] max-sm:w-[15px] max-sm:h-[15px] max-sm:top-[20%]" onClick={() => setShowCpass(prev => !prev)}>
                                <div className="relative w-full h-full">
                                    {
                                        showCpass ? <Image src="/unlocked.svg" alt="image" fill />
                                            : <Image src="/locked.svg" alt="image" fill />
                                    }
                                </div>
                            </div>
                        </div>
                    )
                }
                <button onClick={submitHandler} className="px-10 py-2 w-full bg-black text-white">{type === "signup" ? "SIGN UP" : "SIGN IN "}</button>
            </form>
        </div>
    )
}
