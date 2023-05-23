import { ContentContainer } from './ContentContainer';
import { Provider } from './TodoContext';

export const TodoApp = () => (
  <Provider>
    <div className="container">
      <h1>App</h1>

      <ContentContainer />
    </div>
  </Provider>
);
