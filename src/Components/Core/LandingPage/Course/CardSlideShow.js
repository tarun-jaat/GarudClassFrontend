
import React, { useState, useEffect } from 'react';
import Card from './Card'
import Slider from "react-slick";



// function CenterMode() {
//   const settings = {
//     className: "center",
//     centerMode: true,
//     infinite: true,
//     centerPadding: "60px",
//     slidesToShow: 3,
//     speed: 500
//   };

const CardSlider = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [cards]);

  return (
    <div className='flex gap-24 w-4/5 mt-10 mb-7'>
      {cards.map((card, index) => (
        <div
          key={index}
          style={{
            width: '100px',
            height: '150px',
            margin: '0 20px',
            transform: `translateX(${(index - currentIndex) * 250}px) `,
            transition: 'transform 0.5s ease',
          }}
        >
          {card}
        </div>
      ))}
    </div>
  );
};

export default function CardSlideShow() {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "60px",
    slidesToShow: 3,
    speed: 500
  };
  const cards = [<Card />, <Card />, <Card />, <Card />,<Card />, <Card />, <Card />, <Card />];
  return (
    <div className='mt-10'>
      <CardSlider cards={cards} />
    </div>
  )
}