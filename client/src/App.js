import React, { useEffect } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './Redux/store';
import { loadUser } from './Redux/actions/auth.actions';
import Landing from './Containers/Landing';
import Login from './Containers/Login';
import Dashboard from './Containers/Dashboard';
import PrivateRoute from './Components/PrivateRoute';
import RedirectTo from './Components/RedirectTo';
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
          <Route path='/signup' exact render={() => <Login type='signup' />} />
          <PrivateRoute path='/dashboard' exact component={Dashboard} />
          <Route path='/:shortUrl' exact component={RedirectTo} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
