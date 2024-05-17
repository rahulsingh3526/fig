"use client";
import Image from "next/image";
import logo from "../public/Frame 3.png";
import semicircle from "../public/img.png";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleClick = () => {
    router.push("/student");
  };
  return (
    <div className="min-h-screen flex flex-col p-4 items-center">
      <div className="mb-12">
        <Image src={logo} alt="image" />
      </div>
      <div className="flex space-x-2">
        {" "}
        <p className="text-5xl font-semibold">Your path to </p>
        <p className="text-5xl font-semibold text-[#B4D4FF]"> success</p>
      </div>
      <p className="text-5xl font-semibold mb-6">starts here</p>
      <p className="text-sm w-1/3">
        Lorem ipsum dolor sit amet consectetur. Massa gravida viverra nulla
        tortor eu dui. Massa gravida viverra nulla tortor eu dui.
      </p>
      <button
        className="bg-black text-white px-4 py-2 rounded-3xl"
        onClick={handleClick}
      >
        {" "}
        Get Started
      </button>
      <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2">
        <Image className="" src={semicircle} alt="image" />
      </div>
    </div>
  );
}
