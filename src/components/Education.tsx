import React, { useState } from "react";
import { useSelector } from "react-redux";
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
import { SelectedItemState } from "../redux/types";

interface Props {
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

const Education = ({ name }: Props) => {
  const state = useSelector((state: SelectedItemState) => {
    return { selected: state.selected };
  });

  const [eduList, setEduList] = useState<EducationItem[]>([]);
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
          <ShowwcaseUni eduList={eduList} />
        </EduSideBar>
        <EduDisplay>
          {eduList.length === 0 ? (
            "Click 'Add New Education' To Get Started!"
          ) : (
            <EduDisplayDetail
              start={state.selected.start || eduList[0].start}
              end={state.selected.end || eduList[0].end}
              title={state.selected.title || eduList[0].title}
              institution={state.selected.institution || eduList[0].institution}
              details={state.selected.details || eduList[0].details}
            />
          )}
        </EduDisplay>
      </BasicContainer>
    </BasicContainer>
  );
};

export default Education;
