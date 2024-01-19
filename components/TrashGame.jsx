"use client";
import React, { useEffect, useState } from "react";

import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

import TrashCan from "./TrashCan";
import TrashSprite  from "./TrashSprite";

const TrashGame = () => {
  const [score, setScore] = useState(0);
  const handleCorrectDump = () => {
    setScore(score + 1);
  };
  const handleIncorrectDump = () =>{
    setScore((prevScore) => Math.max(0, prevScore - 1));
  }

  let randomNum = (n)=> {
    return Math.floor(Math.random() * n)
}
  console.log(randomNum(5))

  return (
    <div className="h-screen w-screen flex flex-col pt-20 items-center" style={{backgroundImage:'url(/assets/TrashBackground.jpg)', backgroundSize:"cover"}}>
        <DndProvider backend={HTML5Backend}>
        <div style={{textAlign: "center" }} className="bg-yellow-600 text-white font-bold text-lg p-2 rounded-md">
          <p>Score - {score}</p>
        </div>
        <div className="flex justify-between w-screen px-20 mt-40 items-end">
            <div className="">
            <TrashSprite type={"inorganic"} onDump={handleCorrectDump} />
            </div>
            <div
            className="flex gap-5"
            >
            <TrashCan type="organic" img="/assets/Bin.svg" onDump={handleCorrectDump} worngDump={handleIncorrectDump} />
            <TrashCan type="inorganic" img="/assets/Bin.png" onDump={handleCorrectDump} worngDump={handleIncorrectDump}/>
            </div>
        </div>
      </DndProvider>
    </div>
  );
};

export default TrashGame;
