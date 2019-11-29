import React from "react";
import styled from "@emotion/styled";

const HeaderBox = styled.div`
  width: 100%;
  height: 100px;
  text-align: center;
  padding: 15px;
  background-color: ${props => props.theme.default.primary};
`;
const Logo = styled.h1`
  color: ${props => props.theme.default.text};
  text-shadow: 3px -1px 1px rgba(91, 26, 9, 1);
  animation: pulse 2.5s infinite;
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.05, 1.05, 1.05);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
`;

export default function Header() {
  return (
    <HeaderBox>
      <Logo>WorkAgile</Logo>
    </HeaderBox>
  );
}
