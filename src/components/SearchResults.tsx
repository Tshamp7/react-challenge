import React from "react";

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

  const firstTen = suggestions.slice(0, 3);

  const options = firstTen.map((result) => (
    <div className="ui card" key={result.name}>
      <li
        style={{ textAlign: "left", cursor: "pointer" }}
        onClick={() => handleClick(result.name)}
        className="content"
      >
        {result.name}
      </li>
    </div>
  ));

  return (
    <div className="content">
      <ul style={{ listStyleType: "none", paddingLeft: "0" }}>{options}</ul>
    </div>
  );
};

export default SearchResults;
