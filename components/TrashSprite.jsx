import React from 'react'
import { useDrag } from 'react-dnd';

const TrashSprite = ({type,onDump}) => {
    const [{ isDragging }, drag] = useDrag({
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
    
      return (
        <div
          ref={drag}
          style={{
            width: '50px',
            height: '50px',
            backgroundColor: 'gray',
            opacity: isDragging ? 0.5 : 1,
            cursor: 'move',
          }}
        >
          Trash Sprite
        </div>
      );
}

export default TrashSprite