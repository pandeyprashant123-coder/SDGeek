import React from 'react'
import { useDrag } from 'react-dnd';
import Image from 'next/image';

const TrashSprite = ({type,onDump}) => {
    const [{ isDragging }, drag,preview] = useDrag({
        type: 'trashSprite',
        item:{id:type},
        end: (item, monitor) => {
          const dropResult = monitor.getDropResult();
    
          if (dropResult && dropResult.accepted) {
            // Trigger onDump callback when trash is dropped into the correct can
            onDump();
          }
        },
        collect: (monitor) => ({
          isDragging: !!monitor.isDragging(),
        }),
      });
      console.log(isDragging)
      
    
      return (
        <>
            {preview ? (
        <div
          ref={preview}
          style={{
            display: 'none', // Hide the default preview
          }}
        />
      ) : null}
            <div
            ref={drag}
            className={`cursor-grab bg-transparent ${isDragging &&"opacity-0"}`}
            style={{
                userSelect:"none",
                backgroundColor:"transparent"
            }}
            >
                <Image src="/assets/organic1.png" width={200} height={100}/>
            </div>
        </>
      );
}

export default TrashSprite