import { createContext, useReducer, useState } from "react";

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const initialState = { localData: [], apiData: [] };

  const reducer = (state, action) => {
    switch (action.type) {
      case "sendData":
        console.log("action", action.payload);
        return { ...state, apiData: action.payload };

      case "localData":
        console.log("action", action.payload);
        return { ...state, localData: action.payload };

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
