"use client";


import Image from "next/image";
import CustomButton from "./CustomButton";

const Intro = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    
    <div className="intro">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="title">
          Terapia Alternativa
        </h1>

        <p className="subtitle text-justify	green">
        Son técnicas basadas en la aplicación de la energía con el objetivo de restaurar el equilibrio y la armonía física, mental, 
        emocional y espiritual de la persona.
        </p>
        <br />
        <br />          
        <CustomButton
          title="Explorar terapias"
          containerStyles="text-white rounded-full bg-pink-400 font-medium textButton"
          handleClick={handleScroll}
        />
      </div>
      <div className="image-container">
        <div className="image">
          <Image src="/hero.gif" alt="hero" fill className="object-contain" />
        </div>

        <div className="image-overlay" />
      </div>
    </div>
  );
};

export default Intro;
