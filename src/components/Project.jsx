import React from "react";
import project1 from "../assets/images/PizzaApp.JPG";

import project2 from "../assets/images/Blog.JPG";
import project3 from "../assets/images/EmployeesCreatingApp.JPG";

import project4 from "../assets/images/TodolistApp.JPG";
import { FaGithub} from "react-icons/fa";

import {BiLinkExternal} from "react-icons/bi"

import "swiper/css";
import "swiper/css/pagination";


const Project = () => {

  const projects = [
    {
      img: project1,
      name: "Password-Reset-Flow",
      github_link: "https://github.com/Manikandan-48/Day-43-Frontend.git",
      live_link: "https://glittering-crepe-9317f2.netlify.app",
      skills: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"]
    },

    {
      img: project2,
      name: "G-mail Clone",
      github_link: "https://github.com/MANIKANDAN0408/Gmail-Clone-Electron-Frontend.git",
      live_link: "https://melodic-shortbread-af464c.netlify.app",
      skills: ["HTML", "CSS", "REACT.js", "Node.js", "MongoDB"]
    },

    {
      img: project3,
      name: "ToDo List App",
      github_link: "https://github.com/MANIKANDAN0408/DAY-42---Frontend.git",
      live_link: "https://quiet-valkyrie-a4e2a2.netlify.app",
      skills: ["HTML", "CSS", "React.js", "Node.js", "MongoDB", "Bootstrap"]
    },

    {
      img: project4,
      name: "Customer Relationship Management",
      github_link: "https://github.com/MANIKANDAN0408/WEBCODE-2-CRM--FrontEnd.git",
      live_link: "https://shiny-blancmange-59fe2f.netlify.app",
      skills: ["HTML", "CSS", "React.js", "Node.js", "MongoDB"]
    },

  ];

  return (

<div >
      <section  id='projects' className='text-white mt-96 pt-40' style={{margin:"100px"}}>

      <div className="text-center" style={{marginTop:"-80px"}} >
         <h3 className="text-4xl font-semibold">

          <span className="text-white-600">PROJECTS🧱</span>
        </h3>

       <p className="text-cyan-400 mt-3 text-lg">Works Done🏢</p>
      </div>

        <div className='my-7 space-y-24'>

          {projects.map((project, index) => (

            <article className='flex flex-wrap md:justify-between md:items-center' key={index}>
              <picture className={index % 2 === 0 ? 'w-full md:w-6/12 shadow-lg ' : 'w-full md:w-6/12 shadow-lg md:order-1'}>

                <source

                  srcSet={`${project.img} 1920w,
                        ${project.img} 768w,
                        ${project.img} 320w`}

                  sizes='(min-width: 768px) 50vw, 100vw'
                  type='image/webp'

                />
                <source srcSet={`${project.img}-768 768w,`} sizes='(min-width: 768px) 50vw, 100vw' type='image/jpg' />

                <img width='768px' height='575px' loading='lazy' alt={project.name} className='rounded-lg' />

              </picture>

             <div className='flex flex-col overflow-auto  space-y-3 my-3 mx-1 w-full md:w-5/12 '>
                <h3 className='uppercase font-bold text-lg' style={{color:"sandybrown"}}>{project.name}</h3>

                {/* <p>{project.description}</p> */}

                <div className='flex overflow-auto space-x-3 pb-2'>

                  {project.skills.map((disc, index) => (
                    <span className='border border-gray-500 px-2 py-1 rounded-lg text-sm' key={index}>
                      {disc}
                    </span>
                  ))

                  }

                </div>

                < div className='w-auto flex space-x-5 relative'>

                  <a href={project.github_link} target='_blank' rel='noreferrer'>
                    <FaGithub size={30} />
                  </a>

                  <a href={project.live_link} target='_blank' rel='noreferrer'>
                    <BiLinkExternal size={30}/>
                  </a>

                </div>
              </div>

              </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Project;