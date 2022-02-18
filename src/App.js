import React from 'react';
import { Provider } from "react-redux";


import AppRouter from './router/AppRouter';
import { store } from './store/store';

import './styles/app.scss';


const App = () => {

  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  );

}

export default App;
