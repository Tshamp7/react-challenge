import React, { useState } from "react";
import {
  Container,
  BoxTitle,
  EduSideBar,
  EduDisplay,
  BasicContainer,
} from "../styles/styleComponents";
import EduDisplayDetail, { EducationItem } from "./EduDisplayDetail";
import Modal from "react-modal";
import AddEduForm from "./AddEduForm";

interface Name {
  name: string;
}

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const Education = ({ name }: Name) => {
  const [eduList, setEduList] = useState<EducationItem[]>([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  const addEduItem = (educationItem: EducationItem) => {
    setEduList([...eduList, educationItem]);
  };

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
          <div>
            <button className="ui button" onClick={openModal}>
              Add new education
            </button>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <AddEduForm addEduItem={addEduItem} />
            </Modal>
          </div>
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
