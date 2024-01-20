import React, { useEffect, useState } from 'react'

const Leaderboard = () => {
    const [data, setData] = useState([])
    useEffect(()=>{

        const fetchLeaderBoard=async()=>{
            try {
               const res = await fetch("api/score/new")
               const data = await res.json()
               setData(data.leaderBoardData)
            } catch (error) {
                console.log(error)
            }
        }
        fetchLeaderBoard()
    },[])
  return (
    <div className='w-full h-full flex flex-col justify-center items-center'>
        <div className='w-1/2 flex justify-between items-center px-4 py-2 bg-gray-300 rounded-t-xl text-2xl ' >
            <span className='font-bold '>Name</span>
            <span className='font-bold'>High Score</span>
        </div>
        {data?.map((item)=>(
        <div key={item._id} className=' w-1/2 flex justify-between items-center px-4 py-2 bg-white text-xl ' >
            <span className='font-semibold '>{item.name}</span>
            <span className='font-semibold'>{item.score}</span>
        </div>
        ))}
        
    </div>
  )
}

export default Leaderboard