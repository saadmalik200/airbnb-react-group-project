import React, { useContext } from "react";
import { Map, Marker, Overlay, ZoomControl } from "pigeon-maps";
import { useEffect, useState } from "react";
import { Context } from "../../context/Context";
import { maptiler } from "pigeon-maps/providers";
import Card from "../card/Card";
//import Markerinfo from "./Markerinfo";

export default function MyMap(props) {
  const { state } = useContext(Context);
  const maptilerProvider = maptiler("f6khKvLbJmOPDaKF2XFD", "streets");
  const [center, setCenter] = useState([47.41, 13.6997]);
  const [marker, setMarker] = useState();
  const [showmarker, setShowmarker] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const [item, setItem] = useState();

  console.log("item", item);
  return (
    <Map
      provider={maptilerProvider}
      dprs={[1, 2]}
      height={800}
      center={props.center}
      defaultCenter={center}
      defaultZoom={5}
      width={1800}
    >
      {state?.localData?.map((item, idx) => (
        <Overlay
          key={idx}
          width={25}
          anchor={[+item?.latlong[0], +item?.latlong[1]]}
        >
          <div
            onClick={() => setItem(item)}
            key={idx}
            className="bg-white px-3  py-[1.5px] rounded-full text-[15px] font-bold text-gray-700"
          >
            <p> {item.price} €</p>
          </div>
        </Overlay>
      ))}
      {item && <Card item={item} />}
      <ZoomControl />
    </Map>
  );
}
