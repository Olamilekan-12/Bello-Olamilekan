import React from "react";
import { footerList } from "./footerList";
import { iconsList } from "../../utils/iconsList";

const Footer = () => {
  const lists = footerList.map((list, index) => (
    <li key={index}>
      <a href={list.link}>{list.name}</a>
    </li>
  ));
  const icon = iconsList.map((icon, index) => (
    <li key={index}>
      <a href={icon.link} className="text-2xl">
        {icon.icon}
      </a>
    </li>
  ));
  return (
    <footer className="w-full min-h-[300px] h-auto bg-blue-500 px-5 md:px-36 py-5 md:py-9 flex gap-8 md:gap-28 flex-col md:flex-row md:items-center">
      <div className="flex flex-col gap-4">
        <h2 className="font-bold text-3xl md:text-5xl text-white">
          Olamilekan
        </h2>
        <p className="font-semibold text-sm md:text-md text-white">
          FullStack Developer (MERN)
        </p>
      </div>
      <div className="flex flex-col justify-between gap-10">
        <div className="flex flex-col md:flex-row gap-6 justify-between">
          <ul className="flex flex-col md:flex-row gap-5 text-white font-semibold">
            {lists}
          </ul>
          <ul className="flex flex-col md:flex-row gap-5 text-white font-semibold">
            {icon}
          </ul>
        </div>
        <p className="text-sm text-gray-300">
          &copy; Bello Olamilekan. All right reserved 2023
        </p>
      </div>
    </footer>
  );
};

export default Footer;
