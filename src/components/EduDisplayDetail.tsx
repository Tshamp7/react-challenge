import React from "react";
import {
  BasicContainer,
  BoxText,
  BoxTitle,
  Box,
} from "../styles/styleComponents";

export interface EducationItem {
  title: string;
  institution: string;
  start: string;
  end: string;
  details: string;
}

const EduDisplayDetail = (educationItem: EducationItem) => {
  const { title, institution, start, end, details } = educationItem;

  return (
    <BasicContainer>
      <BoxTitle>{title}</BoxTitle>
      <BoxText>{institution}</BoxText>
      <p>{`${start} - ${end}`}</p>
      <BoxText>{details}</BoxText>
    </BasicContainer>
  );
};

export default EduDisplayDetail;
