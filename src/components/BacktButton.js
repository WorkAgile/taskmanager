import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

const BackButtonBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 50px;
  justify-content: flex-end;
  width: 100%;
`;
const BackNavButton = styled(Link)`
  text-decoration: none;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${props => props.theme.default.red};
  margin: 15px;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.5);

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

export default function BackButton() {
  return (
    <BackButtonBox>
      <BackNavButton to="/">
        <ButtonSvg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"
              fill="#F5F6FA"
            />
          </svg>
        </ButtonSvg>
      </BackNavButton>
    </BackButtonBox>
  );
}
