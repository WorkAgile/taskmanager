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
  return (
    <Form>
      <TitleInput />

      <StatusInput />
      <DetailInput rows="15" />
      <SubmitButton>Add Task</SubmitButton>
    </Form>
  );
}
