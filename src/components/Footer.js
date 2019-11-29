import React from "react";
import styled from "@emotion/styled";

const FooterFilter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const ButtonActive = styled.button`
  flex-grow: 1;
`;

const ButtonProgess = styled.button`
  flex-grow: 1;
`;

const ButtonComplete = styled.button`
  flex-grow: 1;
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
