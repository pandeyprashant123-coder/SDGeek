"use client"
import React ,{useEffect}from 'react'
import UserInfo from '@/components/UserInfo'
import { useSession } from 'next-auth/react'

const page = () => {
  
  return (
    <div>
        <UserInfo/>
    </div>
  )
}

export default page