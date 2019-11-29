import React from "react";
import styled from "@emotion/styled";
import Task from "../components/Task";
const FooterFilter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
`;

const ButtonActive = styled.button`
  flex-grow: 1;
  background-color: #44bd32;
  color: #f5f6fa;
  font-size: 1rem;
  outline: none;
`;

const ButtonAll = styled.button`
  flex-grow: 1;
  background-color: red;
  color: #f5f6fa;
  font-size: 1rem;
  outline: none;
`;

const ButtonProgess = styled.button`
  flex-grow: 1;
  background-color: #e1b12c;
  color: #f5f6fa;
  font-size: 1rem;
  outline: none;
`;

const ButtonComplete = styled.button`
  flex-grow: 1;
  background-color: #7f8fa6;
  color: #f5f6fa;
  font-size: 1rem;
  outline: none;
`;

export default function TaskList() {
  const [tasks, setTask] = React.useState([]);
  const [filter, setFilter] = React.useState("");

  async function fetchTasks() {
    const response = await fetch(`http://localhost:1234/tasks${filter}`);
    const newTask = await response.json();
    setTask(newTask);
  }

  React.useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div>
      {tasks.map(task => (
        <Task
          key={task.id}
          title={task.title}
          detail={task.detail}
          status={task.status}
        ></Task>
      ))}
      <FooterFilter>
        <ButtonActive
          onClick={() => {
            setFilter("/?status=active");
            fetchTasks();
          }}
        >
          active
        </ButtonActive>
        <ButtonProgess
          onClick={() => {
            setFilter("/?status=progress");
            fetchTasks();
          }}
        >
          in progress
        </ButtonProgess>
        <ButtonComplete
          onClick={() => {
            setFilter("/?status=completed");
            fetchTasks();
          }}
        >
          completed
        </ButtonComplete>
        <ButtonAll
          onClick={() => {
            setFilter("");
            fetchTasks();
          }}
        >
          show all
        </ButtonAll>
      </FooterFilter>
    </div>
  );
}
