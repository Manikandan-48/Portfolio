import React from "react";

const Contact = () => {
  
  return (
    <section id="contact" className="py-32 px-3 text-white">

      <div className="text-center mt-8" style={{marginTop:"-50px"}}>
        <h3 className="text-4xl font-semibold">

           <span className="text-white-600">CONTACT🎯</span>
        </h3><br/>

        

         <div>📧 E-Mail ID :<span className="text-cyan-600">manismr48@gmail.com</span></div> 

        <p className="text-gray-400 mt-3 text-lg">Kindly Fill in the below form to let me know</p>

        <div className=" flex justify-center items-center mt-3">
          
          <form
            action="https://getform.io/f/e1eeb64b-07e7-43db-b552-0929c1c09a4a"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name📛"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <input
              type="text"
              name="email"
              placeholder="E-mail ID📩"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />

            <textarea
              name="message"
              placeholder="Type your words...💬"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            >

            </textarea>

            <button className="btn-primary animate-bounce text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-7 mx-auto flex items-center rounded-md hover:scale-100 duration-300">
              SUBMIT 
              </button>
          </form>
        </div>
       
       
      </div>
    </section>
  );
};

export default Contact;