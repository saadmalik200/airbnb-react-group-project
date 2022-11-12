import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LocalData from "./components/localdata/LocalData";
import SingleHouseDetails from "./components/singlehousedetails/SingleHouseDetails";
import HomePage from "./components/homepage/HomePage";
import Map from "./components/map/Map";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <LocalData />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/search" element={<Header />} />
          <Route path="/map" element={<Map height={830} />} />
          <Route path="/home/:singlehome" element={<SingleHouseDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
