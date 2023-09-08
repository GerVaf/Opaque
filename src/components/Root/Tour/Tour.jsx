import React from "react";

const Tour = () => {
  const data = [
    {
      date: "Augest, 19",
      location: "Beckenham Place Park, London, UK",
      town: "IMANU @ Hospitality in the Park, London, UK",
    },
    {
      date: "August, 25",
      location: "Los Angeles, CA",
      town: "IMANU @ Los Angeles Convention Center",
    },
    {
      date: "August, 26",
      location: "Los Angeles, CA",
      town: "IMANU @ Los Angeles Convention Center",
    },
    {
      date: "September, 15",
      location: "London, UK",
      town: "IMANU @ Ministry of Sound",
    },
    {
      date: "September, 22",
      location: "Bratislava, SK",
      town: "IMANU @ Wax",
    },
    {
      date: "September, 29",
      location: "Manchester, UK",
      town: "IMANU @ Hidden",
    },
    {
      date: "September, 30",
      location: "Milan, IT",
      town: "IMANU @ Electric Wave",
    },
    {
      date: "October, 06",
      location: "Bristol, UK",
      town: "IMANU @ Loco",
    },
    {
      date: "October, 13",
      location: "Berlin, DE",
      town: "IMANU @ Gretchen",
    },
    {
      date: "October, 20",
      location: "Amsterdam, NL",
      town: "IMANU Presents @ ADE Melkweg",
    },
    {
      date: "October, 27",
      location: "Toronto, ON",
      town: "IMANU @ DOCD",
    },
    {
      date: "November, 05",
      location: "Hampton, VA",
      town: "IMANU @ Hampton Coliseum",
    },
    {
      date: "November, 10",
      location: "Chicago, IL",
      town: "IMANU @ Primary Nightclub",
    },
    {
      date: "November, 11",
      location: "Salt Lake City, UT",
      town: "IMANU @ Great Saltair",
    },
    {
      date: "November, 16",
      location: "Ft. Lauderdale, FL",
      town: "IMANU @ Rev Live",
    },
    {
      date: "November, 17",
      location: "Orlando, FL",
      town: "IMANU @ Warehouse at CFF",
    },
    {
      date: "November, 18",
      location: "Tampa, FL",
      town: "IMANU @ The Cuban Club",
    },
  ];
  return (
    <div className=" ">
      <h1 className="lg:text-[100px] text-6xl font-extrabold text-white opacity-20">
        TOUR DATES
      </h1>
      <div className="flex lg:flex-wrap lg:flex-row flex-col">
        {data.map((card) => {
          return (
            <div key={card.date} className="lg:w-4/12  p-5">
              <div className="border rounded-sm p-5 lg:h-60 flex flex-col gap-2">
                <p className="text-white">{card.date}</p>
                <p className="text-gray-200 font-thin">{card.location}</p>
                <p className="text-lg lg:text-xl text-red-600">
                  {card.town}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Tour;
