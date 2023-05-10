import { useCount } from 'TodoContext';

export const CountDisplay = () => {
  const count = useCount();

  return (
    <div className="value">
      Count: {count}
    </div>
  );
};
