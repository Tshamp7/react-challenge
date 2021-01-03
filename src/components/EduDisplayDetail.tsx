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
    <BasicContainer start="true">
      <BoxTitle txtAlign="left">{title}</BoxTitle>
      <BoxText txtAlign="left">{`Institution Name: ${institution}`}</BoxText>
      <BoxText txtAlign="left">{`Attendance: ${start} - ${end}`}</BoxText>
      <BoxText txtAlign="left">{`Details: ${details}`}</BoxText>
    </BasicContainer>
  );
};

export default EduDisplayDetail;
