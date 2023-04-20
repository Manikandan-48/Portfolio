import React from "react";
import hero from "../assets/images/workman.webp";

const Hero = () => {

  return (

    <section
      id="home"
      className="min-h-screen flex py-32 md:flex-row flex-col items-center"
    >
      <div className="flex-1 flex items-center justify-center h-full">

        <img src={hero} alt="" className="md:w-10/12 h-full object-cover" />
      </div>

      <div className="flex-1">
        <div className="md:text-left text-center">

          <h1 className="md:text-5xl text-2xl md:leading-normal leading-10 text-white font-bold">

            <span className="text-cyan-600 lg:text-6xl text-5xl">
              Hi❗
              <br />
            </span>

            I am <span>MANIKANDAN</span>
          </h1>

          <h4 className=" md:text-4xl text-lg md:leading-normal text-sky-500 leading-5 mt-4 font-bold ">
          Full Stack Developer(MERN)🧑‍💻
          </h4>

        </div>
      </div>

    </section>
  );
};

export default Hero;