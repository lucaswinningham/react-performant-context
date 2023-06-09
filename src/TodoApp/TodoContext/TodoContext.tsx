import { ReactNode, useCallback, useEffect } from 'react';

import { createContext, useList } from '@/utils';
import type { TTodo } from '@/TodoApp/TTodo';

type TodoContext = {
  todos: TTodo[];
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
  // onSubmit: () => {},
  // someNestedObject: {}, // Don't nest other objects!
};

const {
  Provider,
  useData,
  useSetData,
} = createContext(initial);

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
    (callback: (todos: TTodo[]) => TTodo[]) => setData({ todos: callback(todos) }),
    [setData, todos],
  );

  const { add: addTodo, remove: removeTodo, toggle: toggleTodo } = useList<TTodo, TTodo['id']>({
    list: todos,
    setList: setTodos,
    id: ({ id }) => id,
  });

  return { addTodo, removeTodo, toggleTodo };
};

export const useAddTodo = () => useTodoList().addTodo;
