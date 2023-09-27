import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import LoginForm from './LoginForm';
import RegistrationForm from './RegistrationForm';
import UserProfile from './UserProfile';
import Feed from './Feed';
import './App.css'; // Import the CSS file for App.js

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <Route path="/register" component={RegistrationForm} />
          <Route path="/profile" component={UserProfile} />
          <Route path="/feed" component={Feed} />
          {/* Add more routes as needed */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
