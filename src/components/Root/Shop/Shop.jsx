import React from "react";
import shop1 from "../../../../public/shirt1.jpg";
import shop2 from "../../../../public/shirt2.jpg";
import shop3 from "../../../../public/shirt3.jpg";
import shop4 from "../../../../public/shirt4.jpg";
import shop5 from "../../../../public/shirt5.jpg";
import shop6 from "../../../../public/shirt6.jpg";

const Shop = () => {
  const data = [
    {
      name: "Tee 1",
      price: 100,
      img: shop1,
    },
    {
      name: "Tee 2",
      price: 120,
      img: shop2,
    },
    {
      name: "Tee 3",
      price: 80,
      img: shop3,
    },
    {
      name: "Tee 4",
      price: 90,
      img: shop4,
    },
    {
      name: "Tee 5",
      price: 110,
      img: shop5,
    },
    {
      name: "Tee 6",
      price: 95,
      img: shop6,
    },
  ];

  return (
    <div>
      <h1 className="lg:text-[100px] text-6xl font-extrabold text-white opacity-20 mb-5">
        MERCH
      </h1>

      <div className="flex flex-wrap ">
        {data.map((item, index) => (
          <div
            key={index}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 px-4 mb-8"
          >
            <div className="bg-gray-200 p-4 rounded-lg h-full ">
              <img
                src={item.img}
                alt={item.name}
                className=" w-full object-cover h-3/5"
              />
              <div className="h-2/5 flex flex-col justify-around">
                <h2 className="text-2xl font-semibold">{item.name}</h2>
                <p className="text-gray-500 lg:text-xl">${item.price}</p>
                <button className="bg-red-500 font-bold text-white px-4 py-2 mt-2 rounded-md">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Shop;
