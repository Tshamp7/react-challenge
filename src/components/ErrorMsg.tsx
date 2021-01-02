import React from "react";

interface ErrorInt {
  message: string;
}

const ErrorMsg = (props: ErrorInt) => {
  return (
    <div className="ui negative message">
      <i className="clos icon"></i>
      <div className="header">There's a problem!</div>
      <p>{props.message}</p>
    </div>
  );
};

export default ErrorMsg;
