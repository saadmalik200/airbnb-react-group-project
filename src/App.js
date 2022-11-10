import "./App.css";
import Header from "./components/header/Header";

import LocalData from "./components/localdata/LocalData";
import CardConatiner from "./components/card/CardConatiner";
import SingleHouseDetails from "./components/singlehousedetails/SingleHouseDetails";
import NameReviewHeader from "./components/singlehousedetails/top-name-review/NameReviewHeader";
function App() {
  return (
    <div className="App">
      <Header />
      <LocalData />
      <NameReviewHeader />
      <CardConatiner />
      <SingleHouseDetails />
    </div>
  );
}

export default App;
