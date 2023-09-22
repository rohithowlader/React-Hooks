import "./App.css";
import React from "react";
import UseStateArray from "./component/UseStateArray";

function App() {
  //const [name, setName] = useState(1);
  // const [name, setName] = useState("Rohit Howlader");

  // const changeName = () => {
  //   //setName(name+1);
  //   if (name === "Rohit Howlader") setName("Is great");
  //   else setName("Rohit Howlader");
  // };
  return (
    <div className="App">
      <header className="App-header">
        {/* <h1>{name}</h1>
        <button className="btn" onClick={changeName}>
          Click Me
        </button> */}
        {/* <RulesHook /> */}
        <UseStateArray />
      </header>
    </div>
  );
}

export default App;
