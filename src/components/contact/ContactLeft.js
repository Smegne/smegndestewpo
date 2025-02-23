import React from 'react'
import {  FaInstagram , FaLinkedinIn ,FaTelegramPlane} from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="contactImg"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Smegn Destew</h3>
        <p className="text-lg font-normal text-gray-400">
          MERN Stack Developer
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        I'm a full-stack developer dedicated to delivering high-quality solutions on time. If you're looking to develop a company website, web application, or Android app, you've come to the right place. Feel free to reach out to me directly via phone, Telegram, or email—contact details below 👇👇. Let’s bring your ideas to life!


        </p>
        
        <div className="w-full">
                <button
                  // onClick={handleSend}
                  className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wider uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                >
                 <strong><i> Hire Me</i></strong>
                </button>
              </div>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+251962935163</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">smegndestew53@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className=" uppercase font-titleFont mb-4 tex-red-500 bg-green-500">Find me in</h2>
        <div className="flex gap-4">
          <span className="bannerIcon bg-white text-red-500">
            <FaTelegramPlane />
          </span>
          <span className="bannerIcon bg-white text-red-500">
            <FaInstagram  />
          </span>
          <span className="bannerIcon bg-white text-red-500">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft