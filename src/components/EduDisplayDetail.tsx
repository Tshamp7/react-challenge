import React from "react";
import {
  BasicContainer,
  BoxText,
  BoxTitle,
  Content,
} from "../styles/styleComponents";

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
      <Content border="true" start="true">
        <BoxTitle txtAlign="left">{title}</BoxTitle>
      </Content>

      <BoxText txtAlign="left">{`Institution Name: ${institution}`}</BoxText>
      <BoxText txtAlign="left">{`Attendance: ${start} - ${end}`}</BoxText>
      <BoxText txtAlign="left">{`Details: ${details}`}</BoxText>
    </BasicContainer>
  );
};

export default EduDisplayDetail;
