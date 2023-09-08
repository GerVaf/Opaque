import React from "react";
import alb1 from "../../../../public/album.jpg";
import alb3 from "../../../../public/album3.jpg";
import alb2 from "../../../../public/album1.jpeg";
import alb4 from "../../../../public/album4.jpeg";
import alb8 from "../../../../public/album8.gif";
import alb5 from "../../../../public/album5.gif";
import label from "../../../../public/image2.png";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
const Album = () => {
  const albumData = [
    {
      title: "Burmese Vibe",
      ft: "BILL LASWEEL",
      img: alb1,
      color: "rgb(161,85,161)",
    },
    {
      title: "In The Pit",
      ft: "TERROR BASS",
      img: alb2,
      color: "rgb(144,52,71)",
    },
    {
      title: "In The Pit",
      ft: "TERROR BASS",
      img: alb8,
      color: "rgb(227,68,60)",
    },
    {
      title: "In The Pit",
      ft: "BASS TERROR",
      img: alb4,
      color: "rgb(161,85,161)",
    },{
      title: "Blah Blah",
      ft: "88Rising",
      img: alb5,
      color: "rgb(168,85,161)",
    },
  ];

  return (
    <div>
      <h1
        className="lg:text-[100px] text-6xl font-extrabold text-white opacity-30 mb-10"
      >
        AlBUM OF JOJI
      </h1>
      <section id="timeline" className=" w-[70vw] lg:w-full font-mono">
        <VerticalTimeline lineColor="#fff" date="2011 - present">
          {albumData.map((album, index) => (
            <VerticalTimelineElement
              key={index}
              date="2011 - present"
              dateClassName="text-[#fff] "
              contentStyle={{
                background: "#fff",
                borderTop: ` 5px solid ${album.color}`,
              }}
              contentArrowStyle={{ borderRight: "10px solid  #ffffff" }}
              iconStyle={{ background: "#ffff", color: "#fff" }}
              icon={
                <img
                  className=" w-full h-full rounded-full"
                  src={label}
                  alt={label}
                />
              }
            >
              <div className="mb-5">
                <h3 className="vertical-timeline-element-title lg:text-xl">
                  {album.title}
                </h3>
                <p className="vertical-timeline-element-subtitle lg:text-lg">
                  {album.ft}
                </p>
              </div>
              <img src={album.img} alt="" />
            </VerticalTimelineElement>
          ))}
        </VerticalTimeline>
      </section>
    </div>
  );
};

export default Album;
