import React from "react";
import { iconsList } from "../../utils/iconsList";
import { LuSendHorizonal } from "react-icons/lu";
import ProfileImage from "../../assets/user.png";

const Intro = () => {
  const icons = iconsList.map((icon, index) => (
    <a
      key={index}
      href={icon.link}
      className="text-3xl text-blue-600"
      target="_blank"
    >
      {icon.icon}
    </a>
  ));
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] py-5 md:py-14 flex flex-col-reverse md:flex-row-reverse md:items-center justify-between items-start gap-5 mt-[80px] mb-[150px]"
      id="home"
    >
      <div className="flex flex-row gap-6 md:flex-col">{icons}</div>
      <div className="flex flex-col gap-4">
        <h2 className="text-gray-800 text-3xl md:text-5xl font-bold">
          Hi, I am Bello
        </h2>
        <h2 className="text-gray-800 text-3xl md:text-5xl font-bold">
          Olamilekan
        </h2>
        <p className="font-semibold text-xl text-gray-600">
          FullStack Developer (MERN)
        </p>
        <p className="font-semibold text-lg text-gray-500">
          High level of experience in web design and <br /> development
          knowledge, producing <br /> quality work.
        </p>
        <a
          className="flex items-center p-4 bg-blue-600 hover:bg-blue-500 transition-all rounded-lg text-white font-semibold gap-2 w-36"
          href="mailto:belloolamilekan661@gmail.com"
        >
          Contact Me
          <span>
            <LuSendHorizonal />
          </span>{" "}
        </a>
      </div>
      <div className="w-[250px] h-[250px] md:w-[350px] md:h-[350px] overflow-hidden rounded-full  shadow-lg">
        <img
          src={ProfileImage}
          alt=""
          className="w-full h-full object-cover bg-white p-1"
        />
      </div>
    </section>
  );
};

export default Intro;
