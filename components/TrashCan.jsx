"use client"
import React, { useEffect, useState } from 'react'
import { useDrop } from 'react-dnd';
const TrashCan = ({type,onDump}) => {
    const [dumping, setDumping] = useState({
        item:"incorrect",
        value:false
    })
    const [{isOver}, drop] = useDrop({
        accept: 'trashSprite',
        drop: (item) => {
          if (item.id === type) {
            // Trigger onDump callback only when trash is dropped into the correct can
            onDump();
            setDumping(p=>p.item=="correct")

          }
        },
        collect:(monitor)=>({
            isOver:!!monitor.isOver()
        })
      });
      useEffect(()=>{

      },[drop])

    console.log(isOver)
      return (
        <div
          ref={drop}
          style={{
            width: '100px',
            height: '100px',
            backgroundColor: type === 'organic' ? 'green' : 'blue',
            textAlign: 'center',
            lineHeight: '100px',
          }}
          className={`${isOver &&"scale-110"}`}
        >
          {type}Trash Can

          <p className={`${dumping.value?"block":"hidden"}`}>{dumping.item} can</p>
        </div>
      )
}

export default TrashCan