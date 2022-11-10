import React from "react";

const ImagesContainer = ({ filteredHome }) => {
  return (
    <div className="w-[1122px]">
      <div className="container grid grid-cols-2 gap-4 grid-cols-4">
        {/* <img
          src="https://cdn.pixabay.com/photo/2018/06/23/21/00/balance-3493487__340.jpg"
          alt="1"
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm  lg:col-start-1 lg:row-start-1"
        /> */}

        {filteredHome?.images.map((item, i) => (
          <img
            key={i}
            className={`w-full h-full ${
              filteredHome?.images[0]
                ? "w-full h-full col-span-2 row-span-2 rounded shadow-sm  lg:col-start-1 lg:row-start-1"
                : "w-full h-full "
            }`}
            src={item}
            alt="2"
          />
        ))}

        {/* <img
          className="w-full h-full"
          src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
          alt="2"
        />
        <img
          className="w-full h-full"
          src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
          alt="3"
        />
        <img
          className="w-full h-full"
          src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
          alt="4"
        />
        <img
          className="w-full h-full"
          src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
          alt="5"
        /> */}
      </div>
    </div>
  );
};

export default ImagesContainer;
