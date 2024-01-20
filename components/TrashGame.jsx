"use client";
import React, { useEffect, useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import Image from "next/image";

import TrashCan from "./TrashCan";
import TrashSprite  from "./TrashSprite";

import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "@/app/redux/features/counterSlice";
import Link from "next/link";
import { useSession } from "next-auth/react";
import {useRouter} from "next/navigation";
import Video from "./Video";

const Popup = ({audio}) => {
    
  
    return (
      <div className={`popup duration-150 ease-linear overflow-hidden absolute rounded-lg top-36 flex flex-col gap-3 p-5 bg-yellow-300`}>
        <p className="text-green-800 font-bold text-2xl">Green is for organic waste</p>
        <p className="text-blue-700 font-bold text-2xl">Blue is for inorganic waste</p>
      </div>
    );
  };

const getRandomSprite =()=>{
    const spriteImages = ['organic1.png', 'organic2.png', 'organic3.png','organic4.png','organic5.png','organic6.png','organic7.png','organic8.png','organic5.png','inorganic1.png','inorganic2.png','inorganic3.png','inorganic4.png','inorganic5.png','inorganic6.png'];
    return spriteImages[Math.floor(Math.random() * spriteImages.length)];
}
const TrashGame = () => {
  const [Exit, setExit] = useState(false);
  const router = useRouter()
    const [currentSprite, setCurrentSprite] = useState(getRandomSprite())
    const [fire, setFire] = useState(false)
    const [audio,setAudio] = useState(true)
    const count = useSelector((state) => state.counter.value)
    const globalCount = useSelector((state) => state.counter.globalScore)
  const dispatch = useDispatch()
  const {data:session} = useSession()
  const handleCorrectDump = () => {
    dispatch(increment())
    setCurrentSprite(getRandomSprite());
    setTimeout(() => {
        setFire(false);
      }, 400);
    setFire(true)
  };
  const handleIncorrectDump = () =>{
    dispatch(decrement());
   
  }

  console.log(session)
  const handleClick = async ()=>{
    try {
      const res = await fetch('api/scoreUpdate',{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
          score:globalCount,
          email:session?.user.email
        })
      })
      if(res.ok){
        router.push('/gamesCollections')
      }
    } catch (error) {
      console.log(error)
    }
  }
  
  
  useEffect(() => {
    if (count % 5 === 0 && count !== 0) {
      dispatch(increment());
    }
  }, [count, dispatch]);
  return (
    <div className="h-screen w-screen flex flex-col pt-20 items-center " style={{backgroundImage:'url(/assets/TrashBackground.jpg)', backgroundSize:"cover"}}>
        <Popup audio={audio}/>
        {
          audio&&(
            <div className="absolute top-28">
            <Video src={"degradable_waste"}/>  
              <button onClick={()=>setAudio(false)} className="bg-white font-bold text-xl px-2 py-1">Skip&rarr;</button>
            </div>
          )
        }
        {/* <audio autoPlay loop src="/assets/background.wav">
        </audio> */}
        <DndProvider backend={HTML5Backend}>
        <div style={{textAlign: "center" }} className="bg-yellow-600 text-white font-bold text-lg p-2 rounded-md">
          <p>Score: {count}</p>
            {fire &&(
                <audio autoPlay loop src="/assets/pop.mp3">
                </audio>
            )}
        </div>
        <div className="flex justify-between w-screen px-28 mt-[20rem] items-end">
            <div className="ml-10">
            <TrashSprite type={currentSprite} onDump={handleCorrectDump} />
            </div>
            <div
            className="flex gap-5"
            >
            <TrashCan type="organic" img="/assets/Bin.svg" onDump={handleCorrectDump} worngDump={handleIncorrectDump} />
            <TrashCan type="inorganic" img="/assets/Bin.png" onDump={handleCorrectDump} worngDump={handleIncorrectDump}/>
            </div>
        </div>
      </DndProvider>
      <button onClick={handleClick} className="bg-red-600 text-white text-xl font-bold px-6 py-1 -translate-y-10 rounded-lg">Exit</button>
    </div>
  );
};

export default TrashGame;
