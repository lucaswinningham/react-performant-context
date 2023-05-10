import { useId } from 'TodoContext';

export const IdDisplay = () => {
  const id = useId();

  return (
    <div className="value">
      Id: {id}
    </div>
  );
};
