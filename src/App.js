import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LocalData from "./components/localdata/LocalData";
import SingleHouseDetails from "./components/singlehousedetails/SingleHouseDetails";
import HomePage from "./components/homepage/HomePage";

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
