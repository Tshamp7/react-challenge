import React, { useState, useRef } from "react";
import { BasicContainer, Form, BoxTitle } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import ErrorMsg from "./ErrorMsg";
import axios, { CancelToken } from "axios";
import SearchResults from "./SearchResults";
import { setEduItem } from "../redux/actions";
import { useDispatch } from "react-redux";
import _ from "lodash";

interface Props {
  closeModal: () => void;
}

const AddEduForm = (props: Props) => {
  const { closeModal } = props;
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
  const [institution, setInst] = useState<any>("");
  const [query, setQuery] = useState<any>("");
  const [results, setResults] = useState(defaultResult);
  const [start, setStart] = useState<string>("");
  const [end, setEnd] = useState<string>("");
  const [details, setDetails] = useState<string>("");

  const [showError, setShowError] = useState(false);

  const getResults = () => {
    setQuery(institution);
    axios.get(`${API_URL}?name=${query}`).then((res) => {
      setResults(res.data);
    });
  };

  const handleChange = (e: any) => {
    setInst(e.target.value);
    getResults();
  };

  const dispatch = useDispatch();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Form validation to ensure all fields are filled out
    const fields = [title, institution || query, start, end, details];

    if (fields.some((item) => item === "")) {
      return setShowError(true);
    }

    const eduItem: EducationItem = {
      title,
      institution: institution || query, // allows user to use their typed in entry in place of clicking a school returned from the API call.
      start,
      end,
      details,
    };
    dispatch(setEduItem(eduItem));
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
            value={institution}
            ref={inputEl}
            placeholder={institution || "Search for Institution"}
            onChange={(e) => handleChange(e)}
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
