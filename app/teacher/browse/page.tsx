import React from "react";
import Card from "../../../component/card";
import Sidebar from "@/component/sidebar";
import Image from "next/image";
import image from "../../../public/imagi.png";

const Browse = () => {
  return (
    <div className="flex  min-h-screen">
      <div className="w-1/4 bg-[#B4D4FF]">
        <div className="flex flex-col fixed top-40 space-y-4 p-4 h-screen">
          <div className="text-sm">browse collection</div>
          <div className="text-sm">favourite collection</div>
        </div>
      </div>
      <div className="w-3/4 py-20">
        <p>Popular Courses</p>
        <div className=" flex gap-4 p-2 w-full ">
          <div className="bg-[#B4D4FF] w-1/3 rounded-2xl h-[333px] space-y-1">
            <div className="">
              <Image className="rounded-2xl" src={image} alt="image" />
            </div>
            <div className="flex justify-between px-2">
              <p className="text-sm">Lorem ipsum dolor sit </p>
              <p>Icon</p>
            </div>
            <p className="text-xs px-2">
              Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
              nulla tortor eu dui....
            </p>
            <div className=" flex justify-end px-2">
              <button className=" bg-black rounded-full text-white text-sm px-3  py-1">
                view
              </button>
            </div>
          </div>
          <div className="bg-[#B4D4FF] w-1/3 rounded-2xl h-[333px] space-y-1">
            <div className="">
              <Image className="rounded-2xl" src={image} alt="image" />
            </div>
            <div className="flex justify-between px-2">
              <p className="text-sm">Lorem ipsum dolor sit </p>
              <p>Icon</p>
            </div>
            <p className="text-xs px-2">
              Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
              nulla tortor eu dui....
            </p>
            <div className=" flex justify-end px-2">
              <button className=" bg-black rounded-full text-white text-sm px-3  py-1">
                view
              </button>
            </div>
          </div>
          <div className="bg-[#B4D4FF] w-1/3 rounded-2xl h-[333px] space-y-1">
            <div className="">
              <Image className="rounded-2xl" src={image} alt="image" />
            </div>
            <div className="flex justify-between px-2">
              <p className="text-sm">Lorem ipsum dolor sit </p>
              <p>Icon</p>
            </div>
            <p className="text-xs px-2">
              Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
              nulla tortor eu dui....
            </p>
            <div className=" flex justify-end px-2">
              <button className=" bg-black rounded-full text-white text-sm px-3  py-1">
                view
              </button>
            </div>
          </div>
        </div>
        <p>More Courses</p>
        <div className=" flex gap-4 p-2 ">
          <div className="bg-[#B4D4FF] w-1/3 rounded-2xl h-[333px] space-y-1">
            <div className="">
              <Image className="rounded-2xl" src={image} alt="image" />
            </div>
            <div className="flex justify-between px-2">
              <p className="text-sm">Lorem ipsum dolor sit </p>
              <p>Icon</p>
            </div>
            <p className="text-xs px-2">
              Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
              nulla tortor eu dui....
            </p>
            <div className=" flex justify-end px-2">
              <button className=" bg-black rounded-full text-white text-sm px-3  py-1">
                view
              </button>
            </div>
          </div>
          <div className="bg-[#B4D4FF] w-1/3 rounded-2xl h-[333px] space-y-1">
            <div className="">
              <Image className="rounded-2xl" src={image} alt="image" />
            </div>
            <div className="flex justify-between px-2">
              <p className="text-sm">Lorem ipsum dolor sit </p>
              <p>Icon</p>
            </div>
            <p className="text-xs px-2">
              Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
              nulla tortor eu dui....
            </p>
            <div className=" flex justify-end px-2">
              <button className=" bg-black rounded-full text-white text-sm px-3  py-1">
                view
              </button>
            </div>
          </div>
          <div className="bg-[#B4D4FF] w-1/3 rounded-2xl h-[333px] space-y-1">
            <div className="">
              <Image className="rounded-2xl" src={image} alt="image" />
            </div>
            <div className="flex justify-between px-2">
              <p className="text-sm">Lorem ipsum dolor sit </p>
              <p>Icon</p>
            </div>
            <p className="text-xs px-2">
              Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
              nulla tortor eu dui....
            </p>
            <div className=" flex justify-end px-2">
              <button className=" bg-black rounded-full text-white text-sm px-3  py-1">
                view
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
