import React from "react";
import hero from "../../../../public/home.jpg";
import hero1 from "../../../../public/image1.jpeg";
import hero2 from "../../../../public/image0.jpeg";
import title from "../../../../public/image2.png";
const Home = () => {
  const tour = [
    {
      id: 1,
      date: "August, 19",
      town: "Beckenham Place Park, London, UK",
      location: "IMANU @ Hospitality in the Park,",
      city: "London, UK",
    },
    {
      id: 2,
      date: "August, 25",
      town: "Los Angeles, CA",
      location: "IMANU @ Los Angeles Convention",
      city: "Center",
    },
    {
      id: 3,
      date: "August, 19",
      town: "Los Angeles, CA",
      location: "IMANU @ Los Angeles Convention",
      city: "Center",
    },
  ];
  const data = [
    {
      id: 1,
      img: hero1,
      date: "2017 PRESENT",
      text: "Saii (Sailus) & Lwin (LZ) started the “Terror bass” at thebeginning of 2014. Over a year they started appearing with toplocal artists but In 2016, their history making track, “BTFWD”remix was released from ‘Soundcloud’. It got recognized and‘played’ worldwide by the original maker of the track, “Carnage”and also many huge artists including; “DJ Snake” , “ TheChainsmokers”, “Lookas” , “SKiSM” and “NGHTMRE”. In a few months,their very first Domestic live debut , was sharing the stage with“Deorro” , “DVBBS” and “Moti”. In December of 2016, theirremarkable achievement was 808 Festival (Pattaya and Yangon),where they shared the stage together with the big man ’Papi Gordo’aka “Carnage” himself for the very first time. He brought out“Terror Bass” to drop the “BTFWD remix” together and it was afrustrating proud moment for every local EDM fans",
    },
    {
      id: 2,
      img: hero2,
      date: "2018 PRESENT",
      text: "2018 also took them to sign with supermodified agency and startedtouring through China, Malaysia, Thailand across Southeast Asia.They have appeared in same lineup together with huge names like;“Martin Garrix” and many more. In 2019, “Carnage” ended the decadewith a grammy nominated track, together with “Terror Bass”. Themusic video got streamed over 1 million views within a month. It wasreleased from EMPIRE recordings, on behalf of the “HeavyweightLabel” and title is “HOLY MOLY”. The track got press feat fromBillboard, YourEDM, Edm.com , Nest HQ, OWSLA, RunTheTrap, Spotifyand Tracklist10001. It changed entire aspects of the electronicmusic sc",
    },
  ];
  return (
    <div className="w-full h-full flex font-light flex-col gap-10">
      {/* hero section  */}
      <div className="flex flex-col-reverse lg:flex-row">
        {/* left side  */}
        <div className="lg:w-7/12 lg:pb-24 lg:pr-10 flex flex-col lg:justify-between items-center ">
          <img className=" w-48 lg:w-4/6" src={title} alt="" />
          {/* text  */}
          <div className="flex flex-col gap-6  leading-6 text-white text-md mb-5">
            <h1 className=" font-bold text-xl lg:text-2xl text-white">
              OUR STORY
            </h1>

            <a
              href="https://www.youtube.com/@TerrorBassDJProducer"
              className=" underline"
            >
              Subscribe to the TERROR BASS{" "}
            </a>
            <p>
              In 2017, they collaborated with grammy winner, the rapper “Lil
              Jon” and “Skellism”. It was one of the most biggest hit, ASIA has
              ever made and the world has no clues about it. It was released
              from the ’Geffen Records’ which is the birth place of Major World
              Class Icons like following artists like; “Guns N Roses” ,
              “NIRVANA” , “Aero Smith” , “Snoop-Dogg” , “AVICII” & The “DJ
              Snake”. The track was named , “IN THE PIT” , a burning fuel of
              hell which topped the music charts from all around the world and
              brought “Terror Bass” to the table today.
            </p>
          </div>

          {/* release date  */}
          <div className="flex flex-col gap-5">
            <h1 className=" font-bold text-xl lg:text-2xl text-white">
              UPCOMING TOUR DATES
            </h1>
            <div className="flex flex-wrap gap-3 justify-between">
              {tour.map((item) => {
                return (
                  <div
                    key={item.id}
                    className="flex text-white flex-col gap-3 text-sm border-l-2 border-white p-5 py-1"
                  >
                    <div className="flex flex-col gap-1 ">
                      <p>{item.date}</p>
                      <p>{item.town}</p>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p>{item.location}</p>
                      <p>{item.city}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* right side  */}
        <div className="lg:w-5/12 h-full flex flex-col gap-10">
          <img
            src={hero}
            className=" object-top h-[30vh] lg:h-full object-cover rounded-md lg:rounded-l-md shadow-lg"
            alt=""
          />
        </div>
      </div>

      {/* present  */}
      <div className="flex flex-col gap-10">
        {data.map((el) => {
          return (
            <div
              key={el.id}
              className={`flex lg:flex-row flex-col ${
                el.id === 2 && "lg:flex-row-reverse"
              } lg:gap-10 gap-5`}
            >
              {/* img  */}
              <div className="w-12/12 lg:w-5/12 h-full flex flex-col gap-10">
                <img
                  src={el.img}
                  className=" rounded-md lg:rounded-l-md shadow-lg"
                  alt=""
                />
              </div>
              {/* text  */}
              <div className="w-12/12 lg:w-7/12 flex flex-col justify-between">
                <div className="flex flex-col gap-6  leading-6 text-white text-md mb-5">
                  <h1 className=" font-bold text-xl lg:text-2xl text-white">
                    {el.date}
                  </h1>
                  <p className=" lg:w-9/12">{el.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
