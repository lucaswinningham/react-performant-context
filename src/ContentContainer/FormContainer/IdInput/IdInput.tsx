import { ChangeEvent } from 'react';

import { useSetData } from 'TodoContext';

export const IdInput = () => {
  const setData = useSetData();

  const handleChange = (({ target: { value: id } }: ChangeEvent<HTMLInputElement>) => {
    setData({ id: parseInt(id) });
  });

  return (
    <div className="field">
      Id:

      <input type="number" onChange={handleChange} />
    </div>
  );
};
