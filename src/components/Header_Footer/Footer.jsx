import React from "react";
import Marquee from "react-fast-marquee";
import colab1 from "../../../public/colablogo.png";
import colab2 from "../../../public/colablogo.webp";
import colab3 from "../../../public/colablogo1.png";
import colab4 from "../../../public/colablogo2.png";
import colab5 from "../../../public/image2.png";

const Footer = () => {
  const imagePaths = [colab1, colab2, colab3, colab4,colab5];

  return (
    <div className="flex justify-center py-2 items-center bg-red-900">
      <Marquee speed={70} pauseOnHover={true} gradientColor={false}>
        {imagePaths.map((imagePath, index) => (
          <img
            key={index}
            src={imagePath}
            alt={`Colab Logo ${index}`}
            className="h-20 object-cover rounded-md mx-16 "
          />
        ))}
      </Marquee>
    </div>
  );
};

export default Footer;
