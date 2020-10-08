import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { loadUser } from './Redux/actions/auth.actions';
import Landing from './Containers/Landing';
import Login from './Containers/Login';
import NotFound from './Components/NotFound';
import './App.css';

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  });

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path='/' exact component={Landing} />
          <Route path='/login' exact component={Login} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
