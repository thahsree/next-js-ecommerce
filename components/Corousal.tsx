"use client";

import Image from 'next/image';
import Link from 'next/link';
import Slider from "react-slick";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

import '../app/globals.css';

// Updated interface to match the data structure
interface CorousalProps {
  activeItem: {
    title: string;
    items: {
      image: string;
      name?: string;
      price?: string;
      sale?: string;
    }[];
  };
  type: string;
}

const Corousal = ({ activeItem, type }: CorousalProps) => {

  // Slick slider settings
  const settings = {
    dots: activeItem?.items.length > 6 ? true : false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 6,
    responsive: [
      {
        breakpoint: 1500,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 2,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 1304,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const isSale = activeItem.title === 'Sale'
  const isCategory = activeItem.title === 'Shop by Category'

  // Check if items are present before rendering
  if (!activeItem || activeItem.items.length === 0) {
    return <div>No items available for {activeItem?.title || 'this section'}.</div>;
  }

  return (
    <div className="w-full slider-container my-5 max-sm:p-1">
      {/* Display the title */}
      {
        type === "trending" || type === "Shop by Category" ? '' : (
          <h2 className="mb-4 text-xl font-semibold">{activeItem.title}</h2>
        )
      }

      <Slider {...settings}>
        {activeItem.items.map((item, i) => (
          <Link key={i} href="/home/products/33" className="">
            <div className="relative bg-slate-100 w-[200px] h-[270px] max-sm:w-[119px] max-sm:h-[180px]"> {/* Ensure explicit width/height */}
              <Image
                src={item.image}
                alt="image"
                fill
                className="object-contain"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
              {
                isSale ? (
                  <div className='bg-red-600 w-full p-2 absolute top-0 text-white flex justify-center'>
                    <h3 className='font-bold'>{item.sale} Off</h3>
                  </div>
                ) : ('')
              }
            </div>
            {
              isCategory ? (<>
                <h1 className='text-lg underline decoration-gray-400 decoration-1 underline-offset-2 uppercase text-gray-700 font-thin text-center max-sm:text-[15px]'>{item.name}</h1>
              </>) : (
                <>
                  <h1 className="font-light max-sm:text-xs text-nowrap truncate">{item.name}</h1>
                  <h1 className="font-light max-sm:text-[10px]">
                    {
                      type === "trending" ?
                        `AED ${item.price}` : (
                          `${item.price} AED`
                        )
                    }
                  </h1>
                </>
              )
            }
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Corousal;
