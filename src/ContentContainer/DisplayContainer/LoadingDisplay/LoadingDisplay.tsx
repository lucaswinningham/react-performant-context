import { useLoading } from 'TodoContext';

export const LoadingDisplay = () => {
  const loading = useLoading();

  return (
    <div className="value">
      Loading: {loading.toString()}
    </div>
  );
};
