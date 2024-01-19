"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
const UserInfo = () => {
  const {data:session} = useSession()
  return (
    <div>
      <h1>{session?.user?.name}</h1>
      <h1>{session?.user?.email}</h1>
    </div>
  )
}

export default UserInfo