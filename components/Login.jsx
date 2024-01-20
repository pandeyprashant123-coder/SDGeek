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

       router.replace('/dashboard')
    } catch (error) {
        console.log("error",error)
    }

  };
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-cover bg-center relative inset-0" >
      <div
        className="relative flex flex-col justify-center items-center  w-full h-full bg-black bg-opacity-30"
        style={{ backdropFilter: "blur(5px)" }}>
        <form
          action=""
          onSubmit={handleSubmit}
          className="py-4 flex flex-col w-1/4 gap-3"
        >
          <label htmlFor="email" className="font-semibold">Email</label>
          <input id="email" type="email" name="email" required placeholder="Enter Email" onChange={handleChange} className="h-[5vh] p-4 rounded-lg border-none font-semibold" />
          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Enter password" required
            className="h-[5vh] p-4 rounded-lg border-none font-semibold"
          />
          <button type="submit" className="border py-3 text-white px-4 mt-2 rounded-lg text-2xl font-semibold w-2/4">
            Sign In
          </button>
        </form>
        {/* {
          error &&(
              <p>{error}</p>
          )
        } */}
        <div>
          <Link href="/register" className="font-semibold text-white ">Not registered? <span className="underline">Register</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
