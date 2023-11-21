import React from "react";
import { contactList } from "./contactList";

const Contact = () => {
  return (
    <section
      className="w-full min-h-[calc(100vh-80px)] py-5 md:py-14 mb-[150px]"
      id="contact"
    >
      <h2 className="text-center mb-3 text-gray-800 text-3xl font-bold">
        Contact Me
      </h2>
      <h2 className="text-center mb-10 text-gray-600 text-2xl font-bold">
        Get in touch
      </h2>
      <div className="flex flex-col gap-5">
        {contactList.map((list, index) => (
          <div
            className="flex gap-3 shadow-lg p-3 max-w-lg items-center"
            key={index}
          >
            <div className="text-3xl text-blue-600">{list.icon}</div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl md:text-2xl text-gray-600">
                {list.method}
              </p>
              <p className="text-gray-500">{list.details}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
