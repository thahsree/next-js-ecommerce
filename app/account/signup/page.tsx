"use client";

import LoginForm from "@/components/LoginForm";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function SignUp() {

  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPass, setConfirmPass] = useState("")
  const router = useRouter()

  async function submitForm() {

    if (password !== confirmPass) {
      alert("password missmatch");
      return
    }
    try {

      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email, password, username })
      })

      if (!res.ok) {
        throw new Error("Failed to Register")
      }

      await res.json()
      router.push('/account')
      return

    } catch (error) {
      alert(error)
    }
  }

  return (
    <div className="w-full flex justify-center">
      <LoginForm type="signup" setUserName={setUserName} setEmail={setEmail} setPassword={setPassword} setConfirmPass={setConfirmPass} submitForm={submitForm} />
    </div>
  )
}
