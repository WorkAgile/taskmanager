import React from "react";
import styled from "@emotion/styled";

const Title = styled.div`
  flex-grow: 1;
  padding: 3px;
  border-radius: 5px;
  &:hover,
  &:active {
    color: #e1b12c;
    cursor: pointer;
    transition: 0.4s;
  }
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
    cursor: pointer;
    transition: 0.4s;
  }
`;

export default function Task({ idValue, status, title, detail, onClick }) {
  const [isClicked, setIsClicked] = React.useState(false);

  const [statusValue, setStatusValue] = React.useState(status);
  const [id, setId] = React.useState(idValue);

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
    border-radius: 5px;
    border: ${statusValue === "active" ? "#44bd32" : "none"} 1px solid;
    border: ${statusValue === "progress" ? "#e1b12c" : "none"} 1px solid;
    border: ${statusValue === "completed" ? "#7f8fa6" : "none"} 1px solid;
    box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  `;

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

  async function handleStatus(value) {
    setId(idValue);
    setStatusValue(value);
    await fetch(`http://localhost:1234/tasks/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        status: value
      })
    });
  }

  return (
    <>
      <Container>
        <Title onClick={() => setIsClicked(!isClicked)}>{title}</Title>
        <select
          style={{
            color: "#353B48",
            border: "0px",
            outline: "none",
            background: "#F5F6FA",
            fontSize: "16px"
          }}
          value={statusValue}
          onChange={event => {
            handleStatus(event.target.value, idValue);
          }}
        >
          <option id="1" value="active">
            active
          </option>
          <option id="1" value="progress" selceted={status}>
            in progress
          </option>
          <option id="1" value="completed" selceted={status}>
            completed
          </option>
        </select>
        <Remove onClick={onClick}>
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
