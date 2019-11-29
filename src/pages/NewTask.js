import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 90%;
  margin: 10px;
  height: 40px;
  font-size: 1rem;
  border-radius: 10px;
`;

const DetailInput = styled.textarea`
  width: 90%;
  padding: 10px;
  margin: 10px;
  border-radius: 20px;
`;

const StatusInput = styled.fieldset`
  display: flex;
  flex-flow: column;
  width: 90%;
  border: none;
`;

const Label = styled.label`
  font-size: 0.9rem;
  margin: 5px;
`;

const SubmitButton = styled.button`
  width: 80px;
  height: 40px;
  border-radius: 5px;
  background-color: ${props => props.theme.default.secondary};
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
        placeholder="What's you Task?"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <StatusInput onChange={event => setStatus(event.target.value)}>
        <Label>
          <input type="radio" name="status" value="active" />
          active
        </Label>
        <Label>
          <input type="radio" name="status" value="progress" />
          in-progress
        </Label>
        <Label>
          <input type="radio" name="status" value="completed" />
          completed
        </Label>
      </StatusInput>
      <DetailInput
        rows="15"
        type="text"
        placeholder="Add detailed Description!"
        value={detail}
        onChange={event => setDetail(event.target.value)}
      />
      <SubmitButton>Add Task</SubmitButton>
    </Form>
  );
}
