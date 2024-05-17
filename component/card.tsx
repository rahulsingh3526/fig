import React from "react";
import image from "../public/imagi.png";
import Image from "next/image";

const Card = () => {
  return (
    <div className="flex flex-col m-3 bg-[#B4D4FF] rounded-lg w-40">
      <div>
        <Image className="rounded-lg" src={image} alt="image" />
      </div>
      <div>
        <div className="flex justify-between">
          <p className="text-sm">Lorem ipsum dolor sit </p>
          <div>Image</div>
        </div>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
          tortor eu dui....
        </p>
        <button className="flex justify-end bg-black rounded-lg">view</button>
      </div>
    </div>
  );
};

export default Card;
