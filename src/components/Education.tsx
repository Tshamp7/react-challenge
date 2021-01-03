import React, { useState } from "react";
import {
  Container,
  Box,
  BoxTitle,
  EduSideBar,
  EduDisplay,
  BasicContainer,
} from "../styles/styleComponents";
import EduDisplayDetail, { EducationItem } from "./EduDisplayDetail";
import Modal from "react-modal";

interface EducationInt {
  name: string;
}

const Education = ({ name }: EducationInt) => {
  const [eduList, setEduList] = useState<EducationItem[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <Container>
      <BasicContainer>
        <BasicContainer>
          <BoxTitle>{`Welcome to ${name}'s education page`}</BoxTitle>
          <button className="ui button">Add new education</button>
        </BasicContainer>
        <BasicContainer row>
          <EduSideBar>
            <BoxTitle>Showwcase University</BoxTitle>
          </EduSideBar>
          <EduDisplay>
            {eduList.length === 0 ? (
              "Select 'Add new education' to get started!"
            ) : (
              <EduDisplayDetail {...eduList[0]} />
            )}
          </EduDisplay>
        </BasicContainer>
      </BasicContainer>
    </Container>
  );
};

export default Education;
