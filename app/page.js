"use client"
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { UseDispatch, useDispatch } from 'react-redux'
import { updateIt } from './redux/features/counterSlice'

import Coin from '@/components/Coin'

export default function Home() {
  const {data:session} = useSession()
  const dispatch = useDispatch()
  useEffect(()=>{
    const fetchData= async()=>{
      try {
        if(session){
          const res = await fetch(`api/getScore?email=${session?.user.email}`)
          const data = await res.json()
          dispatch(updateIt(data.existingUser.score))
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
    
},[session])
  return (
    <main>
      <Coin/>
    </main>
  )
}
