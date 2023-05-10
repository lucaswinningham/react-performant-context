import axios, { AxiosError } from 'axios';

import type { Todo } from 'Todo';

const url = 'https://jsonplaceholder.typicode.com';
const todoUrl = `${url}/todos`

type Return = { todo?: Todo, error?: AxiosError };

export const fetchTodo = async (id: Todo['id']): Promise<Return> => {
  try {
    const { data: todo } = await axios.get(`${todoUrl}/${id}`);

    return { todo };
  } catch (error) {
    if (error instanceof AxiosError) {
      return { error };
    } else {
      throw error;
    }
  }
};
