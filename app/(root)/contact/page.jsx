import { SocialData } from "@/lib/data";
import React from "react";
import { SocialIcon } from "react-social-icons";

function page() {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="font-extrabold text-5xl md:text-6xl text-center py-8">Contact</h1>
      <p className="text-center text-lg">
        Feel free to reach out to me on any of the following platforms:
      </p>
      <div className="flex items-center justify-center w-full py-4">
        <div className="grid grid-cols-2 gap-4">
        {SocialData.map((social, index) => (
          <div key={index} className="flex gap-2 items-center border py-2 px-4 rounded-full hover:border hover:shadow-md hover:shadow-purple-500 hover:border-purple-400 duration-300 transition-all cursor-pointer">
            <SocialIcon url={social.link} target="_blank" />
            {social.platform}
          </div>
        ))}
        </div>
      </div>
    </div>
  );
}

export default page;
