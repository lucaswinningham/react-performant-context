import { useAddTodo, useId, useSetData, useTodos } from 'TodoContext';
import { fetchTodo } from 'fetchTodo';

export const SubmitButton = () => {
  const setData = useSetData();
  const addTodo = useAddTodo();
  const todos = useTodos();
  const id = useId();

  const handleClick = async () => {
    setData({ loading: true });

    const { todo, error } = await fetchTodo(id!);

    if (error) {
      setData({ error: error.message });
    } else {
      addTodo(todo!);
      setData({ error: null, count: todos.length + 1 });
    }

    setData({ loading: false });
  };

  return (
    <div className="field">
      <input disabled={!id} type="submit" onClick={handleClick} />
    </div>
  );
};
