import React from "react";
import styled from "@emotion/styled";

const Container = styled.button`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 98%;
  height: 50px;
  padding: 10px;
  margin: 5px auto;
  background: #7f8fa6;
  border-top-right-radius: 15px;
  border-bottom-left-radius: 15px;
  color: ${props => props.theme.default.text};
  font-size: 1rem;
  font-weight: 700;
`;

function Task({ status, title, detail }) {
  const [isClicked, setIsClicked] = React.useState(false);

  const Detail = styled.div`
    visibility: ${isClicked ? "visible" : "hidden"};
    height: 50px;
    width: 98%;
    padding: 10px;
    background: #7f8fa6;
  `;

  return (
    <>
      <Container onClick={() => setIsClicked(!isClicked)}>
        <div>{title}</div>
        <div>{status}</div>
      </Container>
      <Detail>{detail}</Detail>
    </>
  );
}

export default Task;
