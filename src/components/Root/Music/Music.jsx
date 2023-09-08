import React from "react";
import { BsSpotify } from "react-icons/bs";
import { GrSoundcloud } from "react-icons/gr";
import { AiFillYoutube } from "react-icons/ai";
import music1 from "../../../../public/music1.jpg";
import music2 from "../../../../public/music2.jpg";
import music3 from "../../../../public/music3.jpg";
import music4 from "../../../../public/music4.jpg";
import music5 from "../../../../public/music5.jpeg";
import music6 from "../../../../public/music6.jpeg";
import music7 from "../../../../public/music7.jpg";
import music8 from "../../../../public/music8.jpg";
import music9 from "../../../../public/music9.jpg";
import music10 from "../../../../public/music10.jpeg";
const Music = () => {
  const data = [
    {
      img: music1,
      title: "IMANU - Unfold Remixes",
      note: "Unfold Remixes are out now!",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
    {
      img: music2,
      title: "IMANU - Unfold",
      note: "My debut album is here!",
    },
    {
      img: music3,
      title: "IMANU - Empress",
      note: "Unfold Remixes are out now!",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
    {
      img: music4,
      title: "IMANU, What So Not & Wingtip - Pillow Talk",
      note: "-",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
    {
      img: music5,
      title: "IMANU & LIA - Temper",
      note: "-",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
    {
      img: music6,
      title: "IMANU x KUČKA - It's Our Destiny",
      note: "It's Our Destiny explores melody and rhythm, melancholic melody and hopeful lyrics to combine into a concise and precise production. It was a blast working with one of my favourite singers KUCKA, I've been a fan of her work for years and feel honoured that she's featured on It's Our Destiny",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
    {
      img: music7,
      title: "IMANU - A Taste Of Hope (Remixes)",
      note: "'A Taste Of Hope' remixes by Odd Mob and Emperor",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
      },
    },
    {
      img: music8,
      title: "IMANU & Jon Casey - Kotaro",
      note: "In Kotaro we fused Drum & Bass with Juke, keeping it raw in a techy coating.",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
    {
      img: music9,
      title: "IMANU x The Caracal Project - Neiges / La Fournaise",
      note: "Neiges sounds like we dropped a MIDI keyboard down some stairs.",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
    {
      img: music10,
      title: "Noisia - Incessant (IMANU Remix)",
      note: "'Incessant' is my favourite track of what is in my opinion the best D&B EP of all time, so I am honoured that I was allowed to remix this. The original stands out because of the continious lead that drives the track through all the switches and additions, and in that it is quite unique I think.",
      icon: {
        spo: <BsSpotify />,
        scluod: <GrSoundcloud />,
        utube: <AiFillYoutube />,
      },
    },
  ];
  return (
    <div className=" ">
      <h1 className="lg:text-[100px] text-6xl font-extrabold text-white opacity-20">
        MUSIC
      </h1>
      <div className="flex lg:flex-row flex-col flex-wrap lg:gap-0 gap-10">
        {data.map((card) => {
          return (
            <div key={card?.img} className="xl:w-6/12  lg:w-12/12 lg:p-10">
              <div className="flex xl:flex-col flex-col lg:justify-center lg:items-center lg:gap-10"> 
                <img
                  className="lg:w-full object-cover rounded-lg"
                  src={card?.img}
                  alt=""
                />
                {/* information  */}
                <div className="lg:w-full flex flex-col gap-3">
                  <p className="text-white font-bold text-2xl lg:text-4xl">
                    {card?.title}
                  </p>
                  <p className="text-gray-300 font-light text-sm lg:text-xl">
                    {card?.note}
                  </p>
                  <div className="flex gap-5 text-xl text-gray-400">
                    <p>{card?.icon?.spo}</p>
                    <p>{card?.icon?.scluod}</p>
                    <p>{card?.icon?.utube}</p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Music;
