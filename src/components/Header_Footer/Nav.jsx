import React from "react";
import { useNavigate } from "react-router-dom";

const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

const Nav = ({ setIsActive }) => {
  const loc = [
    {
      id: 1,
      title: "HERO",
      section: "home",
    },
    {
      id: 2,
      title: "TOUR DATES",
      section: "tour",
    },
    {
      id: 3,
      title: "MUSIC",
      section: "music",
    },
  ];
  const nav = useNavigate();

  return (
    <div className="flex lg:gap-5 gap-2 text-[10px] lg:text-lg font-bold text-white cursor-pointer">
      {loc.map((el) => (
        <div
          key={el.id}
          onClick={() => {
            nav("/");
            setTimeout(() => {
              scrollToSection(el.section);
            }, 100);
            if (window.innerWidth < 1024) {
              setIsActive(false);
            }
          }}
          className={`px-2 border-r-2  border-red-600 opacity-70 hover:opacity-100 duration-200 transition`}
        >
          {el.title}
        </div>
      ))}
      <div
        onClick={() => {
          nav("/label");
          if (window.innerWidth < 1024) {
            setIsActive(false);
          }
          setTimeout(() => {
            scrollToSection('artists');
          }, 100);
        }}
        className={`px-2 border-r-2  border-red-600 opacity-70 hover:opacity-100  duration-200 transition`}
      >
        ARTISTS
      </div>
    </div>
  );
};

export default Nav;
