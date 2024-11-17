"use client"
import LoginForm from "@/components/LoginForm";
import { signIn } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

export default function Login() {

 

  function submitForm(){
    alert("signIN")
  }
  return (
    <div className="flex w-full p-5 px-36 flex-col gap-3 text-gray-800 max-sm:px-4 max-lg:px-10 max-md:px-6">
      <h3 className="text-xl font-bold max-sm:text-center">SIGN IN</h3>
      <hr />
      <div className="flex w-full mt-4 gap-2 max-md:flex-col max-sm:items-center max-sm:gap-6">
        <div className="w-full flex-1 border-r max-md:border-r-0 flex flex-col gap-7 max-md:items-center">
          <h3 className="text-lg font-bold max-md:text-center">Sign in with email address</h3>
          <LoginForm submitForm={submitForm}/>
        </div>
       
        <div className="flex-1 flex flex-col items-center gap-4">
          <h3 className="text-lg font-bold">Sign in with social media</h3>
          <div className="flex px-4 py-4 jusify-start items-center w-[250px] gap-3 border border-slate-600 cursor-pointer">
            <Image src="/facebook.svg" alt="facebook" height={25} width={25} />
            <p className="text-slate-700 text-sm">Sign in with Facebook</p>
          </div>
          <div onClick={() => signIn('google', { redirect: false})} className="flex px-4 py-4 jusify-start items-center w-[250px]  gap-3 border border-slate-600 cursor-pointer">
            <Image src="/google.svg" alt="google" height={25} width={25} />
            <p className="text-slate-700 text-sm">Sign in with Google</p>

          </div>
          <div className="flex flex-col gap-3 mt-3 ">
            <p className="text-slate-700 text-sm w-[250px]">Don't have an account yet?</p>
            <Link href="/account/signup" className="border border-slate-700 px-4 py-3 flex items-center gap-3 w-max">
              <Image src="/account.svg" height={20} width={20} alt="account" />
              <p className="text-slate-700 text-sm">Sign up here</p>
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}
