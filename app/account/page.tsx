"use client"
import Login from "@/components/Login";
import { signOut, useSession } from "next-auth/react";


export default function Account() {

  const { data: session } = useSession()
  return (
    <div className="flex w-full items-center justify-center">
      {
        session ? <button onClick={()=> signOut()}>Log Out {session?.user.name}</button> :<Login/>
      }
      
    </div>
  )
}
