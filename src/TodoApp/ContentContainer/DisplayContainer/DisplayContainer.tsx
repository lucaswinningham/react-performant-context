import { CountDisplay } from './CountDisplay';
import { ErrorDisplay } from './ErrorDisplay';
import { IdDisplay } from './IdDisplay';
import { LoadingDisplay } from './LoadingDisplay';
import { TodosDisplay } from './TodosDisplay';

export const DisplayContainer = () => (
  <div className="container">
    <h3>DisplayContainer</h3>

    <CountDisplay />
    <ErrorDisplay />
    <IdDisplay />
    <LoadingDisplay />
    <TodosDisplay />
  </div>
);
