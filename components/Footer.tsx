
import { footerLinks } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t
     border-gray-100 bg-gray-200 px-32 min-sm:px-10 overflow-hidden max-lg:p-0"
    >
      <div className="flex max-md:flex-col flex-wrap gap-5 sm:px-16 px-6 py-10">
        <div className="flex gap-20 max-lg:gap-20 max-sm:gap-5 max-lg:flex-col w-full">
          <div className="flex gap-10 max-md:gap-5 max-sm:gap-2 w-full justify-center  ">
            {
              footerLinks.map((link) => (
                <div key={link.title} className="flex flex-col gap-3 wrap max-w-[150px] max-md:gap-1 max-lg:gap-3 ">
                  <h3 className="font-bold text-base max-md:text-sm max-sm:text-[10px] text-nowrap">{link.title}</h3>
                  {
                    link.links.map((item) => (
                      <Link
                        key={item.name}
                        href={item.link}
                        className="text-gray-500 text-base max-md:text-sm max-sm:text-[10px]"
                      >
                        {item.name}
                      </Link>
                    ))
                  }
                </div>
              ))
            }
          </div>

          <div className="flex h-max justify-center items-center">
            <input
              type="text"
              className="border-none outline-none focus:ring-0 py-2 px-5 max-lg:px-8 max-lg:py-2"
              placeholder="email address"
            />
            <button className="text-white bg-black py-2 px-3">&rarr;</button>
          </div>

        </div>
      </div>
      <div className="flex justify-between items-center 
            flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10 max-md:py-2"
      >
        <div className="footer__copyrights-link ">
          <p className=" max-md:text-sm text-nowrap max-sm:text-xs">@2024  all rights reserved &copy;</p>
          <Link
            href="/"
            className="text-gray-500 max-md:text-sm max-sm:text-xs"

          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500 max-md:text-sm max-sm:text-xs"

          >
            Terms of use
          </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer