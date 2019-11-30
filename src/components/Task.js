import React from "react";
import styled from "@emotion/styled";

const Container = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 95%;
  height: 100%;
  padding: 10px;
  margin: 20px auto;
  background: #fff;
  border: 20px;
  color: #353b48;
  font-size: 1.2rem;
  font-weight: 700;
`;

function Task({ status, title, detail }) {
  const [isClicked, setIsClicked] = React.useState(false);

  const Detail = styled.div`
    visibility: ${isClicked ? "visible" : "hidden"};
    height: 100%;
    width: 98%;
    padding: 10px;
    background: transparent;
  `;

  return (
    <>
      <Container onClick={() => setIsClicked(!isClicked)}>
        <div>{title}</div>
        <div>{status}</div>
        <Detail>{detail}</Detail>
      </Container>
    </>
  );
}

export default Task;
