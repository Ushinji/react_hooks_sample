import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { initialState, rootReducer, StoreContext } from './ducks';
import Routes from './Routes';

const App: React.FunctionComponent = () => {
  const [state, dispatch] = React.useReducer(rootReducer, initialState);
  return (
    <StoreContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </StoreContext.Provider>
  );
};

export default App;
