"use client"

import { filterSections, productData } from "@/constants";
import { useState } from "react";
import { ProductCard } from "./ProductCard";

interface productListProps {
  gender: string
}
export const ProductList = ({ gender }: productListProps) => {

  const [category, setCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 16;

  const active = true;
  const filteredGender = filterSections.filter((item) => item.section === gender)

  //calculate the total page
  const totalPages = Math.ceil(productData.length / itemsPerPage);

  //calculate the products to show the current page
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentProducts = productData.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  }

  return (
    <div className="flex w-full gap-3">
      <div className="flex-[1] w-full flex flex-col px-1 py-5 text-gray-800 gap-3">
        <div className="flex flex-col mb-7 gap-2">
          <h3 className="font-base font-extrabold mb-2">New Arrivals</h3>
          <p className={`w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2 ${active ? 'activefilter' : ''}`}>View All</p>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Clothes</p>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Shoes & Accessories</p>
        </div>

        <div className="flex flex-col mb-7 gap-2">
          <h3 className="font-base font-extrabold mb-2">Offers And Highlights</h3>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Best Sellers</p>
        </div>

        <div className="flex flex-col mb-7 gap-2">
          <h3 className="font-base font-extrabold mb-2">Look Book</h3>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Smart</p>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Casual</p>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Street Nineties Nostalgia</p>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Street Luxe Athleisure</p>
        </div>

        <div className="flex flex-col mb-7 gap-2">
          <h3 className="font-base font-extrabold mb-2">Trending Now</h3>
          <p className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">Fall Fashion 2024</p>
        </div>

        <div className="flex flex-col mb-7 gap-2">
          <h3 className="font-base font-extrabold mb-2">Shop by Product</h3>
          {
            filteredGender[0].catogories.map((item, i) => (
              <p key={i} className="w-max text-sm font-normal cursor-pointer hover:text-red-600 hover:underline underline-offset-2">{item}</p>
            ))
          }
        </div>
      </div>
      <div className="flex-[6] flex flex-col items-center">
        <div className="flex gap-4 flex-wrap justify-center">
          {currentProducts.map((product, index) => (
            <ProductCard key={index} product={product} />
          ))}
        </div>
        <div className="flex gap-2 mt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Previous
          </button>
          <span className="px-3 py-1 text-gray-800">Page {currentPage} of {totalPages}</span>
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>

    </div>
  )
}
