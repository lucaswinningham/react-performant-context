import { useTodos } from '@/TodoApp/TodoContext';

export const TodosDisplay = () => {
  const todos = useTodos();

  return (
    <div>
      <h4>Todos:</h4>

      {todos.map(({ id, userId, title, completed }) => (
        <div key={id} className="field">
          <h5>Id: {id}</h5>
          <div>Id: {id}</div>
          <div>User Id: {userId}</div>
          <div>Title: {title}</div>
          <div>Completed: {completed.toString()}</div>
        </div>
      ))}
    </div>
  );
};