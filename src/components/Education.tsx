import React, { useState } from "react";
import {
  BoxTitle,
  EduDisplay,
  BasicContainer,
  ButtonContainer,
  EduSideBar,
  Banner,
} from "../styles/styleComponents";
import EduDisplayDetail, { EducationItem } from "./EduDisplayDetail";
import Modal from "react-modal";
import AddEduForm from "./AddEduForm";
import ShowwcaseUni from "./ShowwcaseUni";

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
  const [selectedItem, setSelected] = useState({
    title: "",
    institution: "",
    start: "",
    end: "",
    details: "",
  });
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
    <BasicContainer>
      <Banner>
        <BoxTitle>{`Welcome to ${name}'s education page`}</BoxTitle>
        <BasicContainer>
          <ButtonContainer>
            <button
              className="ui button"
              onClick={openModal}
              style={{
                backgroundColor: "#646DF6",
                color: "white",
                borderRadius: "50px",
              }}
            >
              Add New Education
            </button>
          </ButtonContainer>
          <br />
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
          >
            <AddEduForm addEduItem={addEduItem} closeModal={closeModal} />
          </Modal>
        </BasicContainer>
      </Banner>
      <BasicContainer row>
        <EduSideBar>
          <ShowwcaseUni eduList={eduList} setSelected={setSelected} />
        </EduSideBar>
        <EduDisplay>
          {eduList.length === 0 ? (
            "Click 'Add New Education' To Get Started!"
          ) : (
            <EduDisplayDetail
              start={selectedItem.start || eduList[0].start}
              end={selectedItem.end || eduList[0].end}
              title={selectedItem.title || eduList[0].title}
              institution={selectedItem.institution || eduList[0].institution}
              details={selectedItem.details || eduList[0].details}
            />
          )}
        </EduDisplay>
      </BasicContainer>
    </BasicContainer>
  );
};

export default Education;
