import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-top: 30px;
`;

const TitleInput = styled.input`
  width: 90%;
  margin: 10px;
  height: 40px;
  font-size: 1rem;
  padding: 20px;
  border: 1px solid #353b48;
  border-radius: 5px;
  outline: none;
  &:hover,
  &:active {
    border: 1px solid #44bd32;
    transition: 0.3s;
  }
`;

const DetailInput = styled.textarea`
  width: 90%;
  padding: 20px;
  margin: 10px;
  font-size: 1rem;
  border: 1px solid #353b48;
  border-radius: 5px;
  outline: none;
  &:hover,
  &:active {
    border: 1px solid #44bd32;
    transition: 0.3s;
  }
`;

const StatusInput = styled.fieldset`
  display: flex;
  flex-flow: column;
  width: 90%;
  border: none;
`;

const Label = styled.label`
  font-size: 0.7rem;
  margin: 10px;
`;

const SubmitButton = styled.button`
  width: 90%;
  height: 40px;
  margin-top: 30px;
  font-size: 1rem;
  border: 1px solid #353b48;
  border-radius: 5px;
  outline: none;
  background-color: ${props => props.theme.default.text};
  &:hover,
  &:active {
    border: 1px solid #44bd32;
    transition: 0.3s;
  }
`;

export default function NewTask() {
  const [title, setTitle] = React.useState("");
  const [status, setStatus] = React.useState("");
  const [detail, setDetail] = React.useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    await fetch("http://localhost:1234/tasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ title, status, detail })
    });

    setTitle("");
    setDetail("");
    setStatus("");
  }
  return (
    <Form onSubmit={handleSubmit}>
      <TitleInput
        type="text"
        placeholder="Name your task"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <StatusInput onChange={event => setStatus(event.target.value)}>
        <Label>
          <input type="radio" name="status" value="active" checked="yes" />
          ACTIVE
        </Label>
        <Label>
          <input type="radio" name="status" value="progress" />
          IN PROGRESS
        </Label>
        <Label>
          <input type="radio" name="status" value="completed" />
          COMPLETED
        </Label>
      </StatusInput>
      <DetailInput
        rows="15"
        type="text"
        placeholder="Add description for your task"
        value={detail}
        onChange={event => setDetail(event.target.value)}
      />
      <SubmitButton>ADD TASK</SubmitButton>
    </Form>
  );
}
