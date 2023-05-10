import { Provider } from 'TodoContext';

import { ContentContainer } from './ContentContainer';

function App() {
  return (
    <Provider>
      <div className="container">
        <h1>App</h1>

        <ContentContainer />
      </div>
    </Provider>
  );
}

export default App;