import React, { useState } from "react";
import Title from "../layouts/Title";
import Education from "./Education";
import Skills from "./Skills";
import Achievement from "./Achievement";
import Experience from "./Experience";

const Resume = () => {
  const [activeTab, setActiveTab] = useState("skills"); // Default to 'skills' first

  return (
    <section id="resume" className="w-full py-20 border-b-[1px] border-b-black">
      <div className="flex justify-center items-center text-center bg-green-500 text-white p-4">
        <Title title="" des="My Resume" />
      </div>

      <div>
        <ul className="w-full grid grid-cols-1 bg-green-600 md:grid-cols-2 xl:grid-cols-4">
          <li
            onClick={() => setActiveTab("skills")}
            className={`resumeLi p-2 cursor-pointer ${
              activeTab === "skills" ? "border-designColor rounded-lg" : "border-transparent"
            }`}
          >
            Professional Skills
          </li>
          <li
            onClick={() => setActiveTab("education")}
            className={`resumeLi p-2 cursor-pointer ${
              activeTab === "education" ? "border-designColor rounded-lg" : "border-transparent"
            }`}
          >
            Education
          </li>
          <li
            onClick={() => setActiveTab("experience")}
            className={`resumeLi p-2 cursor-pointer ${
              activeTab === "experience" ? "border-designColor rounded-lg" : "border-transparent"
            }`}
          >
            Experience
          </li>
          <li
            onClick={() => setActiveTab("achievements")}
            className={`resumeLi p-2 cursor-pointer ${
              activeTab === "achievements" ? "border-designColor rounded-lg" : "border-transparent"
            }`}
          >
            Achievements
          </li>
        </ul>
      </div>

      {/* Conditional rendering based on the active tab */}
      {activeTab === "skills" && <Skills />}
      {activeTab === "education" && <Education />}
      {activeTab === "experience" && <Experience />}
      {activeTab === "achievements" && <Achievement />}
    </section>
  );
};

export default Resume;
