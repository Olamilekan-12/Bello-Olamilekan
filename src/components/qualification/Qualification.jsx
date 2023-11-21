import React from "react";
import { qualificationList } from "./qualificationList";

const Qualification = () => {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] py-5 md:py-14 mb-[150px]"
      id="qualification"
    >
      <h2 className="text-center mb-3 text-gray-800 text-3xl font-bold">
        Qualification
      </h2>
      <h2 className="text-center mb-10 text-gray-600 text-2xl font-bold">
        Education
      </h2>
      <div className="flex flex-col gap-5">
        {qualificationList.map((qualification, index) => (
          <div
            className="flex flex-col gap-3 shadow-lg p-3 max-w-lg"
            key={index}
          >
            <p className="font-bold text-gray-700">{qualification.name}</p>
            <p className="font-semibold text-gray-600">
              {qualification.school}
            </p>
            <p className="flex gap-3 items-center text-sm text-gray-500">
              <span>{qualification.icon}</span>
              <span>{qualification.date}</span>
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Qualification;
