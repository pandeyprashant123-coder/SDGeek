import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainScreen = () => {
  return (
    <div className="h-[54rem] w-full flex items-center justify-center  " >
      <div className="flex-[2] "></div>
      <div className="flex-1 border-2 rounded-lg hover:-translate-y-2 duration-200">
        <Link
          href="/gamesCollections"
          className="w-full h-full p-4 flex justify-center bg-slate-400 rounded-xl text-white font-bold text-4xl"
        >
          <h1>Start Game</h1>
        </Link>
      </div>
      <div className="flex-[2] mt-36">
        <div className=" flex justify-end items-center mr-4 h-[60vh]">
          <div className="border-[1px] border-red-400 h-fit rounded-lg hover:scale-110 duration-200 translate-x-20 -translate-y-20">
            <Link
              href="/treePlant"
              className="w-full h-full p-4 flex justify-center rounded-lg text-xl  "
            >
              <h1>Complete Daily Quest</h1>
            </Link>
          </div>
          <Image
            alt="Daily Quest"
            width={10}
            height={10}
            src="/assets/daily_quest.png"
            className="w-[20vw] h-full object-fit "
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;