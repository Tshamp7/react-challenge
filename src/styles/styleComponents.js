import styled from "styled-components";
import px2vw from "../utils/px2vw";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: ${px2vw(32)};
  height: 100%;
  max-width: 100%;

  @media (min-width: 1024px) {
    flex-wrap: nowrap;
  }
`;

export const Box = styled.div`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) =>
    props.spaceEven ? "space-evenly" : "flex-start"};
  align-items: center;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${(props) => props.bgColor};
  height: auto;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
  }
`;

export const Form = styled.form`
  display: flex;
  width: ${px2vw(320, 320)};
  min-height: ${px2vw(200, 320)};
  flex-direction: column;
  align-items: center;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${(props) => props.bgColor};
  height: 100% @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }
`;

export const BoxTitle = styled.h3`
  color: #333;
  font-size: 2rem;
  cursor: default;
  text-align: ${(props) => (props.txtAlign ? `${props.txtAlign}` : "center")};
  @media (min-width: 1024px) {
    font-size: 1.5rem;
  }
`;

export const BoxText = styled.p`
  margin-top: ${px2vw(20)};
  color: #666;
  cursor: ${(props) => (props.cursor ? "pointer;" : "default;")}
  text-align: ${(props) => (props.txtAlign ? `${props.txtAlign}` : "center")};
  font-size: 1.5rem;

  @media (min-width: 1024px) {
    font-size: 1rem;
  }
`;

export const EduSideBar = styled.div`
  display: flex;
  width: 10%;
  border: ${(props) => (props.border ? "solid 1px lightgray;" : "none;")}
  border-radius: ${(props) => (props.border ? "10px;" : "none;")}
  min-height: ${px2vw(200, 320)};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
  padding-top: ${px2vw(20)};
  padding-bottom: ${px2vw(20)};

  margin: ${px2vw(20)};
  background-color: ${(props) => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: ${px2vw(320, 768)};
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: ${px2vw(500)};
    min-height: ${px2vw(300)};
    height: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const EduDisplay = styled.div`
  display: flex;
  border: solid 1px lightgray;
  border-radius: 10px;
  transition: 0.3s;
  min-height: ${px2vw(200, 320)};
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  align-items: center;
  padding: ${px2vw(20)};
  margin: ${px2vw(20)};
  background-color: ${(props) => props.bgColor};
  height: 100%;

  @media (min-width: 768px) {
    width: 90%;
    min-height: ${px2vw(200, 768)};
    height: 100%;
  }

  @media (min-width: 1024px) {
    width: 90%;
    min-height: ${px2vw(300)};
    height: 100%;
  }

  @media (max-width: 425px) {
    width: 100%;
  }
`;

export const BasicContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.row ? "row" : "column")};
  justify-content: ${(props) => (props.start ? "flex-start" : "center")};
  align-self: center;
  width: 100%;
  height: auto;

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const ButtonContainer = styled.div`
  align-self: center;
`;

export const Input = styled.div`
  font-size: 16px;
  font-size: max(16px, 1 em);
  width: 350px;
  font-family: inherit;
  padding: 0.25em 0.5em;
  background-color: #fff;
  border: 2px solid lightgray;
  border-radius: 6px;
`;

export const Banner = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 7rem;
`;

export const Content = styled.div`
display: flex;
width: 100%;
height: 100%;
flex-direction: column;
align-self: center;
padding: ${(props) =>
  props.noTopPad ? "0px 10px 10px 10px;" : "10px 10px 10px 10px;"}
justify-content: ${(props) => (props.start ? "flex-start;" : "center;")}
border-bottom: ${(props) => (props.border ? "solid 1px lightgray;" : "none;")}}
`;
