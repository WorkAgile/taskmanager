import React from "react";
import styled from "@emotion/styled";

const FooterFilter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const ButtonActive = styled.button`
  flex-grow: 1;
  background-color: #44bd32;
  color: #f5f6fa;
  font-size: 1rem;
  outline: none;
`;

const ButtonProgess = styled.button`
  flex-grow: 1;
  background-color: #e1b12c;
  color: #f5f6fa;
  font-size: 1rem;
  outline: none;
`;

const ButtonComplete = styled.button`
  flex-grow: 1;
  background-color: #7f8fa6;
  color: #f5f6fa;
  font-size: 1rem;
  outline: none;
`;

export default function Footer() {
  return (
    <FooterFilter>
      <ButtonActive>active</ButtonActive>
      <ButtonProgess>in progress</ButtonProgess>
      <ButtonComplete>completed</ButtonComplete>
    </FooterFilter>
  );
}
