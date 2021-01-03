import React, { useState } from "react";
import { Container, Form, BoxTitle } from "../styles/styleComponents";

interface Props {
  addEduItem: Function;
}

const AddEduForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [institution, setInst] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [details, setDetails] = useState("");

  const { addEduItem } = props;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const eduItem = [
      {
        title,
        institution,
        start,
        end,
        details,
      },
    ];
    addEduItem(eduItem);
  };

  return (
    <Container>
      <BoxTitle>Add New Education</BoxTitle>
      <Form onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
        <div className="ui input">
          <input
            type="text"
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="ui input">
          <input
            type="text"
            value={institution}
            placeholder="Institution Name"
            onChange={(e) => setInst(e.target.value)}
          />
        </div>
        <div className="ui input">
          <input
            type="text"
            value={start}
            placeholder="Start Date"
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <div className="ui input">
          <input
            type="text"
            value={end}
            placeholder="End Date"
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <div className="ui input">
          <input
            type="text"
            value={details}
            placeholder="Education Details"
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
      </Form>
    </Container>
  );
};

export default AddEduForm;
