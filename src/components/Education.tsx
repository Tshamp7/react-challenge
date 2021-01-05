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
import EduDisplayDetail from "./EduDisplayDetail";
import Modal from "react-modal";
import AddEduForm from "./AddEduForm";
import ShowwcaseUni from "./ShowwcaseUni";
import { EducationItem } from "./EduDisplayDetail";

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

interface SelectedState {
  selectedReducer: { selected: EducationItem };
}

interface EduListState {
  educationListReducer: { eduList: EducationItem[] };
}

const Education = ({ name }: Props) => {
  const selectedState = useSelector((state: SelectedState) => {
    return state.selectedReducer.selected;
  });

  const eduListState = useSelector((state: EduListState) => {
    return state.educationListReducer.eduList;
  });

  const [modalIsOpen, setIsOpen] = useState(false);

  Modal.setAppElement("#root");

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
            <AddEduForm closeModal={closeModal} />
          </Modal>
        </BasicContainer>
      </Banner>
      <BasicContainer row>
        <EduSideBar border>
          <ShowwcaseUni eduList={eduListState} />
        </EduSideBar>
        <EduDisplay>
          {eduListState.length === 0 ? (
            "Click 'Add New Education' To Get Started!"
          ) : (
            <EduDisplayDetail
              start={selectedState.start || eduListState[0].start}
              end={selectedState.end || eduListState[0].end}
              title={selectedState.title || eduListState[0].title}
              institution={
                selectedState.institution || eduListState[0].institution
              }
              details={selectedState.details || eduListState[0].details}
            />
          )}
        </EduDisplay>
      </BasicContainer>
    </BasicContainer>
  );
};

export default Education;
