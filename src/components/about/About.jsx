import React from "react";
import AboutImage from "../../assets/aboutImage.jpg";
import { LuDownload } from "react-icons/lu";
import resume from "../../assets/resume/belloolamilekan.pdf";
const About = () => {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] py-5 md:py-14 mb-[150px]"
      id="about"
    >
      <h2 className="text-center mb-10 text-gray-800 text-3xl font-bold">
        About Me
      </h2>
      <div className="flex flex-col-reverse md:flex-row-reverse  justify-between items-start gap-5">
        <div className="w-full h-[300px] md:w-[40%]  md:h-[350px] shadow-lg overflow-hidden ">
          <img
            src={AboutImage}
            alt="about image"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col gap-6 w-full md:w-[40%]">
          <p className="font-semibold text-lg text-gray-500">
            Hello there! 👋 I'm Olamilekan, a passionate MERN Stack Developer
            with a knack for crafting efficient and scalable web applications.
            With a blend of creativity and technical expertise, I thrive on
            turning ideas into practical solutions. My Journey My journey into
            the world of programming began with a fascination for creating
            interactive and dynamic digital experiences. I embarked on this path
            with a strong foundation in JavaScript and soon found myself
            immersed in the MERN (MongoDB, Express.js, React.js, Node.js) stack.
          </p>
          <div className="flex items-center justify-between">
            <p className="flex flex-col gap-2 items-center">
              <span className="font-bold text-2xl text-gray-800">03+</span>
              <span className="text-center text-sm text-gray-500">
                Years of <br /> experience
              </span>
            </p>
            <p className="flex flex-col gap-2 items-center">
              <span className="font-bold text-2xl text-gray-800">50+</span>
              <span className="text-center text-sm text-gray-500">
                Completed <br /> projects
              </span>
            </p>
          </div>
          <a
            className="flex items-center p-4 bg-blue-600 hover:bg-blue-500 transition-all rounded-lg text-white font-semibold gap-2 w-40"
            href={resume}
            download
          >
            Download CV
            <span>
              <LuDownload />
            </span>{" "}
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
