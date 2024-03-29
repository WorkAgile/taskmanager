import React from "react";
import styled from "@emotion/styled";
import Task from "../components/Task";
import { fetchTaskList } from "../components/fechTask";

const FooterFilter = styled.div`
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  bottom: 0;
  width: 100%;
`;

const ButtonActive = styled.button`
  flex-grow: 1;
  height: 40px;
  border-top: 2px solid #44bd32;
  margin: 5px;
  color: #353b48;
  font-size: 14px;
  font-weight: 900;
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

const ButtonProgess = styled.button`
  flex-grow: 1;
  height: 40px;
  border-top: 2px solid #e1b12c;
  margin: 5px;
  color: #353b48;
  font-size: 14px;
  font-weight: 900;
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

const ButtonComplete = styled.button`
  flex-grow: 1;
  height: 40px;
  border-top: 2px solid #7f8fa6;
  margin: 5px;
  color: #353b48;
  font-size: 14px;
  font-weight: 900;
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

const ButtonAll = styled.button`
  flex-grow: 1;
  height: 40px;
  border-top: 2px solid #e84118;
  margin: 5px;
  color: #353b48;
  font-size: 14px;
  font-weight: 900;
  outline: none;
  background-color: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
`;

export default function TaskList() {
  const [tasks, setTask] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const [remove, setRemove] = React.useState();
  // async function fetchTaskList() {
  //   const response = await fetch(`http://localhost:1234/tasks${filter}`);
  //   const newTask = await response.json();
  //   setTask(newTask);
  // }

  async function getTasks(filter) {
    const startTasks = await fetchTaskList(filter);
    setTask(startTasks);
  }
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
    getTasks(filter);
    setRemove("");
  }, [remove]);

  React.useEffect(() => {
    getTasks(filter);
  }, [filter, remove]);

  // React.useEffect(() => {
  //   fetchTasks();
  // }, [filter]);
  console.log(remove);
  return (
    <div>
      {tasks.map(task => (
        <Task
          onClick={() => setRemove(task.id)}
          idValue={task.id}
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
          }}
        >
          ACTIVE
        </ButtonActive>
        <ButtonProgess
          onClick={() => {
            setFilter("/?status=progress");
          }}
        >
          IN PROGRESS
        </ButtonProgess>
        <ButtonComplete
          onClick={() => {
            setFilter("/?status=completed");
          }}
        >
          COMPLETED
        </ButtonComplete>
        <ButtonAll
          onClick={() => {
            setFilter("");
          }}
        >
          SHOW ALL
        </ButtonAll>
      </FooterFilter>
    </div>
  );
}
