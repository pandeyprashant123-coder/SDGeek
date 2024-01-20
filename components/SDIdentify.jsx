'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { useDispatch ,useSelector} from 'react-redux';
import { increment } from '@/app/redux/features/counterSlice';
import { useRouter } from 'next/navigation';
import { useSession } from 'next-auth/react';
import Video from './Video';

const SDIdentify = () => {
    const router = useRouter()
  const categories = ['renewable', 'non-renewable'];
  const dispatch = useDispatch()
  const {data:session} = useSession()
  const globalCount = useSelector((state) => state.counter.globalScore)
  const allImages = [
    // Define your images with respective categories
    { id: 1, image: '/assets/identifySD/nonrenewable1.jpeg', category: 'non-renewable' },
    { id: 2, image: '/assets/identifySD/nonrenewable2.jpeg', category: 'non-renewable' },
    { id: 3, image: '/assets/identifySD/nonrenewable3.jpeg', category: 'non-renewable' },
    { id: 4, image: '/assets/identifySD/nonrenewable4.png', category: 'non-renewable' },
    { id: 5, image: '/assets/identifySD/nonrenewable5.jpeg', category: 'non-renewable' },
    { id: 6, image: '/assets/identifySD/renewable1.jpeg', category: 'renewable' },
    { id: 7, image: '/assets/identifySD/renewable2.jpeg', category: 'renewable' },
    { id: 8, image: '/assets/identifySD/renewable3.jpeg', category: 'renewable' },
    { id: 9, image: '/assets/identifySD/renewable4.jpeg', category: 'renewable' },
    { id: 10, image: '/assets/identifySD/renewable6.png', category: 'renewable' },
    { id: 11, image: '/assets/identifySD/renewable5.png', category: 'renewable' },
    { id: 12, image: '/assets/identifySD/renewable7.png', category: 'renewable' },
    // { id: 10, image: '/assets/identifySD/10.jpg', category: 'organic' },
    // { id: 11, image: '/assets/identifySD/11.jpg', category: 'organic' },
    // { id: 12, image: '/assets/identifySD/12.jpg', category: 'organic' },
    // { id: 13, image: '/assets/identifySD/13.jpg', category: 'organic' },
    // { id: 14, image: '/assets/identifySD/14.jpg', category: 'organic' },
    // { id: 15, image: '/assets/identifySD/15.jpg', category: 'organic' },
    // { id: 16, image: '/assets/identifySD/16.jpeg', category: 'inorganic' },
    // { id: 17, image: '/assets/identifySD/17.jpeg', category: 'inorganic' },
    // { id: 18, image: '/assets/identifySD/18.jpeg', category: 'inorganic' },
    // { id: 19, image: '/assets/identifySD/19.jpeg', category: 'inorganic' },
    // { id: 20, image: '/assets/identifySD/20.jpeg', category: 'inorganic' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [userSelection, setUserSelection] = useState(Array(8).fill(false));
  const [completed,setCompleted] = useState(false)
  const [notCompleted,setNotCompleted] = useState(false)
  const [audio, setAudio] = useState(true)
  useEffect(() => {
    // Randomly select a category
    // const shuffledCategories = categories.sort(() => Math.random() - 0.5);
    // const randomCategory = shuffledCategories[0];
    const randomCategory = "renewable"
    setSelectedCategory(randomCategory);
    let filteredImages;
    // if (randomCategory == 'organic' || randomCategory == 'inorganic') {
    //   filteredImages = allImages.filter(
    //     (image) => image.category === 'organic' || image.category == 'inorganic'
    //   );
    // }
    if (randomCategory == 'renewable' || randomCategory == 'non-renewable') {
      filteredImages = allImages.filter(
        (image) =>
          image.category === 'renewable' || image.category == 'non-renewable'
      );
    }

    const shuffledImages = filteredImages
      .sort(() => Math.random() - 0.5)
      .slice(0, 8);
    setSelectedImages(shuffledImages);
  }, []);

  const handleImageClick = (index) => {
    const updatedUserSelection = [...userSelection];
    updatedUserSelection[index] = !updatedUserSelection[index];
    setUserSelection(updatedUserSelection);
  };

  const handleSubmit = () => {
    const correctSelection = selectedImages.every(
      (image, index) =>
        (image.category === selectedCategory) === userSelection[index]
    );

    if (correctSelection) {
    //   alert('Congratulations! You identified the correct images.');
        setCompleted(true)
      dispatch(increment())
    } else {
    //   alert('Incorrect! Try again.');
    setNotCompleted(true)
}
// router.push('/identifySD')

    setSelectedCategory('');
    setSelectedImages([]);
    setUserSelection(Array(8).fill(false));
  };
  const handleClick = async (task)=>{
    try {
      const res = await fetch('api/scoreUpdate',{
        method:"PATCH",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
          score:globalCount,
          email:session?.user.email
        })
      })
      if(res.ok){
        if(task=="restart"){
            setCompleted(false)
            setNotCompleted(false)
            setSelectedCategory("")
            setSelectedImages([])
            setUserSelection([])
        }
        if(task =="exit"){
            router.push('/gamesCollections')
        }
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center bg-main-bg bg-no-repeat bg-cover gap-4 relative pt-20">

{!audio&&(<audio autoPlay loop src="/assets/background.wav">
        </audio>)}
        {
          audio&&(
            <div className="absolute top-28">
            <Video src={"renew_waste"}/>  
              <button onClick={()=>setAudio(false)} className="bg-white font-bold text-xl px-2 py-1">Skip&rarr;</button>
            </div>
          )
        }
      {
        userSelection &&(
            <Image src="/assets/Fire.gif" width={70} height={1} className="absolute top-20 translate-x-16"/>
        )
      }
      {!completed&&(<p className="text-4xl bg-yellow-600 text-white font-bold p-4 rounded-xl">
        Selected Category:{' '}
        <span className="font-bold ">
          {selectedCategory == 'renewable'
            &&'Renewable Source of Energy'}
        </span>
      </p>)}
      <div className="grid grid-cols-4 w-[60%]  ">
        {selectedImages.map((image, index) => (
          <div
            className="rounded-full w-[16rem] h-[16rem] flex justify-center items-center "
            key={index}
            onClick={() => handleImageClick(index)}
          >
            <Image
              src={image.image}
              alt={`Image ${image.id}`}
              width={10}
              height={10}
              className={`w-[12rem] h-[12rem] object-cover ${
                userSelection[index]
                  ? 'border-[2px] border-green-600'
                  : 'border-transparent'
              } 
              rounded-2xl
              
              `}
              unoptimized
            />
          </div>
        ))}
      </div>
      {completed && (
        <>
        <h1 className='text-2xl font-semibold'>You got a coin. Keep it up!</h1>
        <Image src='/assets/SDdance.gif' width={100} height={10} unoptimized className='absolute w-[20rem] h-[20rem] top-52'/>
        </>
      )}
      {notCompleted && (

          <h1 className='text-2xl font-semibold'>Better Luck Next Time.</h1>
      )}
      {
        completed?(
            
            <div className='flex gap-4 mt-10'>
                <audio autoPlay src="/assets/correct.wav">
        </audio>
            <button onClick={()=>handleClick("reset")} className="bg-red-600 text-white text-xl font-bold px-6 py-1 -translate-y-10 rounded-lg">Reset</button>
      <button onClick={()=>handleClick("exit")} className="bg-red-600 text-white text-xl font-bold px-6 py-1 -translate-y-10 rounded-lg ">Exit</button>
  
            </div>
        ):(
      <button
        className="text-2xl bg-yellow-600 text-white p-4 rounded-xl"
        onClick={handleSubmit}
      >
        Submit Selection
      </button>

        )
      }
    </div>
  );
};

export default SDIdentify;