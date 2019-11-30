import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const ButtonBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 50px;
  justify-content: flex-end;
  width: 100%;
`;
const NavigationButton = styled(Link)`
  text-decoration: none;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => props.theme.default.red};
  margin: 15px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);

  animation: pulse 1.5s infinite;
  @keyframes pulse {
    from {
      transform: scale3d(1, 1, 1);
    }

    50% {
      transform: scale3d(1.1, 1.1, 1.1);
    }

    to {
      transform: scale3d(1, 1, 1);
    }
  }
`;

const ButtonSvg = styled.svg`
  width: 40px;
  height: 40px;
  margin: 14px;
`;

export default function AddTaskButton() {
  return (
    <ButtonBox>
      <NavigationButton to="/new">
        <ButtonSvg>
          <svg width="32" height="32" viewBox="0 0 24 24" fill="#F5F6FA">
            <path fill="none" d="M0 0h24v24H0V0z" />
            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
          </svg>
        </ButtonSvg>
      </NavigationButton>
    </ButtonBox>
  );
}
