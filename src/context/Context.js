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
        // console.log("action", action.payload);
        return { ...state, localData: action.payload };

      case "distance":
        //console.log("action", action.payload);
        return { ...state, distance: [...state.distance, action.payload] };

      case "geoData":
        // console.log("This is Geo Data", action.payload);
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

  // State for adding guests
  const [amount, setAmount] = useState({
    0: 0,
    1: 0,
    2: 0,
    3: 0,
  });

  const increment = (e) => {
    const { id } = e.target;
    setAmount((prev) => ({ ...prev, [id]: prev[id] + 1 }));
  };

  const decrement = (e) => {
    const { id } = e.target;
    if (amount[id] > 0) {
      setAmount((prev) => ({ ...prev, [id]: prev[id] - 1 }));
    }
  };

  // State for the request pop up
  const [popup, setPopup] = useState({
    where: false,
    who: false,
  });

  const handleWhere = () => {
    setPopup((prev) => ({ where: !popup.where, who: false }));
  };

  const handleWho = () => {
    setPopup((prev) => ({ where: false, who: !popup.who }));
  };

  return (
    <Context.Provider
      value={{
        state,
        dispatch,
        discover,
        setDiscover,
        handleSearchClick,
        amount,
        increment,
        decrement,
        popup,
        handleWhere,
        handleWho,
      }}
    >
      {children}
    </Context.Provider>
  );
};

export default ContextProvider;
