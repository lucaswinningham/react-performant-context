import { useCount } from '@/TodoApp/TodoContext';

export const CountDisplay = () => {
  const count = useCount();

  return (
    <div className="value">
      Count: {count}
    </div>
  );
};
