import React, { useState } from "react";

const BasicForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [allEntry, setAllEntry] = useState([]);

  const submitForm = (e) => {
    e.preventDefault();
    if (email && password) {
      const newEntry = {
        id: new Date().getTime().toString(),
        email: email,
        password: password,
      };
      setAllEntry([...allEntry, newEntry]);
      setEmail("");
      setPassword("");
    } else {
      alert("please fill the data");
    }
  };

  return (
    <>
      <h1>hell0</h1>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <div>
        {allEntry.map((currElm) => {
          return (
            <div key={currElm.id}>
              <p>{currElm.email}</p>
              <p>{currElm.password}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BasicForm;
