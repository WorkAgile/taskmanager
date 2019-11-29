import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const BackButtonBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 40px;
  justify-content: flex-end;
  width: 100%;
`;
const BackNavButton = styled(Link)`
  text-decoration: none;
  justify-content: center;
  align-items: center;
  align-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => props.theme.default.red};
  margin: 15px;
`;

export default function BackButton() {
  return (
    <BackButtonBox>
      <BackNavButton to="/">-</BackNavButton>
    </BackButtonBox>
  );
}
