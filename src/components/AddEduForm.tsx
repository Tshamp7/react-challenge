import React, { useState } from "react";
import { BasicContainer, Form, BoxTitle } from "../styles/styleComponents";
import ErrorMsg from "./ErrorMsg";

interface Props {
  addEduItem: Function;
}

const AddEduForm = (props: Props) => {
  const [title, setTitle] = useState("");
  const [institution, setInst] = useState("");
  const [start, setStart] = useState("");
  const [end, setEnd] = useState("");
  const [details, setDetails] = useState("");

  const [showError, setShowError] = useState(false);

  const { addEduItem } = props;

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const fields = [title, institution, start, end, details];

    if (fields.some((item) => item === "")) {
      return setShowError(true);
    }

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
    <BasicContainer>
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
        <br />
        <div className="ui input">
          <input
            type="text"
            value={institution}
            placeholder="Institution Name"
            onChange={(e) => setInst(e.target.value)}
          />
        </div>
        <br />
        <div className="ui input">
          <input
            type="text"
            value={start}
            placeholder="Start Date"
            onChange={(e) => setStart(e.target.value)}
          />
        </div>
        <br />
        <div className="ui input">
          <input
            type="text"
            value={end}
            placeholder="End Date"
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>
        <br />
        <div className="ui input">
          <input
            type="text"
            value={details}
            placeholder="Education Details"
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <br />

        <input className="ui button" type="submit" value="Enter" />
        <br />
        {showError ? (
          <ErrorMsg message="Please Ensure All Fields Are Filled Out!" />
        ) : null}
      </Form>
    </BasicContainer>
  );
};

export default AddEduForm;
