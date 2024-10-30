
import { footerLinks } from "@/constants"
import Link from "next/link"

const Footer = () => {
  return (
    <footer className="flex flex-col text-black-100 mt-5 border-t
     border-gray-100 bg-gray-200 px-32 min-sm:px-10"
    >
      <div className="flex max-md:flex-col flex-wrap justify-between gap-5
            sm:px-16 px-6 py-10
        ">
        <div className="flex gap-20">
          {
            footerLinks.map((link) => (
              <div key={link.title} className="flex flex-col gap-3 wrap max-w-[150px]">
                <h3 className="font-bold">{link.title}</h3>
                {
                  link.links.map((item) => (
                    <Link
                      key={item.name}
                      href={item.link}
                      className="text-gray-500"
                    >
                      {item.name}
                    </Link>
                  ))
                }
              </div>
            ))
          }

          <div className="flex h-max justify-center items-center border border-gray-300">
            <input
              type="text"
              className="border-none outline-none focus:ring-0 py-2 px-5"
              placeholder="email address"
            />
            <button className="text-white bg-black py-2 px-3">&rarr;</button>
          </div>

        </div>
      </div>
      <div className="flex justify-between items-center 
            flex-wrap mt-10 border-t border-gray-100 sm:px-16 px-6 py-10"
      >
        <div className="footer__copyrights-link">
          <p>@2024  all rights reserved &copy;</p>
          <Link
            href="/"
            className="text-gray-500"

          >
            Privacy Policy
          </Link>
          <Link
            href="/"
            className="text-gray-500"

          >
            Terms of use
          </Link>
        </div>
      </div>

    </footer>
  )
}

export default Footer