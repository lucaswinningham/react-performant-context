import { useError } from '@/TodoApp/TodoContext';

export const ErrorDisplay = () => {
  const error = useError();

  return (
    <div className="value">
      Error: {error}
    </div>
  );
};
