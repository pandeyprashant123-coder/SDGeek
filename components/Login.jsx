"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";

const inititalState = {
  email: "",
  password: "",
};

const Auth = () => {
  const [formData, setFormData] = useState(inititalState);
  const [error, setError] = useState("");
  const router = useRouter()
  

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!Object.values(formData).every(Boolean) ) {
      setError("All fields are necessary");
      return
    }
    try{
       const res =  await signIn("credentials",{...formData,redirect:false})
       if(res.error){
        setError("Invalid Credentials")
        return
       }

       router.replace('/')
    } catch (error) {
        console.log("error",error)
    }

  };
  const handleClick=async()=>{
    try {
      const res = await fetch('/api/getScore',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        email:session?.user.email
      })
      })
      const data = await res.json()
      
    } catch (error) {
      
    }
  }
  return (
    <div className="flex flex-col items-center justify-center pt-20">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col w-1/4 gap-3"
      >
        
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <button type="submit" className="border w-2/4">
          Sign In
        </button>
      </form>
      {
        error &&(
            <p>{error}</p>
        )
      }
      <div>
        <Link href="/register">Not registered? <span className="underline">Register</span></Link>
      </div>
    </div>
  );
};

export default Auth;
