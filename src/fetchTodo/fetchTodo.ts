import axios, { AxiosError } from 'axios';

import type { TTodo } from '@/TodoApp/TTodo';

const url = 'https://jsonplaceholder.typicode.com';
const todoUrl = `${url}/todos`

type Return = { todo?: TTodo, error?: AxiosError };

export const fetchTodo = async (id: TTodo['id']): Promise<Return> => {
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
