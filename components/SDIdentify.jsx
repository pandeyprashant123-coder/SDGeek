// 'use client';

// import Image from 'next/image';
// import React, { useEffect, useState } from 'react';

// const SDIdentify = () => {
//   const [correctImage, setCorrectImage] = useState([]);
//   const [selectedCategory, setSelectedCategory] = useState('');
//   const [score, setScore] = useState(0);
//   const [box1, setBox1] = useState({});
//   const [box2, setBox2] = useState({});
//   const [box3, setBox3] = useState({});
//   const [box4, setBox4] = useState({});
//   const [box5, setBox5] = useState({});
//   const [box6, setBox6] = useState({});
//   const [box7, setBox7] = useState({});
//   const [box8, setBox8] = useState({});
//   const [box9, setBox9] = useState({});
//   // const [box,setBox] = useState({})
//   // console.log(box1);

//   const category = ['renewable', 'non-renewable', 'decomposable'];
//   const imageUrls = [
//     { id: 1, image: '/assets/identifySD/1.png', category: 'renewable' },
//     { id: 2, image: '/assets/identifySD/2.png', category: 'renewable' },
//     { id: 3, image: '/assets/identifySD/3.png', category: 'renewable' },
//     { id: 4, image: '/assets/identifySD/4.jpeg', category: 'non-renewable' },
//     { id: 5, image: '/assets/identifySD/5.jpeg', category: 'non-renewable' },
//     { id: 6, image: '/assets/identifySD/6.jpeg', category: 'non-renewable' },
//     { id: 7, image: '/assets/identifySD/7.jpeg', category: 'non-renewable' },
//     { id: 8, image: '/assets/identifySD/8.jpeg', category: 'non-renewable' },
//     { id: 9, image: '/assets/identifySD/9.jpeg', category: 'non-renewable' },
//     { id: 10, image: '/assets/identifySD/10.jpg', category: 'decomposable' },
//     { id: 11, image: '/assets/identifySD/11.jpg', category: 'decomposable' },
//     { id: 12, image: '/assets/identifySD/12.jpg', category: 'decomposable' },
//     { id: 13, image: '/assets/identifySD/13.jpg', category: 'decomposable' },
//     { id: 14, image: '/assets/identifySD/14.jpg', category: 'decomposable' },
//     { id: 15, image: '/assets/identifySD/15.jpg', category: 'decomposable' },
//     { id: 10, image: '/assets/identifySD/10.jpg', category: 'decomposable' },
//     { id: 11, image: '/assets/identifySD/11.jpg', category: 'decomposable' },
//     { id: 12, image: '/assets/identifySD/12.jpg', category: 'decomposable' },
//     { id: 13, image: '/assets/identifySD/13.jpg', category: 'decomposable' },
//     { id: 14, image: '/assets/identifySD/14.jpg', category: 'decomposable' },
//     { id: 15, image: '/assets/identifySD/15.jpg', category: 'decomposable' },
//   ];

//   const randomValueGenerator = () => {
//     // console.log(Math.floor(Math.random() * (imageUrls.length - 1)));
//     const randomIndex = Math.floor(Math.random() * (imageUrls.length - 1));
//     // if (addedImage.includes(randomIndex)) {
//     //   randomIndex = randomValueGenerator();
//     // }
//     return randomIndex;
//   };
//   const randomCategoryGenerator = () => {
//     const randomIndex = Math.floor(Math.random() * (category.length - 1));
//     return randomIndex;
//   };
//   useEffect(() => {
//     BoxState();
//   }, []);

//   const BoxState = () => {
//     for (let i = 1; i <= 9; i++) {
//       const randomIndex = randomValueGenerator();
//       if (i == 1) {
//         setBox1(imageUrls[randomIndex]);
//       } else if (i == 2) {
//         setBox2(imageUrls[randomIndex]);
//       } else if (i == 3) {
//         setBox3(imageUrls[randomIndex]);
//       } else if (i == 4) {
//         setBox4(imageUrls[randomIndex]);
//       } else if (i == 5) {
//         setBox5(imageUrls[randomIndex]);
//       } else if (i == 6) {
//         setBox6(imageUrls[randomIndex]);
//       } else if (i == 7) {
//         setBox7(imageUrls[randomIndex]);
//       } else if (i == 8) {
//         setBox8(imageUrls[randomIndex]);
//       } else if (i == 9) {
//         setBox9(imageUrls[randomIndex]);
//       } else {
//         break;
//       }
//     }
//   };

//   useEffect(() => {
//     const randomIndex = randomCategoryGenerator();
//     console.log(randomIndex);
//     console.log(category[randomIndex]);
//     setSelectedCategory(category[randomIndex]);
//   }, []);

//   const handleBox1Click = () => {
//     if (box1.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox1(imageUrls[randomIndex]);
//   };
//   const handleBox2Click = () => {
//     if (box2.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox2(imageUrls[randomIndex]);
//   };
//   const handleBox3Click = () => {
//     if (box3.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox3(imageUrls[randomIndex]);
//   };
//   const handleBox4Click = () => {
//     if (box4.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox4(imageUrls[randomIndex]);
//   };
//   const handleBox5Click = () => {
//     if (box5.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox5(imageUrls[randomIndex]);
//   };
//   const handleBox6Click = () => {
//     if (box6.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox6(imageUrls[randomIndex]);
//   };
//   const handleBox7Click = () => {
//     if (box7.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox7(imageUrls[randomIndex]);
//   };
//   const handleBox8Click = () => {
//     if (box8.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox8(imageUrls[randomIndex]);
//   };
//   const handleBox9Click = () => {
//     if (box9.category == selectedCategory) {
//       // console.log('matched');
//       setScore(score + 1);
//     }
//     // console.log(box1.category);
//     // console.log(selectedCategory);
//     const randomIndex = randomValueGenerator();
//     setBox9(imageUrls[randomIndex]);
//   };

//   return (
//     <div className="w-full flex flex-col items-center  ">
//       <div className="flex relative my-10 w-[80%] justify-center ">
//         <h1 className="text-4xl ">SD Identification Game</h1>
//         <div className="absolute top-0 right-0 flex gap-4 ">
//           <span className="text-xl cursor-pointer " onClick={BoxState}>
//             Didn't find any?
//           </span>
//           <button className="text-xl  ">Score: {score}</button>
//         </div>
//       </div>
//       <div>Identify {selectedCategory} pictures </div>
//       <div className="w-[60%] flex flex-col ">
//         <div className="flex w-full justify-between">
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box1?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox1Click}
//             />
//           </div>
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box2?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox2Click}
//             />
//           </div>
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box3?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox3Click}
//             />
//           </div>
//         </div>
//         <div className="flex w-full justify-between">
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box4?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox4Click}
//             />
//           </div>
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box5?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox5Click}
//             />
//           </div>
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box6?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox6Click}
//             />
//           </div>
//         </div>
//         <div className="flex w-full justify-between">
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box7?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox7Click}
//             />
//           </div>
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box8?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox8Click}
//             />
//           </div>
//           <div>
//             <Image
//               alt="sustainable"
//               className="w-[18rem] h-[18rem] object-contain "
//               src={box9?.image}
//               width={10}
//               height={10}
//               unoptimized
//               onClick={handleBox9Click}
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SDIdentify;

'use client';

import Image from 'next/image';
import React, { useState, useEffect } from 'react';

const SDIdentify = () => {
  const categories = ['renewable', 'non-renewable', 'organic'];
  const allImages = [
    // Define your images with respective categories
    { id: 1, image: '/assets/identifySD/1.png', category: 'renewable' },
    { id: 2, image: '/assets/identifySD/2.png', category: 'renewable' },
    { id: 3, image: '/assets/identifySD/3.png', category: 'renewable' },
    { id: 4, image: '/assets/identifySD/4.jpeg', category: 'non-renewable' },
    { id: 5, image: '/assets/identifySD/5.jpeg', category: 'non-renewable' },
    { id: 6, image: '/assets/identifySD/6.jpeg', category: 'non-renewable' },
    { id: 7, image: '/assets/identifySD/7.jpeg', category: 'non-renewable' },
    { id: 8, image: '/assets/identifySD/8.jpeg', category: 'non-renewable' },
    { id: 9, image: '/assets/identifySD/9.jpeg', category: 'non-renewable' },
    { id: 10, image: '/assets/identifySD/10.jpg', category: 'organic' },
    { id: 11, image: '/assets/identifySD/11.jpg', category: 'organic' },
    { id: 12, image: '/assets/identifySD/12.jpg', category: 'organic' },
    { id: 13, image: '/assets/identifySD/13.jpg', category: 'organic' },
    { id: 14, image: '/assets/identifySD/14.jpg', category: 'organic' },
    { id: 15, image: '/assets/identifySD/15.jpg', category: 'organic' },
    { id: 16, image: '/assets/identifySD/16.jpeg', category: 'inorganic' },
    { id: 17, image: '/assets/identifySD/17.jpeg', category: 'inorganic' },
    { id: 18, image: '/assets/identifySD/18.jpeg', category: 'inorganic' },
    { id: 19, image: '/assets/identifySD/19.jpeg', category: 'inorganic' },
    { id: 20, image: '/assets/identifySD/20.jpeg', category: 'inorganic' },
  ];

  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedImages, setSelectedImages] = useState([]);
  const [userSelection, setUserSelection] = useState(Array(8).fill(false));

  useEffect(() => {
    // Randomly select a category
    const shuffledCategories = categories.sort(() => Math.random() - 0.5);
    const randomCategory = shuffledCategories[0];
    setSelectedCategory(randomCategory);
    let filteredImages;
    if (randomCategory == 'organic' || randomCategory == 'inorganic') {
      filteredImages = allImages.filter(
        (image) => image.category === 'organic' || image.category == 'inorganic'
      );
    }
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
      alert('Congratulations! You identified the correct images.');
      // Add logic for proceeding to the next level or displaying a success message
    } else {
      alert('Incorrect! Try again.');
      // Add logic for handling incorrect selections
    }

    // Reset the game for the next round
    setSelectedCategory('');
    setSelectedImages([]);
    setUserSelection(Array(8).fill(false));
  };

  return (
    <div className="w-full h-[calc(100vh-4rem)] flex flex-col items-center bg-main-bg bg-no-repeat bg-cover gap-4 relative ">
      
      <h1 className="text-2xl mt-5 font-semibold  ">SD Identify</h1>
      <p className="text-4xl bg-yellow-600 text-white font-bold p-4 rounded-xl">
        Selected Category:{' '}
        <span className="font-bold ">
          {selectedCategory == 'renewable'
            ? 'Renewable Source of Energy'
            : 'Organic Farming'}
        </span>
      </p>
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
      <button
        className="text-xl bg-yellow-600 text-white p-4 rounded-xl "
        onClick={handleSubmit}
      >
        Submit Selection
      </button>
    </div>
  );
};

export default SDIdentify;
