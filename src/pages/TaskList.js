import React from "react";
import styled from "@emotion/styled";
import Task from "../components/Task";

export default function TaskList() {
  const [tasks, setTask] = React.useState([]);

  async function fetchTasks() {
    const response = await fetch("http://localhost:1234/tasks");
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
    </div>
  );
}
