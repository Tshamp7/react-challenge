import React from "react";

interface Error {
  message: string;
}

const ErrorMsg = (message: Error) => {
  return (
    <div className="ui negative message">
      <i className="clos icon"></i>
      <div className="header">There's a problem!</div>
      <p>{message}</p>
    </div>
  );
};

export default ErrorMsg;
