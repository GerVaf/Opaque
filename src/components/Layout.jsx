import React from "react";
import Nav from "./Header_Footer/Nav";
import { GrSoundcloud } from "react-icons/gr";
import { BsSpotify, BsTwitter } from "react-icons/bs";
import { AiFillFacebook, AiFillInstagram, AiFillYoutube } from "react-icons/ai";
import Menu from "./Menu/Menu";
import { motion } from "framer-motion";

const Layout = ({ children }) => {
  const platform = [
    {
      id: 1,
      icon: <AiFillFacebook />,
    },
    {
      id: 2,
      icon: <AiFillYoutube />,
    },
    {
      id: 3,
      icon: <AiFillInstagram />,
    },
    {
      id: 4,
      icon: <BsTwitter />,
    },
    {
      id: 5,
      icon: <BsSpotify />,
    },
    {
      id: 6,
      icon: <GrSoundcloud />,
    },
  ];

  return (
    <div className="flex justify-center bg-black w-[100vw] h-[100vh] overflow-hidden">
      {/* parent */}
      <div className="w-[85%] my-10 mt-16 lg:my-20 bg-gradient-to-b from-zinc-700 to-gray-800 p-5 flex flex-col relative rounded-md">
        {/* mobile menu */}
        <div className="lg:hidden block absolute left-0 top-[-15vh]">
          <Menu />
        </div>
        {/* nav */}
        <div className="hidden lg:block absolute top-[-35px] right-28">
          <Nav />
        </div>

        {/* platform */}
        <div className="absolute top-10 right-[-23px] lg:right-[-35px] flex flex-col lg:gap-5 gap-3 cursor-pointer ">
          {platform?.map((el) => {
            return (
              <div
                className="text-white text-lg lg:text-2xl hover:text-gray-400 duration-200 transition "
                key={el.id}
              >
                {el.icon}
              </div>
            );
          })}
        </div>

        {/* Div 1 */}
        <motion.div
          className="bg-red-600 w-2 lg:w-5 h-64 absolute lg:left-[-20px] left-[-8px] top-20 flex"
          initial={{ y: 0 }}
          animate={{ y: [0, 300, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        ></motion.div>

        {/* Div 2 */}
        <motion.div
          className="bg-red-600 w-3/12 h-5 absolute right-[100px] bottom-[-20px] lg:flex hidden "
          initial={{ x: 0 }}
          animate={{ x: [0, -600, 0] }}
          transition={{ duration: 7, repeat: Infinity }}
        ></motion.div>

        {children}
      </div>
    </div>
  );
};

export default Layout;
