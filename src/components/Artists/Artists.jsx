import React from "react";
import ShowCase from "./ShowCase/ShowCase";

const Artists = () => {
  return (
    <div className="">
      <h1 id='artists' className="lg:text-[100px] text-6xl font-extrabold text-white opacity-30 mb-10">
        ARTISTS
      </h1>
      {/* Artists cate  */}
      <div  className="w-full flex flex-col ">
        <ShowCase/>
      </div>
    </div>
  );
};

export default Artists;
