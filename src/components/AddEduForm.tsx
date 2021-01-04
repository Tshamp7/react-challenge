import React, { useState, useRef } from "react";
import { BasicContainer, Form, BoxTitle } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import ErrorMsg from "./ErrorMsg";
import axios from "axios";
import SearchResults from "./SearchResults";
import Select from "react-select";

interface Props {
  addEduItem: (item: EducationItem) => void;
  closeModal: () => void;
}

const AddEduForm = (props: Props) => {
  const { addEduItem, closeModal } = props;
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
    // Form validation to ensure all fields are filled out
    const fields = [title, institution || query, start, end, details];

    if (fields.some((item) => item === "")) {
      return setShowError(true);
    }

    const eduItem: EducationItem = {
      title,
      institution: institution || query,
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
        <div className="ui input">
          <input
            type="text"
            style={{ width: "300px" }}
            value={title}
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>

        <br />
        <div className="ui input">
          <input
            type="text"
            style={{ width: "300px" }}
            value={query}
            ref={inputEl}
            placeholder={institution || "Search for Institution"}
            onChange={handleInputChange}
          />
        </div>
        {results.length > 0 && query.length > 0 ? (
          <div className="ui card" style={{ width: "300px" }}>
            <SearchResults
              suggestions={results}
              setQuery={setQuery}
              setInst={setInst}
            />
          </div>
        ) : null}

        <br />
        <div className="ui input">
          <input
            type="date"
            style={{ width: "300px" }}
            value={start}
            placeholder="Start Date"
            onChange={(e) => setStart(e.target.value)}
          />
        </div>

        <br />
        <div className="ui input">
          <input
            type="date"
            style={{ width: "300px" }}
            value={end}
            placeholder="End Date"
            onChange={(e) => setEnd(e.target.value)}
          />
        </div>

        <br />
        <div className="ui input">
          <input
            className="ui input"
            type="text"
            style={{ width: "300px" }}
            value={details}
            placeholder="Education Details"
            onChange={(e) => setDetails(e.target.value)}
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
        <br />
        {showError ? (
          <ErrorMsg message="Please Ensure All Fields Are Filled Out!" />
        ) : null}
      </Form>
    </BasicContainer>
  );
};

export default AddEduForm;
