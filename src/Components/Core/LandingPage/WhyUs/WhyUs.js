import React from "react";
import oneToOne from "../../../../Assests/images/1to1.jpg";
import StudyMaterial from "../../../../Assests/images/studymaterial.jpg";
import Test from "../../../../Assests/images/test.jpg";
import faculty from "../../../../Assests/images/faculty.jpg";
import Seprator from "../../../../Assests/images/img-seperator.svg";
const data = [
  {
    Img: oneToOne,
    title:"One to One Interraction",
    Description:
      "We offer one-on-one interaction during every class session. Our dedicated instructors take the time to understand each student's unique strengths, weaknesses, and learning styles, ensuring tailored support and guidance. ",
  },
  {
    Img: StudyMaterial,
    title:"Study Resourses",

    Description:
      "Our comprehensive resources cover every aspect of the curriculum, offering clarity, depth, and practical insights. From detailed notes to engaging practice exercises, our study materials are crafted to reinforce understanding and foster mastery of key concepts",
  },
  {
    Img: Test,
    title:"Continious Test With Learning ",

    Description:
      " Our exams are meticulously designed to assess your understanding of the curriculum and your readiness for academic challenges. We ensure transparency and integrity throughout the testing process, adhering to strict guidelines to maintain a level playing field for all students",
  },
  {
    Img: faculty,
    title:"Experienced Faculty",

    Description:
      " Our faculty's commitment to academic excellence and mentorship ensures that every student receives the support they need to thrive. Trust in Garud Classes' experienced faculty to inspire, motivate, and empower you on your educational journey.",
  },
];

export default function WhyUs() {
  return (
    <div className="w-4/5 flex flex-col items-center justify-center">
      {data.map((link, index) => (
        <>
          <div
            key={index}
            className={`flex items-center justify-between gap-16  mb-4 pb-4  ${
              index % 2 === 0
                ? "flex-row"
                : "flex-row-reverse md:flex-row-reverse"
            }`}
          >
            <img src={link.Img} height={250} width={250} alt="Why US" />
            <div className="text-start">
            <p className="text-2xl font-bold text-[#f9Aa00]">{link.title}</p>

            <p className="w-4/5">{link.Description}</p>


            </div>
          </div>
          {index < data.length - 1 && <img src={Seprator} alt="seprator" role="presentation" aria-hidden="true" />}
        </>
      ))}
    </div>
  );
}
