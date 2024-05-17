import Link from "next/link";
import React from "react";
import Image from "next/image";
import image from "../../public/imagi.png";

function Student() {
  return (
    <div className="flex min-h-screen space-x-10">
      <div className="w-1/4 bg-[#B4D4FF]">
        <div className="flex flex-col fixed top-40 space-y-4 p-4 h-screen">
          <div className="text-sm">browse collection</div>
          <div className="text-sm">favourite collection</div>
        </div>
      </div>
      <div className="w-1/4 px-2 bg-[#B4D4FF]">
        <div className="">
          <Image className="rounded-2xl" src={image} alt="image" />
        </div>
        <div className="flex justify-between px-2">
          <p className="text-sm">Lorem ipsum dolor sit </p>
          <p>Icon</p>
        </div>

        <p className="text-xs px-2">
          Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
          tortor eu dui Lorem ipsum dolor sit amet consectetur. Massa gravida
          viverra nulla tortor eu dui Lorem ipsum dolor sit amet consectetur.
          Massa gravida viverra nulla tortor eu dui Lorem ipsum dolor sit amet
          consectetur. Massa gravida viverra nulla tortor eu dui.
        </p>

        <p className="font-bold">Apply Now </p>

        <div className="space-y-3 p-2">
          {" "}
          <input className="rounded-full h-8 w-full" />
          <input className="rounded-full h-8 w-full" />
          <button className="bg-black h-8 text-sm text-white w-full rounded-full">
            Apply
          </button>
        </div>
      </div>

      <div className="w-1/3 space-y-4">
        <div className="bg-[#B4D4FF] rounded-3xl p-4">
          <p className="text-sm">1 Lorem ipsum dolor sit </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
        <div className="bg-[#B4D4FF] rounded-3xl p-4">
          <p className="text-sm">1 Lorem ipsum dolor sit </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
        <div className="bg-[#B4D4FF] rounded-3xl p-4">
          <p className="text-sm">1 Lorem ipsum dolor sit </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
        <div className="bg-[#B4D4FF] rounded-3xl p-4">
          <p className="text-sm">1 Lorem ipsum dolor sit </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
        <div className="bg-[#B4D4FF] rounded-3xl p-4">
          <p className="text-sm">1 Lorem ipsum dolor sit </p>
          <p className="text-xs">
            Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
            tortor eu dui....
          </p>
        </div>
      </div>
    </div>
  );
}

export default Student;
