import React from "react";

const RulesHook = () => {
  const [name, setName] = React.useState("Rohit Howlader");
  const changeName = () => {
    //setName(name+1);
    if (name === "Rohit Howlader") setName("Is great");
    else setName("Rohit Howlader");
  };
  return (
    <div>
      <h1>{name}</h1>
      <button className="btn" onClick={changeName}>
        Click Me
      </button>
    </div>
  );
};

export default RulesHook;
