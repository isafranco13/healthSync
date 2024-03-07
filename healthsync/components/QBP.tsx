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
    <div className="hero">
      <div className="flex-1 padding-x">
        <h1 className="text-4xl font-extrabold">
          ¿Quién soy?
        </h1>

        <p className="hero__subtitle text-justify	">

        ¡Hola! Mi nombre es María Cristina Franco Terrazas, soy Q.B.P y practicante de terapias alternativas. 
        
        <br/><br/>Mi enfoque se centra en terapias energéticas diseñadas para estabilizar el cuerpo, la mente y el espíritu. 
        A través de estas prácticas, trabajamos juntos para despegar y eliminar toxinas del cuerpo, abordando síntomas y 
        emociones que pueden estar relacionados con diversas patologías.

        <br/><br/>Mi objetivo es proporcionar apoyo integral, especialmente en áreas como ansiedad, depresión, traumas, diabetes, 
        problemas gástricos y más. Cada sesión se adapta a las necesidades individuales, brindando un enfoque holístico 
        que promueve el bienestar en todos los aspectos de la vida.
        </p>
      </div>

      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/therapist.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Intro;
