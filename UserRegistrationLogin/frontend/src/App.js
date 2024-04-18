import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/Home'; // Assume a Home component for the main page

function App() {
  return (
    <Router>
      <Auth0ProviderWithHistory>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Auth0ProviderWithHistory>
    </Router>
  );
}

export default App;

