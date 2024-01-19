"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
const TrashCan = ({type,onDump,worngDump,img}) => {
    const [rdumping, setRdumping] = useState(false)
    const [wdumping, setWdumping] = useState(false)
    const [{isOver}, drop] = useDrop({
        accept: 'trashSprite',
        drop: (item) => {
          if (item.id === type) {
            // Trigger onDump callback only when trash is dropped into the correct can
            onDump();
            setRdumping(true)
            setTimeout(() => {
                setRdumping(false);
              }, 700);
          }
          else{
            worngDump()
            setWdumping(true)
            setTimeout(() => {
                setWdumping(false);
              }, 700);
          }
        },
        collect:(monitor)=>({
            isOver:!!monitor.isOver()
        })
      });
      useEffect(()=>{
        
      },[isOver])
      

    // console.log(isOver)
      return (
        <div
          ref={drop}
          className={`${isOver &&"scale-110"}`}
        >
          <Image src={img} width={200} height={10} className={`text-black ${wdumping && "animate-bounce-slow"}`}/>

          <p className={`${rdumping?"block bg-yellow-500":"hidden "} absolute bottom-12 text-white p-2 rounded-lg font-semibold`}>correct can</p>
          <p className={`${wdumping?"block bg-red-900":"hidden "} absolute bottom-12 text-white p-2 rounded-lg font-semibold`}>Incorrect can</p>
        </div>
      )
}

export default TrashCan