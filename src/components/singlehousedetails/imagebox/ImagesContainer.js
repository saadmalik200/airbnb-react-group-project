import React from "react";

const ImagesContainer = () => {
  return (
    <div className="container grid grid-cols-2 gap-4 lg:grid-cols-4">
      <img
        src="https://cdn.pixabay.com/photo/2018/06/23/21/00/balance-3493487__340.jpg"
        className="w-full h-full col-span-2 row-span-2 rounded shadow-sm lg:col-start-3 lg:row-start-1"
      />
      <img
        className="w-full h-full"
        src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
      />
      <img
        className="w-full h-full"
        src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
      />
      <img
        className="w-full h-full"
        src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
      />
      <img
        className="w-full h-full"
        src="https://cdn.pixabay.com/photo/2017/11/09/10/57/light-weight-aggregates-2933073__340.jpg"
      />
    </div>
  );
};

export default ImagesContainer;
