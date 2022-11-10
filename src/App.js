import "./App.css";
import Header from "./components/header/Header";

import LocalData from "./components/localdata/LocalData";
import CardConatiner from "./components/card/CardConatiner";
import SingleHouseDetails from "./components/singlehousedetails/SingleHouseDetails";
function App() {
  return (
    <div className="App">
      {/* <Fetch /> */}
      <Header />
      <LocalData />
      <CardConatiner />
      <SingleHouseDetails />
    </div>
  );
}

export default App;
