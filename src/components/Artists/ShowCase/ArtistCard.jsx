import React from "react";

const ArtistCard = ({ artistHistory, artist, index, onClick }) => {
  const isEven = index % 2 === 0;

  return (
    <div
      className={`cursor-pointer flex flex-col overflow-hidden ${
        isEven ? "lg:flex-row" : "lg:flex-row-reverse"
      } ${index === 0 ? "lg:rounded-t-xl rounded-t-md" : ""} ${
        index === artistHistory.length - 1 ? "lg:rounded-b-xl rounded-b-md" : ""
      } glass lg:p-5 `}
      onClick={onClick}
    >
      <div className="lg:w-6/12">
        <div
          className={`lg:h-[70vh] h-[50vh] object-cover object-top w-full overflow-hidden ${
            isEven ? "lg:rounded-r-xl" : "lg:rounded-l-xl"
          }`}
        >
          <img className="w-full" src={artist.img} alt="" />
        </div>
      </div>
      <div className="lg:w-6/12 flex flex-col justify-end lg:items-center font-mono text-white gap-5">
        {/* name */}
        <h1 className="xl:text-[70px] text-[40px] px-5">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-600">
            {artist.bandName}
          </span>
        </h1>
        {/* album and featuring */}
        <div className="w-full lg:px-10 px-2 flex flex-col gap-3 pb-5">
          <p className="xl:text-3xl flex flex-wrap gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-600">
              ALBUM -
            </span>{" "}
            {artist.albums?.map((al, index) => (
              <span key={index}>
                {al}
                {index !== artist.albums.length - 1 && ", "}
              </span>
            ))}
          </p>
          <p className="xl:text-2xl flex flex-wrap gap-2">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-red-700 to-red-600">
              FEATURING -
            </span>{" "}
            {artist.featuring.map((fe, index) => (
              <span key={index}>
                {fe}
                {index !== artist.featuring.length - 1 && ", "}
              </span>
            ))}
          </p>
          <div className="flex flex-col gap-5">
            <p>Released 06/19/2001</p>
            <p>Label: Shady Records/Aftermath Records/Interscope Records</p>
            <p>Format/Edition(s): Album</p>
          </div>
          {/* cate  */}
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
            quibusdam delectus vero corporis amet vitae architecto at omnis
            similique expedita, mollitia qui repellendus, minus culpa veniam,
            velit maxime quis iure! Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Suscipit nesciunt similique sapiente excepturi
            tempora, rerum a veniam beatae nobis quaerat hic dolorum odit, at
            eius. Veritatis saepe quisquam fuga eveniet.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ArtistCard;
