import React from "react";
import styled from "@emotion/styled";

const Container = styled.article`
  display: flex;
  justify-content: space-between;
  background-color: ${props => props.theme.default.background};
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
