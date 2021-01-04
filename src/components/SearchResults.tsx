import React from "react";
import { BoxText } from "../styles/styleComponents";
import Select from "react-select";

export interface Institution {
  web_page: string;
  country: string;
  domain: string;
  name: string;
}

export interface SuggestionProps {
  suggestions: Institution[];
  setQuery: Function;
  setInst: Function;
}

const SearchResults = ({ suggestions, setQuery, setInst }: SuggestionProps) => {
  const handleClick = (input: string) => {
    setInst(input);
    setQuery("");
  };

  const firstTen = suggestions.slice(0, 5);

  const options = firstTen.map((result) => (
    <li
      style={{ textAlign: "left" }}
      key={result.name}
      onClick={() => handleClick(result.name)}
    >
      {result.name}
    </li>
  ));

  return (
    <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
      <BoxText>{options}</BoxText>
    </ul>
  );
};

export default SearchResults;
