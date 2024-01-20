"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
//import Image from "next/image";

const inititalState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
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
    if (!Object.values(formData).every(Boolean)) {
        setError("All fields are necessary");
        return
      }
    try {
        const res=await fetch('api/register',{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(formData)
        })
        if(res.ok){
            const form=e.target;
            form.reset()
            router.push('/login')
        }else{
            console.log("user registration failed")
        }
        const {existingUser} = await res.json()
        if(existingUser) {
            setError("User already exists")
            return
        }
    } catch (error) {
        console.log(error)
    }

  };
  return (
    <div className="h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-cover bg-center relative inset-0 z-20" >
       <div
        className="relative flex flex-col justify-center items-center  w-full h-full bg-black bg-opacity-30"
        style={{ backdropFilter: "blur(5px)" }}>
        <form
          action=""
          onSubmit={handleSubmit}
          className="py-4 flex flex-col w-1/4 gap-3"
        >
          <label htmlFor="firstName" className="font-semibold">First Name</label>
          <input
            id="firstName"
            type="text"
            name="firstName"
            label="First Name"
            onChange={handleChange}
            placeholder="Enter first name"
            className="h-[5vh] p-4 rounded-lg border-none font-semibold"
          />
          <label htmlFor="lastName" className="font-semibold">Last Name</label>
          <input
            id="lastName"
            type="text"
            name="lastName"
            onChange={handleChange}
            placeholder="Enter last name"
            className="h-[5vh] p-4 rounded-lg border-none font-semibold"
          />
          <label htmlFor="email" className="font-semibold">Email</label>
          <input id="email" type="email" name="email" onChange={handleChange} placeholder="Enter your email" className="h-[5vh] p-4 rounded-lg border-none font-semibold" />
          <label htmlFor="password" className="font-semibold">Password</label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
            placeholder="Create password"
            className="h-[5vh] p-4 rounded-lg border-none font-semibold"
          />
          <label htmlFor="confirmPassword" className="font-semibold">Confirm Password</label>
          <input
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
            placeholder="Confirm password"
            className="h-[5vh] p-4 rounded-lg border-none font-semibold"
          />
          <button type="submit" className="border py-3 text-white px-4 mt-2 rounded-lg text-2xl font-semibold w-2/4">
            Sign Up
          </button>
        </form>
        {/* {
          error &&(
              <p>{error}</p>
          )
        } */}
        <div className="py-2 flex flex-col justify-center items-center text-center">
          <Link href="/login" className="font-semibold text-white ">Already registered? <span className="underline">Log In</span></Link>
        </div>
      </div>
    </div>
  );
};

export default Auth;
