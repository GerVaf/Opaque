import React from "react";
import { useNavigate } from "react-router-dom";
import ArtistCard from "./ArtistCard";

import showCase1 from "../../../../public/artist.jpg";
import showCase2 from "../../../../public/artist1.jpg";
import showCase3 from "../../../../public/artist3.jpg";
import showCase4 from "../../../../public/artist5.jpg";

const artistHistory = [
  {
    img: showCase1,
    bandName: "BEYOND THE DARK",
    albums: ["HOLY MOLY", "YAYKELYAY"],
    featuring: ["BILLY JOE", "THAR SIS", "HERIO"],
  },
  {
    img: showCase2,
    bandName: "EMINEM",
    albums: ["MOCKING BIRD", "SLIM SHADY"],
    featuring: ["TERROR BASS", "KHIN HLAING"],
  },
  {
    img: showCase3,
    bandName: "JOJI",
    albums: ["SLOW DANCING IN THE DARK", "GIMME LOVE"],
    featuring: ["POST MALONE", "THAR SIS", "JUCIE WORLD"],
  },
  {
    img: showCase4,
    bandName: "RICH BRAIN",
    albums: ["HISTORY", "TOKYO DRIFF"],
    featuring: ["88RISING", "BOES", "MESA", "BROADS"],
  },
];

const ShowCase = () => {
  const nav = useNavigate();

  const handleArtistClick = () => {
    nav("/album");
  };

  return (
    <>
      {artistHistory?.map((artist, index) => (
        <ArtistCard
          artistHistory={artistHistory}
          key={index}
          artist={artist}
          index={index}
          onClick={handleArtistClick}
        />
      ))}
    </>
  );
};

export default ShowCase;
