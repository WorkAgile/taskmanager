import React from "react";
import styled from "@emotion/styled";

const Container = styled.article`
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
  text-shadow: 1px 1px 1px rgba(91, 26, 9, 1);
`;

function Task({ status, title }) {
  return (
    <Container>
      <div>{title}</div>
      <div>{status}</div>
    </Container>
  );
}

export default Task;
