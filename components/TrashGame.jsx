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
  return (
    <div>
        <DndProvider backend={HTML5Backend}>
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <p>Score: {score}</p>
        </div>
        <div>
          <TrashSprite type={"inorganic"} onDump={handleCorrectDump} />
        </div>
        <div
          className="flex"
        >
          <TrashCan type="organic" onDump={handleCorrectDump} />
          <TrashCan type="inorganic" onDump={handleCorrectDump} />
        </div>
      </DndProvider>
    </div>
  );
};

export default TrashGame;
