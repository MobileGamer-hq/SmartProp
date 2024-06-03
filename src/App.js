import logo from './logo.svg';
import './App.css';
import { FlatButton } from './Components/Buttons';
import { useState } from 'react';

function App() {
  const [_width, setWidth] = useState(10);
  return (
    <div className="App">
      <header className="App-header" >
        <FlatButton text={"Hello World"} color={"blue"}/>
        <FlatButton text={"Hello World"} color={"#fff000"}/>
        <FlatButton color = {"Orange"} text = {"I learned something new"}/>

        <div style={{width: _width, backgroundColor: "orange"}} onClick={() => setWidth(_width + 1)}>
          {_width}
        </div>

      </header>
    </div>
  );
}

export default App;
