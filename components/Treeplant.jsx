"use client";
import Image from "next/image";
import React, { useState } from "react";

import { UseDispatch, useDispatch } from "react-redux";
import { decrement } from "@/app/redux/features/counterSlice";

const TreePlanting = () => {
  const [height, setHeight] = useState(0);
  const [coins, setCoins] = useState(0);
  const [treeLevel, setTreeLevel] = useState(0);
  const [isTreePlanted, setIsTreePlanted] = useState(false);
  const [treesCompleted, setTreesCompleted] = useState(0);
  const dispatch = useDispatch();

  const plantTree = () => {
    setHeight(1);
    setCoins((prevCoins) => prevCoins + 400); // Add 400 coins when planting a tree
    setIsTreePlanted(true);
  };

  const waterTree = () => {
    if (height > 0) {
      setHeight((prevHeight) => prevHeight + 1);
      setCoins((prevCoins) => prevCoins - 20);

      if (height % 5 === 0) {
        setTreeLevel((prevLevel) => prevLevel + 1);
        setCoins((prevCoins) => prevCoins + 150);

        if (treeLevel === 5) {
          // Reached the threshold of 3 tree levels
          setTreeLevel(0);
          setTreesCompleted((prevCompleted) => prevCompleted + 1);
          setCoins((prevCoins) => prevCoins + 100);
          setIsTreePlanted(false); // Set isTreePlanted to false to show "Plant a Tree" button
          setHeight(0); // Reset the tree height to 0
        }
      }
    }
  };

  // Function to get the image source based on the tree level
  const getImageSource = () => {
    switch (treeLevel) {
      case 0:
        return "/assets/images/1.png";
      // Replace with the actual image source for level 1
      case 1:
        return "/assets/images/2.png";

      case 2:
        return "/assets/images/3.png";

      case 3:
        return "/assets/images/4.png";

      case 4:
        return "/assets/images/5.png";

      default:
        return null;
    }
  };

  return (
    <div className="pt-20 w-screen">
      <h2 className="text-center font-bold text-5xl">Daily Tree Planting</h2>
      {isTreePlanted ? (
        <div className="flex gap-5 flex-col items-center justify-center">
          <div className="font-bold text-amber-600 text-3xl text-left mt-3">
            <p>Tree Height: {height} meters</p>
            <p>Tree Level: {treeLevel}</p>
          </div>
          <button onClick={waterTree} className="p-4 rounded-xl text-white text-xl font-bold bg-blue-300">
            Water Tree
          </button>
          <div className="w-[20vw] h-[50vh] relative mt-24">
            <Image
              src={getImageSource()}
              alt={`Tree Level ${treeLevel}`}
              unoptimized
              width={200}
              height={20}
              className={`absolute bottom-0 h-full w-full ${treeLevel==0 && "h-32 "} object-contain`}
            />
            
          </div>
          {/* <p>Trees Completed: {treesCompleted}</p>
          <p>Coins: {coins}</p> */}
          {height && <audio autoPlay src="/assets/water.mp3"></audio>}
          
        </div>
      ) : (
        <div className="flex gap-9 flex-col items-center justify-center">
          <div className="font-bold text-amber-600 text-3xl text-left mt-3">
            <p>Tree Height: {height} meters</p>
            <p>Tree Level: {treeLevel}</p>
          </div>
          {/* <Image src={getImageSource()} alt={`Tree Level ${treeLevel}`} width={100} height={20} /> */}
          {/* <p>Trees Completed: {treesCompleted}</p> */}
          <p>Coins: {coins}</p>
          <button onClick={plantTree} className="p-4 rounded-xl bg-green-500">
            Plant a Tree
          </button>
        </div>
      )}
    </div>
  );
};

export default TreePlanting;
