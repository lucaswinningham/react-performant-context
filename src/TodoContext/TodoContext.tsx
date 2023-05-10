import { useCallback } from 'react';

import { createContext, useList } from 'utils';
import type { Todo } from 'Todo';

type TodoContext = {
  todos: Todo[];
  count: number;
  error: string | null;
  id: number | null;
  loading: boolean;
};

const initial: TodoContext = {
  todos: [],
  count: 0,
  error: null,
  id: null,
  loading: false,
  // someNestedObject: {}, // Don't nest other objects!
};

const { Provider, useData, useSetData } = createContext(initial);

export { Provider, useSetData };

export const useCount = () => useData(({ count }) => count);
export const useError = () => useData(({ error }) => error);
export const useId = () => useData(({ id }) => id);
export const useLoading = () => useData(({ loading }) => loading);
export const useTodos = () => useData(({ todos }) => todos);

const useTodoList = () => {
  const todos = useTodos();
  const setData = useSetData();
  const setTodos = useCallback(
    (callback: (todos: Todo[]) => Todo[]) => setData({ todos: callback(todos) }),
    [setData, todos],
  );

  const { add: addTodo, remove: removeTodo, toggle: toggleTodo } = useList<Todo, Todo['id']>({
    list: todos,
    setList: setTodos,
    id: ({ id }) => id,
  });

  return { addTodo, removeTodo, toggleTodo };
};

export const useAddTodo = () => useTodoList().addTodo;
