'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import AudioPlayer from './AudioPlayer';
import { useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';

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
    // {
    //   id: 2,
    //   question: 'Electric Vehicle or Engine Vehicle?',
    //   options: [
    //     { id: 1, image: '/assets/quest_photos/2_1.jpg', isCorrect: false },
    //     { id: 2, image: '/assets/quest_photos/2_2.jpg', isCorrect: true },
    //   ],
    // },
    // {
    //   id: 3,
    //   question: 'Reusable water bottles or disposable water bottles?',
    //   options: [
    //     { id: 1, image: '/assets/quest_photos/3_1.jpg', isCorrect: true },
    //     { id: 2, image: '/assets/quest_photos/3_2.jpg', isCorrect: false },
    //   ],
    // },
    // {
    //   id: 4,
    //   question: 'Walking/bicycling for short distance or using car ?',
    //   options: [
    //     { id: 1, image: '/assets/quest_photos/4_1.png', isCorrect: true },
    //     { id: 2, image: '/assets/quest_photos/4_2.png', isCorrect: false },
    //   ],
    // },
    // {
    //   id: 5,
    //   question:
    //     'Leave the unused device turned on or turn off device when not in use?',
    //   options: [
    //     { id: 1, image: '/assets/quest_photos/5_1.jpg', isCorrect: true },
    //     { id: 2, image: '/assets/quest_photos/5_2.jpg', isCorrect: false },
    //   ],
    // },
    // {
    //   id: 6,
    //   question: 'Use plastic bag or  cotton bag?',
    //   options: [
    //     { id: 1, image: '/assets/quest_photos/6_1.jpg', isCorrect: true },
    //     { id: 2, image: '/assets/quest_photos/6_2.jpg', isCorrect: false },
    //   ],
    // },
    // {
    //   id: 7,
    //   question: 'Use public vehicle or use private vehicle?',
    //   options: [
    //     { id: 1, image: '/assets/quest_photos/7_1.jpg', isCorrect: true },
    //     { id: 2, image: '/assets/quest_photos/7_2.jpeg', isCorrect: false },
    //   ],
    // },
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
    // {
    //   id: 10,
    //   question: 'Using cloth towel or paper towel?',
    //   options: [
    //     { id: 1, image: '/assets/quest_photos/10_1.jpg', isCorrect: true },
    //     { id: 2, image: '/assets/quest_photos/10_2.jpg', isCorrect: false },
    //   ],
    // },
  ];

  const questionAudioSources = [
    '/assets/quiz_audio/recyclingorthroughitaway.mp3',
    '/assets/quiz_audio/paperstrawsorplasticstraws.mp3',
    '/assets/quiz_audio/plantreesorcutting.mp3',
    // Add more audio sources as needed
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [audioSrc, setAudioSrc] = useState();
  const [userSelection, setUserSelection] = useState(null);
  const [score, setScore] = useState(0);
  const [coins, setCoins] = useState(0);
  const [audioMuted, setAudioMuted] = useState(true);
  const [correctAnswer, setCorrectAnswer] = useState(null);

  const handleOptionClick = (optionId) => {
    setUserSelection(optionId);

    const currentQuestion = questions[currentQuestionIndex];
    const selectedOption = currentQuestion.options.find(
      (option) => option.id === optionId
    );

    if (selectedOption && selectedOption.isCorrect) {
      setScore((prevScore) => prevScore + 1);
      setCorrectAnswer(true);
    } else {
      setCorrectAnswer(false);
    }

    setTimeout(() => {
      setUserSelection(null);
      setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      setCorrectAnswer(null); // Reset correctAnswer state
    }, 4000); // Adjust the delay as needed
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
        className="rounded-xl "
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
    if (correctAnswer !== null) {
      const audioSource = correctAnswer
        ? '/assets/quiz_audio/correct_answer.mp3'
        : '/assets/quiz_audio/incorrect_answer.mp3';

      // Update audio source and play
      setAudioSrc(audioSource);
    }
  }, [correctAnswer]);
  useEffect(() => {
    // Check if the quiz is completed
    if (currentQuestionIndex >= questions.length) {
      // Update coins based on the score
      setCoins((prevCoins) => prevCoins + score * 10);
    }
  }, [currentQuestionIndex, questions.length, score]);

  return (
    <div className="relative h-[calc(100vh-4rem)] w-full flex justify-center pt-20 bg-main-bg bg-no-repeat bg-cover">
      <div className="absolute bottom-20 w-full">
        <marquee direction="left" width="100%" scrollamount="20">
          <Image
            width={10}
            height={10}
            alt="img"
            src="/assets/model1.gif"
            className="w-[12rem] h-[12rem]"
          />
        </marquee>
      </div>
      <div className="absolute bottom-20 w-full ">
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
      <AudioPlayer source={questionAudioSources[currentQuestionIndex]} />
      <AudioPlayer source={audioSrc} />
      <div className="absolute top-20 right-20 ">
        <div className="flex items-center ">
          <Image
            width={10}
            height={10}
            alt="img"
            src="/assets/coin.png"
            className="w-[4rem] h-[4rem]"
            unoptimized
          />
          <span className="text-2xl">{coins}</span>
        </div>
      </div>

      {currentQuestionIndex < questions.length ? (
        <div className="w-[60%] flex flex-col items-center gap-16  ">
          {/* <h1 className="text-6xl mt-5  ">
            Question {currentQuestionIndex + 1}
          </h1> */}
          <p className="text-3xl font-bold bg-yellow-600 text-white p-4 rounded-xl">
            {questions[currentQuestionIndex]?.question}
          </p>
          <div className="w-[68%] flex justify-between ">
            {renderOptions(questions[currentQuestionIndex]?.options)}
          </div>
        </div>
      ) : (
        <p className="bg-yellow-600 text-white p-4 rounded-xl mt-16 h-fit">
          Quiz completed! Thank you for playing. Your score is {score}
        </p>
      )}
    </div>
  );
};

export default Quiz;
