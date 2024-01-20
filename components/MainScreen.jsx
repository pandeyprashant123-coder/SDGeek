import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const MainScreen = () => {
  return (
    <div className="h-[54rem] w-full flex items-center justify-center  ">
      <div className="flex-[2] "></div>
      <div className="flex-1 border-2 rounded-lg hover:-translate-y-2 duration-200">
        <Link
          href="/gamesCollections"
          className="w-full h-full p-4 flex justify-center "
        >
          <h1>Start Game</h1>
        </Link>
      </div>
      <div className="flex-[2] ">
        <div className="w-full flex justify-end items-center mr-4 ">
          <div className="border-[1px] border-red-400 h-fit rounded-lg hover:-translate-y-2 duration-200">
            <Link
              href="/gamesCollections"
              className="w-full h-full p-4 flex justify-center rounded-lg  "
            >
              <h1>Complete Daily Quest</h1>
            </Link>
          </div>
          <Image
            alt="Daily Quest"
            width={10}
            height={10}
            src="/assets/daily_quest.jpg"
            className="w-[10rem] h-[20rem] object-contain "
            unoptimized
          />
        </div>
      </div>
    </div>
  );
};

export default MainScreen;
