import React, { useState } from "react";
import Education from "./Education";
import ErrorMsg from "./ErrorMsg";

const Home = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    input !== "" ? setUser(true) : setErrorMsg(true);
    console.log(`${input}`);
  };

  if (user) {
    return <Education name={input} />;
  } else {
    return (
      <div className="ui center aligned container">
        <div className="ui middle aligned container">
          <p>Hi there! Weclome to your education showcase!</p>
        </div>
        <form onSubmit={(e) => handleSubmit(e)} className="ui container">
          <p>Type your name and click "Enter" below to begin!</p>
          <input
            className="ui input"
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input className="ui button" type="submit" value="Enter" />
          <br />
        </form>
        <br />
        {errorMsg ? <ErrorMsg message="Name cant be blank" /> : null}
      </div>
    );
  }
};

export default Home;
