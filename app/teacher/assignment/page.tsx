import React from "react";

const Assignment = () => {
  return (
    <div className="flex">
      <div className="w-1/4 bg-[#B4D4FF]">
        <div className="flex flex-col fixed top-40 space-y-4 p-4 h-screen">
          <div className="text-sm">browse collection</div>
          <div className="text-sm">favourite collection</div>
        </div>
      </div>
      <div className="w-3/4 p-2 ">
        {" "}
        <div className="w-full bg-[#B4D4FF] rounded-2xl p-5 space-y-5 ">
          <div className="flex justify-between items-center ">
            <div>
              <p className="font-bold">Course Name </p>
              <p className="w-3/4 text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
                nulla tortor eu dui....
              </p>
            </div>
            <div>
              <button className="bg-black text-white rounded-full p-1 px-4">
                Add
              </button>
            </div>
          </div>
          <div>
            <div className="mx-auto">
              <p className="font-bold">Assignment Description </p>
              <p className="w-3/4 text-sm">
                Lorem ipsum dolor sit amet consectetur. Massa gravida viverra
                nulla tortor eu dui Lorem ipsum dolor sit amet consectetur.
                Massa gravida viverra nulla tortor eu duiLorem ipsum dolor sit
                amet consectetur. Massa gravida viverra nulla tortor eu duiLorem
                ipsum dolor sit amet consectetur. Massa gravida viverra nulla
                tortor eu dui
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignment;
