import React from "react";
import html from "../assets/images/html.png";

import css from "../assets/images/css.png";
import javascript from "../assets/images/javascript.png";

import reactImage from "../assets/images/react.png";
import node from "../assets/images/node.png";

import expressjs from "../assets/images/expressjs.png";
import mongodb from "../assets/images/mongodb.png";

import msql from "../assets/images/msql.png";
import bootstrap from "../assets/images/bootstrap.png";

import github from "../assets/images/github.png";
import mui from "../assets/images/mui.png";

import postman from "../assets/images/postman.png";


const Skills = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },

    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },

    {
      id: 3,
      src:javascript,
      title: "javascript",
      style: "shadow-yellow-500",
    },

    {
      id: 4,
      src: bootstrap,
      title: "bootstrap",
      style: "shadow-violet-500",
    },

    {
      id: 5,
      src: mui,
      title: "Material UI",
      style: "shadow-blue-500",
    },
    {
      id: 6,
      src: reactImage,
      title: "React.js",
      style: "shadow-sky-500",
    },

    {
      id: 7,
      src:node,
      title: "Node.js",
      style: "shadow-green-500",
    },

    {
      id: 8,
      src:expressjs,
      title: "Express.js",
      style: "shadow-white",
    },

    {
      id: 9,
      src:mongodb,
      title: "MongoDB",
      style: "shadow-green-500",
    },

    {
      id: 10,
      src:msql,
      title: "MySQL",
      style: "shadow-blue-500",
    },

    {
      id: 11,
      src:github,
      title: "Github",
      style: "shadow-gray-500",
    },

    {
      id: 12,
      src: postman,
      title: "Postman",
      style: "shadow-red-400",
    }
  
  
  ];

  return (

    <div
      id="skills"
      className=" h-screen mt-96 py-96" 
    >

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">

        <div className="text-center"style={{marginTop:"130px"}}>
        <h3 className="text-4xl font-semibold">

           <span className="text-white-600">SKILLS🧠</span>
        </h3>

        <p className="text-cyan-400 mt-3 text-lg">Known Tools🔧</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">

          {techs.map(({ id, src, title, style }) => (

            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >

              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>

            </div>
          ))

          }

        </div>
        
      </div>

    </div>
  );
};

export default  Skills;