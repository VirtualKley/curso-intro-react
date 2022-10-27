import React from 'react';
import { AppUI } from '../UI/pages/AppUI';
import { TodoProvider } from '../TodoContext/index';

function App() {

  return (
    <TodoProvider>
      <AppUI />
    </TodoProvider>
  );
}

export default App;
