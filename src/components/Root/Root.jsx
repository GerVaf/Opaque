import React from "react";
import Home from "./Home/Home";
import Tour from "./Tour/Tour";
import Music from "./Music/Music";
import Shop from "./Shop/Shop";

const Root = () => {
  return (
    <div className=" font-sans">
      <div id="home">
        <Home />
      </div>
      <div id="tour">
        <Tour />
      </div>
      <div id="music">
        <Music />
      </div>
      <div id="merch">
        <Shop />
      </div>
    </div>
  );
};

export default Root;
