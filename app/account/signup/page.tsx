"use client";

import LoginForm from "@/components/LoginForm";
import { useState } from "react";

export default function SignUp() {

  const [username , setUserName] = useState("");
  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [confirmPass , setConfirmPass] = useState("")

  function submitForm(){
    
  }

  return (
    <div className="w-full flex justify-center">
      <LoginForm type="signup" setUserName = {setUserName} setEmail={setEmail} setPassword = {setPassword} setConfirmPass={setConfirmPass} submitForm={submitForm}/>
    </div>
  )
}
