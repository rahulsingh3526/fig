import React from "react";

const Upload = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-[#B4D4FF]">
        <div className="flex flex-col fixed top-40 space-y-4 p-4 h-screen">
          <div className="text-sm">browse collection</div>
          <div className="text-sm">favourite collection</div>
        </div>
      </div>
      <div className="w-3/4 p-4">
        <div className="bg-[#B4D4FF] flex flex-col items-center p-12">
          <div className="">
            <p>icon</p>
            <p> upload course material</p>
          </div>
          <div className="flex justify-between  w-3/4">
            <p>invite students</p> <p>icon</p>
          </div>
          <div className=" w-3/4 space-y-2">
            {" "}
            <div className=" bg-white  h-10 pl-4 flex items-center gap-4 rounded-3xl">
              {" "}
              <p className="bg-black text-white rounded-full flex justify-center items-center w-6 ">
                A
              </p>
              <p>student a</p>
            </div>
            <div className=" bg-white  h-10 pl-4 flex items-center gap-4 rounded-3xl">
              {" "}
              <p className="bg-black text-white rounded-full flex justify-center items-center w-6 ">
                A
              </p>
              <p>student a</p>
            </div>
            <div className=" bg-white  h-10 pl-4 flex items-center gap-4 rounded-3xl">
              {" "}
              <p className="bg-black text-white rounded-full flex justify-center items-center w-6 ">
                A
              </p>
              <p>student a</p>
            </div>
            <div className=" bg-white  h-10 pl-4 flex items-center gap-4 rounded-3xl">
              {" "}
              <p className="bg-black text-white rounded-full flex justify-center items-center w-6 ">
                A
              </p>
              <p>student a</p>
            </div>
            <button className="bg-black text-white"></button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upload;
