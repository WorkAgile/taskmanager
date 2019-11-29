import React from "react";
import styled from "@emotion/styled";

const Form = styled.form`
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const TitleInput = styled.input`
  width: 70%;
  margin: 10px;
`;

const DetailInput = styled.textarea`
  width: 70%;
  margin: 10px;
`;

const StatusInput = styled.input`
  width: 70%;
  margin: 10px;
`;

const SubmitButton = styled.button`
  width: 50px;
  height: 50px;
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
        placeholder="Whats you Task?"
        value={title}
        onChange={event => setTitle(event.target.value)}
      />
      <StatusInput
        type="text"
        placeholder="What Status?"
        value={status}
        onChange={event => setStatus(event.target.value)}
      />
      <DetailInput
        rows="15"
        type="text"
        placeholder="Add Detail Description?"
        value={detail}
        onChange={event => setDetail(event.target.value)}
      />
      <SubmitButton>Add Task</SubmitButton>
    </Form>
  );
}
