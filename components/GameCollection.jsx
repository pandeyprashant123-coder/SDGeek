import Link from "next/link";
import React from "react";

const GameCollection = () => {
  return (
    <div className="flex flex-col h-screen gap-12 w-[50vw] m-auto justify-center text-xl font-semibold">
      <Link
        href="/trashGame"
        className="group border rounded-lg border-black p-4 hover:-translate-y-2 duration-200 text-center"
      >
        <h1>Trash Dump</h1>
        <p className="hidden group-hover:block absolute top-7 right-2 font-light">Click to play</p>
      </Link>
      <Link
        href="/"
        className="group border rounded-lg border-black p-4 hover:-translate-y-2 duration-200 text-center"
      >
        <h1>SD Identify</h1>
        <p className="hidden group-hover:block absolute top-7 right-2 font-light">Click to play</p>
      </Link>
      <Link
        href="/"
        className="group border rounded-lg border-black p-4 hover:-translate-y-2 duration-200 text-center"
      >
        <h1>Choose Green</h1>
        <p className="hidden group-hover:block absolute top-7 right-2 font-light">Click to play</p>
      </Link>
      
    </div>
  );
};

export default GameCollection;
