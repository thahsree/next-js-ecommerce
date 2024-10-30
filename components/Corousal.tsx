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
    items: { image: string; name?: string; price?: string }[];
  };
  type:string
}

const Corousal = ({ activeItem , type }: CorousalProps) => {

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
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

  // Check if items are present before rendering
  if (!activeItem || activeItem.items.length === 0) {
    return <div>No items available for {activeItem?.title || 'this section'}.</div>;
  }

  return (
    <div className="w-full slider-container my-5">
      {/* Display the title */}
      {
        type === "trending" ? '':(
          <h2 className="mb-4 text-xl font-semibold">{activeItem.title}</h2>
        )
      }

      <Slider {...settings}>
        {activeItem.items.map((item, i) => (
          <Link key={i} href="/" className="">
            <div className="relative bg-slate-100 w-[230px] h-[300px]"> {/* Ensure explicit width/height */}
              <Image
                src={item.image}
                alt="image"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              />
            </div>
            <h1 className="mt-1 font-light text-cl tracking-wide">{item.name}</h1>
            <h1 className="mt-1 font-light text-cl tracking-wide">
              {
                type === "trending" ?
                `AED ${item.price}`:(
                  `${item.price} AED`
                )
              }
            </h1>
          </Link>
        ))}
      </Slider>
    </div>
  );
};

export default Corousal;
