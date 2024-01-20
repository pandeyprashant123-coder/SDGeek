'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { increment, updateIt,addCoins } from '@/app/redux/features/counterSlice';
import { useSession } from 'next-auth/react';

const Quiz = () => {
  const questions = [
    {
      id: 1,
      question: 'Recycling a paper or throwing it away?',
      options: [
        { id: 1, image: '/assets/quest_photos/1_1.jpg', isCorrect: false },
        { id: 2, image: '/assets/quest_photos/1_2.jpg', isCorrect: true },
      ],
    },
    {
      id: 2,
      question: 'Paper straw or plastic straw?',
      options: [
        { id: 1, image: '/assets/quest_photos/8_1.png', isCorrect: true },
        { id: 2, image: '/assets/quest_photos/8_2.jpg', isCorrect: false },
      ],
    },
    {
      id: 3,
      question: 'Planting trees or cutting trees?',
      options: [
        { id: 1, image: '/assets/quest_photos/9_1.png', isCorrect: false },
        { id: 2, image: '/assets/quest_photos/9_2.jpg', isCorrect: true },
      ],
    },
  ];


  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [userSelection, setUserSelection] = useState(null);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [correctAnswer, setCorrectAnswer] = useState(null);
  const dispatch = useDispatch()
  const globalCount = useSelector((state) => state.counter.globalScore)
  const {data:session} = useSession()
  const router = useRouter()
//   const count = useSelector((state) => state.counter.value)

  const handleOptionClick = (optionId) => {
    setUserSelection(optionId);

    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === optionId
    );

    if (selectedOption && selectedOption.isCorrect) {
      dispatch(increment())
      setScore(score+1)
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }

    setTimeout(() => {
      setUserSelection(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCorrectAnswer(null); 
    }, 1000); 
  };

  const renderOptions = (options) => {
    return options?.map((option) => (
      <div
        key={option.id}
        onClick={() => handleOptionClick(option.id)}
        style={{
          border:
            userSelection === option.id
              ? '2px solid green'
              : '2px solid transparent',
          cursor: 'pointer',
        }}
        className="rounded-xl  "
      >
        <Image
          width={10}
          height={10}
          src={option.image}
          alt={`Option ${option.id}`}
          className="w-[16rem] h-[16rem] origin-cover rounded-xl hover:scale-110 duration-300 shadow-xl shadow-[#7b7051] "
          unoptimized
        />
      </div>
    ));
  };
  useEffect(() => {
    if (currentQuestionIndex >= questions.length) {
      setCoins((prevCoins) => prevCoins + score * 10);
      dispatch(updateIt(globalCount+coins))

    }
  }, [currentQuestionIndex, questions.length, score]);
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
            router.refresh()
            setCurrentQuestionIndex(0)
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
    <div className="relative h-[calc(100vh-4rem)] w-full flex gap-10 justify-center pt-20 bg-main-bg bg-no-repeat bg-cover">
      <div className="absolute bottom-0 w-full">
        <marquee direction="left" width="100%" scrollamount="20" >
          <Image
            width={10}
            height={10}
            alt="img"
            src="/assets/model1.gif"
            className="w-[12rem] h-[12rem]"
          />
        </marquee>
      </div>
      <div className="absolute bottom-0 w-full ">
        <marquee direction="right" width="100%" scrollamount="20">
          <Image
            width={10}
            height={10}
            alt="img"
            src="/assets/model2.gif"
            className="w-[12rem] h-[12rem] "
          />
        </marquee>
      </div>

      {currentQuestionIndex < questions.length ? (
        <div className="w-[60%] flex flex-col items-center gap-8  ">
          <p className="text-3xl font-bold bg-yellow-600 text-white p-4 rounded-xl">
            {questions[currentQuestionIndex]?.question}
          </p>
          <div className="w-[68%] flex justify-between ">
            {renderOptions(questions[currentQuestionIndex]?.options)}
          </div>
        </div>
      ) : (<>
        <audio autoPlay src="/assets/correct.wav">
        </audio>
        <p className="bg-yellow-600 text-2xl text-white p-4 rounded-xl mt-14 h-fit">
          Quiz completed! Thank you for playing. Your score is {score}
        </p>
        <Image src='/assets/model3.gif' width={100} height={10} unoptimized className='absolute w-[20rem] h-[20rem] top-52'/>
      </>

      )}
      <div className='absolute bottom-0 flex gap-4'>

      <button onClick={()=>handleClick("reset")} className="bg-red-600 text-white text-xl font-bold px-6 py-1 -translate-y-10 rounded-lg">Reset</button>
      <button onClick={()=>handleClick("exit")} className="bg-red-600 text-white text-xl font-bold px-6 py-1 -translate-y-10 rounded-lg ">Exit</button>
      </div>
    </div>
  );
};

export default Quiz;