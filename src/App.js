import "./App.css";
import Fetch from "./components/fetchdata/Fetch";

import LocalData from "./components/localdata/LocalData";
import CardConatiner from "./components/card/CardConatiner";
function App() {
  return (
    <div className="App">
      {/* <Fetch /> */}
      <LocalData />
      <CardConatiner />
    </div>
  );
}

export default App;
