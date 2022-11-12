import React from "react";

const ImagesContainer = ({ filteredHome }) => {
  return (
    <div className="w-[1122px] mt-6">
      <div className="container grid grid-cols-2 gap-4 grid-cols-4">
        <img
          src={filteredHome?.images[0]}
          alt="1"
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  lg:col-start-1 lg:row-start-1"
        />
        {/* {filteredHome?.images.map((item, i) => (
          <img
            key={i}
            className={`${
             item[0]
                ? "w-full h-full col-span-2 row-span-2 rounded shadow-sm  col-start-1 row-start-1"
                : "w-full h-full"
            }`}
            src={item}
            alt="2"
          />
        ))} 
        />*/}
        <img className="w-full h-full" src={filteredHome?.images[1]} alt="2" />
        <img className="w-full h-full" src={filteredHome?.images[2]} alt="3" />
        <img className="w-full h-full" src={filteredHome?.images[3]} alt="4" />
        <img className="w-full h-full" src={filteredHome?.images[4]} alt="5" />
      </div>
    </div>
  );
};

export default ImagesContainer;
