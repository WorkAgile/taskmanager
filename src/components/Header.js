import React from "react";
import styled from "@emotion/styled";

const HeaderBox = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  background-color: ${props => props.theme.default.text};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.2);
`;
const Logo = styled.h1`
  color: ${props => props.theme.default.primary};
  font-weight: 900;
  font-family: "Roboto", sans-serif;
`;

export default function Header() {
  return (
    <HeaderBox>
      <Logo>Work Agile</Logo>
    </HeaderBox>
  );
}
