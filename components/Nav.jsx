"use client"
import React, { useEffect } from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { signOut } from 'next-auth/react'

const Nav = () => {
    const {data:session} = useSession()

  return (
    <div className='flex justify-between gap-3 p-5 bg-slate-300 fixed w-screen'>
        <Link href="/">Home</Link>
        <div className='flex gap-3'>
            {
                session?(
                    <>
                        <Link href='/dashboard' className=''>{session?.user?.name}</Link>
                        <button onClick={()=>signOut()} className=''>Logout</button>
                    </>
                ):
                (
                    <>
                        <Link href="/login">Login</Link>
                        <Link href="/register">Register</Link>
                    </>
                )
            }
        </div>
        
    </div>
  )
}

export default Nav