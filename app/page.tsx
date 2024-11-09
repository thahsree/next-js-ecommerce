import { Category, Hero } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden px-32 min-sm:px-10 max-sm:px-1 max-lg:px-7">
      <Hero/>
      <div className="flex flex-col bg-gray-100 justify-center items-center p-4 mt-5 gap-3">
        <h3 className="text-black font-extrabold text-[30px] text-center max-sm:text-lg">Members get 10% off their first purchase</h3>
        <div className="flex gap-3">
          <button className="px-5 py-2 border bg-black text-white font-bold text-sm max-sm:text-xs">Become a member</button>
          <button className="px-5 py-2 border border-black max-sm:text-xs">Sign in</button>
        </div>
        <p className="text-sm text-center max-sm:text-xs">Valid online & instore for new members. Terms & conditions apply.</p>
      </div>
      <Category/>
    </main>
  );
}
