import React, { useState } from "react";
import {
  Container,
  Box,
  BoxTitle,
  BoxText,
  Form,
} from "../styles/styleComponents";
import Education from "./Education";
import ErrorMsg from "./ErrorMsg";

const Home = () => {
  const [input, setInput] = useState("");
  const [user, setUser] = useState(false);
  const [errorMsg, setErrorMsg] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    input !== "" ? setUser(true) : setErrorMsg(true);
  };

  if (user) {
    return (
      <Container>
        <Education name={input} />
      </Container>
    );
  } else {
    return (
      <Container>
        <Box>
          <BoxTitle>Hi There! Weclome To Your Education Showcase!</BoxTitle>

          <Form onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
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
            <input
              className="ui button"
              type="submit"
              value="Enter"
              style={{
                backgroundColor: "#646DF6",
                color: "white",
                borderRadius: "50px",
              }}
            />
            {errorMsg ? <ErrorMsg message="Name cant be blank" /> : null}
          </Form>
        </Box>
      </Container>
    );
  }
};

export default Home;
