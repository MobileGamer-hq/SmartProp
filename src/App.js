import logo from "./logo.svg";
import "./App.css";
import { FlatButton } from "./Components/Buttons";
import { useState } from "react";
import Dropdown from "./Components/Dropdown";
import { colors, dropdown_options } from "./Data/DataModels";
import Home from "./Pages/Home";

function App() {
  const [_width, setWidth] = useState(10);

  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
