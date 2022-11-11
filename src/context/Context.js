import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = {
    localData: [],
    apiData: [],
    distance: [],
    geoData: [],
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case "sendData":
        // console.log("action", action.payload);
        return { ...state, apiData: action.payload };

      case "localData":
        //console.log("action", action.payload);
        return { ...state, localData: action.payload };

      case "distance":
        //console.log("action", action.payload);
        return { ...state, distance: [...state.distance, action.payload] };

      case "geoData":
        //console.log("This is Geo Data", action.payload);
        return { ...state, geoData: action.payload };

      default:
        return;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);
  const [discover, setDiscover] = useState(false);

  const handleSearchClick = () => {
    setDiscover((prev) => !prev);
  };

  return (
    <Context.Provider
      value={{ state, dispatch, discover, setDiscover, handleSearchClick }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
