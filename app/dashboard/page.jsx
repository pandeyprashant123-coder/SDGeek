"use client"
import React ,{useEffect}from 'react'
import UserInfo from '@/components/UserInfo'
import { useSession } from 'next-auth/react'
import MainScreen from '@/components/MainScreen'

const page = () => {
  
  return (
    <div>
        <MainScreen/>
    </div>
  )
}

export default page