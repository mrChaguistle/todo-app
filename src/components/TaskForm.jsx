import { useCreateTaskMutation } from '../api/apiSlice'

export const TaskForm = () => {
    const [ createTask ] = useCreateTaskMutation()
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = e.target.elements.title.value.trim()
    const description = e.target.elements.description.value.trim()
    const completed = e.target.elements.completed.checked
    createTask({
        title,
        description,
        completed
    })
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="title" />
      <input type="text" name="description" />
      <input type="checkbox" name="completed" />
      <button type="submit">Add task</button>
    </form>
  );
};
