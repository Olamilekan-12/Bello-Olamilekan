import React from "react";
import { portfolioList } from "./portfolioList";
import { FiGithub } from "react-icons/fi";
import { FaRegEye } from "react-icons/fa";

const Portfolio = () => {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] py-5 md:py-14 mb-[150px]"
      id="portfolio"
    >
      <h2 className="text-center mb-3 text-gray-800 text-3xl font-bold">
        Portfolio
      </h2>
      <h2 className="text-center mb-10 text-gray-600 text-2xl font-bold">
        Most Recent Projects
      </h2>
      <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center gap-4">
        {portfolioList.map((list, index) => (
          <div
            className="w-full md:w-[32%] h-[300px] md:h-[350px] shadow-lg relative"
            key={index}
          >
            <div className="w-full h-full overflow-hidden">
              <img
                src={list.image}
                alt="project-image"
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-0 left-0 w-full h-[100px] bg-gray-900 flex flex-col justify-between p-3">
                <p className="text-white font-bold text-lg">{list.title}</p>
                <p className="flex items-center justify-between">
                  <a
                    href={list.githubLink}
                    className="p-3 bg-gray-800 text-white cursor-pointer w-24 flex items-center justify-center rounded-lg hover:bg-gray-600 transition-all"
                  >
                    <FiGithub />
                  </a>
                  <a
                    href={list.liveSiteLink}
                    className="p-3 bg-gray-800 text-white cursor-pointer w-24 flex items-center justify-center rounded-lg hover:bg-gray-600 transition-all"
                  >
                    <FaRegEye />
                  </a>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
