import { ProductList } from "@/components";
import { Metadata } from "next";


export const metadata: Metadata = {
  description: "About Page",
  
};
export default function Products(){

//get gender from global state
  return (
    <div className="overflow-hidden px-4 min-sm:px-2 max-sm:px-1">
        <ProductList gender="Men"/>
    </div>
  )
}

