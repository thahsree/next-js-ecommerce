"use client"
import Login from "@/components/Login";
import { signOut, useSession } from "next-auth/react";


export default function Account() {

  const { data: session , status} = useSession()


  if(status === 'loading'){
    return (
      <div className="flex w-full items-center justify-center">
        loading...
      </div>
    )
  }
 
  return (
    <div className="flex w-full items-center justify-center">
      {
        session ? <button className="border " onClick={()=> signOut()}>Log Out {session?.user.name}</button> :<Login/>
      }
      
    </div>
  )
}
