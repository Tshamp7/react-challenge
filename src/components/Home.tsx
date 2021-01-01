import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import ErrorMsg from "./ErrorMsg";

interface Home {
  pathname: string;
}

interface Props {
    name: string;
}

const Home = (props: Props) => {
//   const [name, setName] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    setErrorMsg(false);
    props.name !== "" ? setRedirect(true) : setErrorMsg(true);
  };

  const message = "Name can't be blank";

  if (redirect) {
    <Redirect to={{ pathname: "/education", name: { props.name } }} />;
  }

  return (
    <div className="ui center aligned container">
      <div className="ui middle aligned container">
        <p>Hi there! Weclome to your education showcase!</p>
      </div>
      <div className="ui container">
        <p>Type your name and click "Enter" below to begin!</p>
        <input
          className="ui input"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <br />
      <button className="ui button" onSubmit={handleSubmit}>
        Enter
      </button>
      <br />
      {errorMsg && <ErrorMsg message={message} />}
    </div>
  );
};

export default Home;
