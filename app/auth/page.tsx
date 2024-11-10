import Image from "next/image";

export default function Login() {
  return (
    <div className="flex w-full p-5 px-36 flex-col gap-3 text-gray-800 max-sm:px-4 max-lg:px-10 max-md:px-6">
      <h3 className="text-xl font-bold max-sm:text-center">SIGN IN</h3>
      <hr />
      <div className="flex w-full mt-4 gap-2 max-sm:flex-col max-sm:items-center max-sm:gap-6">
        <div className="flex-1 border-r flex flex-col gap-7">
          <h3 className="text-lg font-bold">Sign in with email address</h3>
          <input type="email" placeholder="email" className="px-5 py-2 border-b outline-none w-[70%] placeholder:text-sm" />
          <input type="password" placeholder="password" className="px-5 py-2 border-b outline-none w-[70%] placeholder:text-sm" />
          <div className="flex gap-7 w-full items-center">
            <button className="px-10 py-2 bg-black text-white">SIGN IN</button>
            <p className="text-sm cursor-pointer hover:underline hover:underline-offset-2"> Forgot Password</p>
          </div>
        </div>
        <hr />
        <div className="flex-1 flex flex-col items-center gap-4">
          <h3 className="text-lg font-bold">Sign in with social media</h3>
          <div className="flex px-4 py-4 jusify-start items-center w-[250px] gap-3 border border-slate-600 cursor-pointer">
            <Image src="/facebook.svg" alt="facebook" height={25} width={25} />
            <p className="text-slate-700 text-sm">Sign in with Facebook</p>
          </div>
          <div className="flex px-4 py-4 jusify-start items-center w-[250px]  gap-3 border border-slate-600 cursor-pointer">
            <Image src="/google.svg" alt="google" height={25} width={25} />
            <p className="text-slate-700 text-sm">Sign in with Google</p>

          </div>
          <div className="flex flex-col gap-3 mt-3 ">
            <p className="text-slate-700 text-sm w-[250px]">Don't have an account yet?</p>
            <div className="border border-slate-700 px-4 py-3 flex items-center gap-3 w-max">
              <Image src="/account.svg" height={20} width={20} alt="account"/>
              <p className="text-slate-700 text-sm">Sign up here</p>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}
