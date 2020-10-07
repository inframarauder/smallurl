import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import Landing from './Containers/Landing';
import Login from './Containers/Login';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
