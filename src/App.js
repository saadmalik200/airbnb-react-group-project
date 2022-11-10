import "./App.css";
import Header from "./components/header/Header";

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
