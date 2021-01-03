import React, { useEffect, useState } from "react";
import {
  Container,
  BoxTitle,
  EduSideBar,
  EduDisplay,
  BasicContainer,
  ButtonContainer,
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
  const [selectedItem, setSelected] = useState({});
  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

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
          <BasicContainer>
            <ButtonContainer>
              <button className="ui button" onClick={openModal}>
                Add new education
              </button>
            </ButtonContainer>

            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={customStyles}
            >
              <AddEduForm addEduItem={addEduItem} closeModal={closeModal} />
            </Modal>
          </BasicContainer>
        </BasicContainer>
        <BasicContainer row>
          <EduSideBar>
            <BoxTitle>Showwcase University</BoxTitle>
          </EduSideBar>
          <EduDisplay>
            {eduList.length === 0 ? (
              "Click Add Education"
            ) : (
              <EduDisplayDetail
                start={eduList[0].start}
                end={eduList[0].end}
                title={eduList[0].title}
                institution={eduList[0].institution}
                details={eduList[0].details}
              />
            )}
          </EduDisplay>
        </BasicContainer>
      </BasicContainer>
    </Container>
  );
};

export default Education;
