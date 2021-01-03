import React, { useState, useEffect } from "react";
import { BasicContainer, BoxText, BoxTitle } from "../styles/styleComponents";

export interface EducationItem {
  title: string;
  institution: string;
  start: string;
  end: string;
  details: string;
}

const EduDisplayDetail = ({
  title,
  institution,
  start,
  end,
  details,
}: EducationItem) => {
  return (
    <BasicContainer>
      <BoxTitle>{title}</BoxTitle>
      <BoxText>{institution}</BoxText>
      <BoxText>{details}</BoxText>
    </BasicContainer>
  );
};

export default EduDisplayDetail;
