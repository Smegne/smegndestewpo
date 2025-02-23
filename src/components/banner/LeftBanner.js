import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaGithub,
  FaTelegramPlane,
  FaInstagram,
  FaEnvelope,
  FaPhone
} from "react-icons/fa";
import { FaHtml5, FaCss3Alt, FaJs, FaNodeJs } from "react-icons/fa";
import { SiFirebase, SiFlutter, SiMongodb, SiMysql, SiReact } from "react-icons/si";

const LeftBanner = () => {
  const [text] = useTypewriter({
    words: ["Professional Coder.", "Full Stack Developer.", "Database Management.", "UI/UX Designer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-lg font-bold">WELCOME TO MY WORLD</h4>
        
        {/* Name Section */}
        <h1 className="text-6xl font-bold  text-blue p-6 rounded-full text-center">
          <strong>Hi, I'm </strong> <br/>
          <span className=" text-blue-500 px-4 py-2 rounded-full">Smegn Destew</span>
        </h1>

        {/* Typewriter Text */}
        <h2 className="text-5xl font-bold text-red-500 text-center">
          a <span>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="#ff014f" />
        </h2>

        {/* Bio Section */}
        <div className="text-black text-lg bg-gray-200 p-6 rounded-lg">
          <h1 className="text-2xl font-bold text-center">Professional Bio</h1>
          <br />
          <h2 className="text-xl font-semibold text-center">
            Passionate Full-Stack Developer | Creative Thinker | Fast Learner
          </h2>
          <br />
          <p>
            I am a highly motivated Full-Stack Developer with a passion for building innovative and scalable web applications. 
            With expertise in HTML, CSS, JavaScript, React, Node.js, Firebase, SQL, and MongoDB, I create dynamic and responsive digital experiences.
          </p>
          <br />
          <p>
            I thrive in solving complex problems and constantly seek to improve my skills. My creativity and adaptability help me 
            stay ahead in the ever-evolving tech landscape. I love learning new technologies and turning ideas into reality.
          </p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between flex-wrap ">
        <div>
          <h2 className="text-base uppercase bg-green-500 text-center font-titleFont mb-4 font-bold">Find me in</h2>
          <div className="flex  flex-wrap gap-4">
            <a href="https://github.com/Smegne/" target="_blank"><span className="bannerIcon bg-black text-red-500"><FaGithub /></span></a>
            <a href="#" target="_blank"><span className="bannerIcon bg-black text-red-500"><FaFacebookF /></span></a>
            <a href="#" target="_blank"><span className="bannerIcon bg-black text-red-500"><FaTwitter /></span></a>
            <a href="https://www.linkedin.com/in/smegndestew/" target="_blank">
              <span className="bannerIcon bg-black text-red-500"><FaLinkedinIn /></span></a>
            <a href="https://t.me/smegnewdestew" target="_blank"><span className="bannerIcon bg-black text-red-500"><FaTelegramPlane /></span></a>
            <a href="mailto:smegndestew53@gmail.com"><span className="bannerIcon bg-black text-red-500"><FaEnvelope /></span></a>
            <a href="https://www.instagram.com/smu_des/" >
              <span className="bannerIcon bg-black text-red-500"><FaInstagram /></span></a>
            
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div>
        <h2 className="text-base bg-green-500 text-center uppercase font-titleFont mb-4 font-bold">Best Skills</h2>
        <div className="flex gap-4 flex-wrap text-center">
          <div>HTML <br /><span className="bannerIcon bg-black text-red-500"><FaHtml5 className="text-orange-500" /></span></div>
          <div>CSS <br /><span className="bannerIcon bg-black text-red-500"><FaCss3Alt className="text-blue-500" /></span></div>
          <div>JavaScript <br /><span className="bannerIcon bg-black text-red-500"><FaJs className="text-yellow-500" /></span></div>
          <div>Node.js <br /><span className="bannerIcon bg-black text-red-500"><FaNodeJs className="text-green-500" /></span></div>
          <div>React <br /><span className="bannerIcon bg-black text-red-500"><FaReact className="text-blue-400" /></span></div>
          <div>Firebase <br /><span className="bannerIcon bg-black text-red-500"><SiFirebase className="text-yellow-400" /></span></div>
          <div>Flutter <br /><span className="bannerIcon bg-black text-red-500"><SiFlutter className="text-blue-400" /></span></div>
          <div>SQL & MySQL <br /><span className="bannerIcon bg-black text-red-500"><SiMysql className="text-blue-700" /></span></div>
          <div>MongoDB <br /><span className="bannerIcon bg-black text-red-500"><SiMongodb className="text-green-600" /></span></div>
          <div>React Native <br /><span className="bannerIcon bg-black text-red-500"><SiReact className="text-blue-400" /></span></div>
        </div>
      </div>
    </div>
  );
};

export default LeftBanner;
