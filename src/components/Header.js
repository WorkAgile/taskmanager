import React from "react";
import styled from "@emotion/styled";

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 15px;
  background-color: ${props => props.theme.default.primary};
`;

export default function Header() {
  return (
    <HeaderBox>
      <h2>WorkAgile</h2>
    </HeaderBox>
  );
}
