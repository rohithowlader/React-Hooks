import React, { useState } from "react";

function UseStateArray() {
  const bioData = [
    {
      id: 0,
      myName: "Rohit",
      age: 24,
    },
    {
      id: 1,
      myName: "Vinod",
      age: 26,
    },
  ];
  const [myArray, setMyArray] = useState(bioData);
  const clearArray = () => {
    setMyArray([]);
  };

  const removeElem = (id) => {
    // alert(id);
    const myNewArray = myArray.filter((currElm) => {
      return currElm.id !== id;
    });
    setMyArray(myNewArray);
  };

  return (
    <>
      {/* <h1>Name: Rohit & Age: 24</h1> */}
      {myArray.map((currElm) => {
        return (
          <h1 key={currElm.id}>
            Name: {currElm.myName} & Age: {currElm.age}
            <button onClick={() => removeElem(currElm.id)}>Remove</button>
          </h1>
        );
      })}
      <button onClick={clearArray}>Clear</button>
    </>
  );
}

export default UseStateArray;
