export async function fetchTaskList(filter) {
  const response = await fetch(`http://localhost:1234/tasks${filter}`);
  const newTask = await response.json();
  return newTask;
}
