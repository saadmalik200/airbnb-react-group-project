import { getDistance } from "geolib";
import React, { useContext, useEffect, useState } from "react";
import { Context } from "../../context/Context";

const GeoData = ({ lat, lng }) => {
  const { state, dispatch } = useContext(Context);
  const [currGeoCoordinates, setcurrGeoCoordinates] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setcurrGeoCoordinates([
        position?.coords?.latitude,
        position?.coords?.longitude,
      ]);
      dispatch({ type: "geoData", payload: currGeoCoordinates });
    });
  }, [lat, lng]);

  // console.log("This one", currGeoCoordinates);
  useEffect(() => {
    const calculateDistance = () => {
      let dis = getDistance(
        {
          latitude: "" && currGeoCoordinates[0],
          longitude: "" && currGeoCoordinates[1],
        },
        {
          latitude: lat,
          longitude: lng,
        }
      );

      dispatch({ type: "distance", payload: (dis / 1000).toFixed(0) });
      // console.log(`${dis / 1000} KM`);
      // return `${dis / 1000} KM`;
      // console.log(currGeoCoordinates);
      // console.log(`${state?.localData[0]?.latlong[0]}`);
      // console.log(state.localData);
      //return dispatch({ type: "localData", payload: data });
    };

    calculateDistance();
  }, [currGeoCoordinates, lat, lng]);
};

export default GeoData;
