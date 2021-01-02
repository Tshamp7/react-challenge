import React, { useState } from "react";
import { Container, Box, BoxTitle, BoxText } from "../styles/styleComponents";
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
      <Container>
        <BoxTitle>Hi there! Weclome to your education showcase!</BoxTitle>
        <Box>
          <form onSubmit={(e) => handleSubmit(e)}>
            <BoxText>Type your name and click "Enter" below to begin!</BoxText>
            <div className="ui input">
              <input
                type="text"
                value={input}
                placeholder="Your name here"
                onChange={(e) => setInput(e.target.value)}
              />
            </div>
            <br />
            <br />
            <input className="ui button" type="submit" value="Enter" />
          </form>
        </Box>
        <br />
        {errorMsg ? <ErrorMsg message="Name cant be blank" /> : null}
      </Container>
    );
  }
};

export default Home;
