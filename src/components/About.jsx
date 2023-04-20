import React from "react";
import aboutImg from "../assets/images/Profile Pic.jpg";

const About = () => {

  const info = [
    { text: "Years experience", count: "03" },
    { text: "Completed Projects", count: "04" },
    { text: "Companies Work", count: "03" },
  ];

  return (
    <section id="about" className="py-10 text-white">
      
      <div className="text-center mt-8" style={{marginTop:"30px"}}>
        <h3 className="text-4xl font-semibold">

          ABOUT <span className="text-cyan-600">📜</span>
        </h3>

        <p className="text-cyan-400 my-3 text-lg">Profile Summary🗞️</p>

        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="p-2">
            <div className="text-gray-300 my-3">

              <p className="text-justify leading-7 w-11/12 mx-auto">
              A Passionate Full Stack Developer who is interested in creating responsive and user-friendly web applications
I have completed a certified course in Full stack development from GUVI Geeks private limited for a period of 8 months. This program covered (React.js, Node.js, Express.js, MongoDB) and provided me with hands-on practice.
I have gained deeper knowledge and practical experience in web development. i am excited to apply what i have learned in this course to build innovative web applications.

              </p>
              <br />
              <br />
              <a href="https://drive.google.com/file/d/1sGUzC45EHBuU-JJjwD4n9X5JK_t-6YiI/view" target="_blank">

                <button className="btn-primary animate-bounce" >Click to View Resume</button>
              </a>
            </div>
          </div>

          <div className="flex-1 md:mt-0 mt-6 flex justify-center items-center">
            <div className="lg:w-96 h-full relative sm:w-10/12 w-11/12 max-w-sm aboutImg ">

              <img
                src={aboutImg}
                alt=""
                className="w-full object-cover bg-cyan-600 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
