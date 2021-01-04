import React, { useState, useRef } from "react";
import { BasicContainer, Form, BoxTitle } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";
import SearchResults from "./SearchResults";

interface Props {
  addEduItem: (item: EducationItem) => void;
  closeModal: () => void;
}

const AddEduForm = (props: Props) => {
  const API_URL = "http://universities.hipolabs.com/search";

  const inputEl = useRef<HTMLInputElement>(null);

  const defaultResult = [
    {
      web_page: "",
      country: "",
      domain: "",
      name: "",
    },
  ];

  const [title, setTitle] = useState<string>("");
  const [institution, setInst] = useState<string>("");
  const [query, setQuery] = useState<string>("");
  const [results, setResults] = useState(defaultResult);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const [showError, setShowError] = useState(false);

  const { addEduItem, closeModal } = props;

  const getResults = () => {
    axios.get(`${API_URL}?name=${query}`).then((res) => {
      const { data } = res;
      setResults(data);
    });
  };

  const handleInputChange = () => {
    if (inputEl && inputEl.current) {
      setQuery(inputEl.current.value);
      getResults();
    }
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    const fields = [title, institution, start, end, details];

    if (fields.some((item) => item === "")) {
      return setShowError(true);
    }

    const eduItem: EducationItem = {
      title,
      institution,
      start,
      end,
      details,
    };
    addEduItem(eduItem);
    closeModal();
  };

  return (
    <BasicContainer>
      <BoxTitle>Add New Education</BoxTitle>
      <Form onSubmit={(event: React.FormEvent) => handleSubmit(event)}>
        <input
          type="text"
          style={{ width: "300px" }}
          value={title}
          placeholder="Title"
          onChange={(e) => setTitle(e.target.value)}
        />

        <br />

        <input
          type="text"
          style={{ width: "300px" }}
          value={query}
          ref={inputEl}
          placeholder={institution || "Search for Institution"}
          onChange={handleInputChange}
        />

        <br />
        {results.length > 0 && query.length > 0 ? (
          <div className="ui input" style={{ width: "300px" }}>
            <SearchResults
              suggestions={results}
              setQuery={setQuery}
              setInst={setInst}
            />
          </div>
        ) : null}

        <br />

        <input
          type="date"
          style={{ width: "300px" }}
          value={start}
          placeholder="Start Date"
          onChange={(e) => setStart(e.target.value)}
        />

        <br />

        <input
          type="date"
          style={{ width: "300px" }}
          value={end}
          placeholder="End Date"
          onChange={(e) => setEnd(e.target.value)}
        />

        <br />

        <input
          type="text"
          style={{ width: "300px" }}
          value={details}
          placeholder="Education Details"
          onChange={(e) => setDetails(e.target.value)}
        />

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
