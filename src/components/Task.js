import React from "react";
import styled from "@emotion/styled";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  padding: 3px;
  border-radius: 5px;

  &:hover {
    font-weight: 900;
    padding: 3px;
    cursor: pointer;
    background-color: ${props => props.theme.default.secondary};
  }
  &:active {
    border: 1px solid #44bd32;
    transition: 0.3s;
    background-color: ${props => props.theme.default.secondary};
  }
`;

const Remove = styled.div`
  height: 25px;
  width: 25px;
`;

export default function Task({ id, status, title, detail }) {
  const [isClicked, setIsClicked] = React.useState(false);
  const [remove, setRemove] = React.useState();

  const Detail = styled.div`
    display: ${isClicked ? "block" : "none"};
    height: 100%;
    width: 98%;
    width: 95%;
    height: 100%;
    margin: 0px auto;
    background: #fff;
    color: #353b48;
    font-size: 1rem;
    font-weight: 800;
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
        <div>{status}</div>
        <Remove
          onClick={() => {
            setRemove(id);
            window.location.reload();
          }}
        >
          <svg width="25" height="25" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
            <path d="M0 0h24v24H0z" fill="none" />
          </svg>
        </Remove>
      </Container>
      <Detail>{detail}</Detail>
    </>
  );
}
