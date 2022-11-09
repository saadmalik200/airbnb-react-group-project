import React, { useContext, useEffect } from "react";
import { Context } from "../../context/Context";

const Fetch = () => {
  const { state, dispatch } = useContext(Context);

  useEffect(() => {
    const getData = async () => {
      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );

      const data = await res.json();
      console.log(data);
      dispatch({ type: "sendData", payload: data });
    };

    getData();
  }, []);

  return <div>Fetch</div>;
};

export default Fetch;
