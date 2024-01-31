import { useState } from "react";
import TaskItem from "./Component/TaskItem";

function App() {
  const [tasks, setTasks] = useState([]);
  const [formState, setFormState] = useState({
    task: "", // string
    completed: false, // boolean
    taskAssignedTo: "", // string
  });

  function handleChange(event) {
    // Implement logic to handle form changes
    const value = event.target.type == "checkbox"? event.target.checked :event.target.value
    setFormState({...formState,[event.target.name]:value})
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Implement logic to handle form submission
    const newTask = {
      ...formState, id:Date.now() + Math.random()
    }
    const updatedTaskArr = [...tasks,newTask]
    setTasks(updatedTaskArr)
    setFormState({
      task: "", // string
      completed: false, // boolean
      taskAssignedTo: "", // string
    })
  }

  return (
    <>
      <div className="mx-auto my-9 text-center">
        <form onSubmit={handleSubmit}>
          <input name="task" type="text" placeholder="Add Task" onChange={handleChange} value={formState.task} />
          <label>
            Completed:
            <input name="completed" type="checkbox" checked={formState.completed} onChange={handleChange} />
          </label>
          <select name="taskAssignedTo" onChange={handleChange} value={formState.taskAssignedTo}>
            <option value="">Select Assignee</option>
            <option value="Bruce">Bruce</option>
            <option value="Barry">Barry</option>
            <option value="Clark">Clark</option>
            <option value="Oliver">Oliver</option>
            <option value="Jina">Jina</option>
          </select>
          <button type="submit">Add Task</button>
        </form>
      </div>
      <hr />
      <TaskItem tasks = {tasks} setTask = {setTasks} />
    </>
  );
}

export default App;
