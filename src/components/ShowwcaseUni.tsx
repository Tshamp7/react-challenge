import React from "react";
import { BasicContainer, BoxTitle, Content } from "../styles/styleComponents";
import { EducationItem } from "./EduDisplayDetail";
import UniversityItem from "./UniversityItem";

interface Props {
  eduList: EducationItem[];
  setSelected: Function;
}

const ShowwcaseUni = ({ eduList, setSelected }: Props) => {
  const eduItems = eduList.reverse().map((item) => {
    return (
      <UniversityItem
        key={item.institution}
        eduItem={item}
        setSelected={setSelected}
      />
    );
  });
  return (
    <BasicContainer start="start">
      <Content border>
        <BoxTitle className="header">Showwcase University</BoxTitle>
        {eduList.length > 0 ? (
          <p style={{ font: "inherit", alignSelf: "center" }}>
            Select One To See More!
          </p>
        ) : null}
      </Content>
      <Content start="true">
        <ul style={{ listStyle: "none", paddingLeft: "0" }}>
          {eduItems.reverse()}
        </ul>
      </Content>
    </BasicContainer>
  );
};

export default ShowwcaseUni;
