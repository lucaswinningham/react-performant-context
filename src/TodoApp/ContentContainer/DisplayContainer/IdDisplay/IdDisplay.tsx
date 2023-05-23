import { useId } from '@/TodoApp/TodoContext';

export const IdDisplay = () => {
  const id = useId();

  return (
    <div className="value">
      Id: {id}
    </div>
  );
};
