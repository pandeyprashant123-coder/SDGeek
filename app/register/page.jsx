import React from 'react'
import Auth from '@/components/Register'
import { getServerSession } from 'next-auth'
import { redirect } from 'next/navigation'
import { authOptions } from '../api/auth/[...nextauth]/route'

const page = async () => {
    const session = await getServerSession(authOptions)
    if (session) redirect('/dashboard')
  return (
    <div>
        <Auth/>
    </div>
  )
}

export default page