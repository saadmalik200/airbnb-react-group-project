import "./App.css";
import Header from "./components/header/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import LocalData from "./components/localdata/LocalData";
import SingleHouseDetails from "./components/singlehousedetails/SingleHouseDetails";
import HomePage from "./components/homepage/HomePage";
import Map from "./components/map/Map";
import LoginForm from "./components/login/LoginForm";
import SignUpPage from "./components/signup/SignUp";

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
          <Route path="/home/login" element={<LoginForm />} />
          <Route path="/confirmation" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
