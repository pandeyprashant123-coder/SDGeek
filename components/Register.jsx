"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { UseDispatch } from "react-redux";

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
        // const res1 = await fetch('/api/score/new',{
        //   method:"POST",
        //   body:JSON.stringify({
        //     score:0,
        //     userId:session?.user.id
        //   })
        // })
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
    <div className="flex flex-col items-center justify-center pt-10">
      <form
        action=""
        onSubmit={handleSubmit}
        className="flex flex-col w-1/4 gap-3"
      >
        <label htmlFor="firstName">First Name</label>
        <input
          id="firstName"
          type="text"
          name="firstName"
          label="First Name"
          onChange={handleChange}
        />
        <label htmlFor="lastName">last Name</label>
        <input
          id="lastName"
          type="text"
          name="lastName"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <label htmlFor="confirmPassword">confirmPassword</label>
        <input
          id="confirmPassword"
          type="password"
          name="confirmPassword"
          onChange={handleChange}
        />
        <button type="submit" className="border w-2/4">
          Sign Up
        </button>
      </form>
      {
        error &&(
            <p>{error}</p>
        )
      }
      <div>
        <Link href="/login">Already registered? <span className="underline">Log In</span></Link>
      </div>
    </div>
  );
};

export default Auth;
