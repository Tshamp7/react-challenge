import React from "react";
interface EducationInt {
  name: string;
}

const Education = (props: EducationInt) => {
  return (
    <div className="ui container">
      <p>Education page</p>
      <p>{props.name}</p>
    </div>
  );
};

export default Education;
