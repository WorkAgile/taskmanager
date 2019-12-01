import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 95%;
  height: 100%;
  padding: 10px;
  margin: 20px auto;
  background: #fff;
  border: 20px;
  color: #353b48;
  font-size: 1.2rem;
  font-weight: 700;
`;

const Title = styled.div`
  flex-grow: 1;
  padding: 3px;
  border-radius: 5px;
  &:hover,
  &:active {
    color: #e84118;
    cursor: pointer;
    transition: 0.4s;
  }
`;

const StatusBox = styled.div`
  font-size: 1rem;
  align-items: center;
  align-content: center;
`;

const Remove = styled.div`
  height: 20px;
  width: 20px;
  background-color: #44bd32;
  margin-left: 10px;
  border-radius: 15px;
  &:hover,
  &:active {
    background-color: #e84118;
    #e84118cursor: pointer;
    transition: 0.4s;
  }
`;

export default function Task({ id, status, title, detail }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [remove, setRemove] = React.useState();

  const Detail = styled.div`
    display: ${isClicked ? "block" : "none"};
    height: 100%;
    width: 90%;
    margin: 0px auto;
    color: #353b48;
    font-size: 0.9rem;
    font-weight: 500;
    background: transparent;
  `;

  async function handleRemove() {
    await fetch(`http://localhost:1234/tasks/${remove}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    });
  }

  React.useEffect(() => {
    handleRemove();
  }, [remove]);

  return (
    <>
      <Container>
        <Title onClick={() => setIsClicked(!isClicked)}>{title}</Title>
        <StatusBox>{status}</StatusBox>
        <Remove
          onClick={() => {
            setRemove(id);
            window.location.reload();
          }}
        >
          <svg width="20" height="20" fill="#fff" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Remove>
      </Container>
      <Detail>{detail}</Detail>
    </>
  );
}
