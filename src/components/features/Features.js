import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="bg-green-500">
      <Title title="Features" des="What I Do" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Front-end developing"
          des="I specialize in creating interactive websites for individuals and small businesses."
         
        />
        <Card
          title="App Development"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<AiFillAppstore />}
        />
        <Card
          title="back-end developing"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<SiProgress />}
        />
        <Card
          title="Mobile Development"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<FaMobile />}
        />
        <Card
          title="UX / UI Design"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<FaGlobe />}
        />

       <Card
          title="API configration"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<FaGlobe />}
        />

      <Card
          title="Enhancing existing websites"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<FaGlobe />}
        />

      <Card
          title="Enhancing existing Applications"
          des="I specialize in creating interactive websites for individuals and small businesses."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features