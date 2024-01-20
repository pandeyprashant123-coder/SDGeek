"use client"
import React, { useState,useEffect } from 'react'
import Image from 'next/image'

import { useSelector,useDispatch } from 'react-redux'




const Coin = () => {
    const count = useSelector((state) => state.counter.globalScore)
    const dispatch = useDispatch()
    // useEffect(() => {
    //     if (count % 20 === 0 && count !== 0) {
    //       const audio = new Audio('/assets/coin.mp3');
    //       audio.play();
    //       dispatch(increment());
    //     }
    //   }, [count, dispatch]);
  return (
    <div className='w-20 bg-yellow-300 absolute top-20 right-5 rounded-lg p-1 flex gap-2 items-center'>
        <Image src='/assets/coin.png' alt='coin' width={40} height={20} className=''/>
        <h1 className='font-bold text-xl text-red-800'>{count}</h1>
        {

        }
    </div>
  )
}

export default Coin