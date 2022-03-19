import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './styles/Home.scss';

// Pages
import Home from './pages/Home';

// Routes
const routes = [{ path: '/', name: 'Home', Component: Home }];

const App = () => {
  return (
    <Router>
      <div className="App">
        {routes.map(({ path, Component }) => (
          <Route key={path} exact path={path}>
            <Component />
          </Route>
        ))}
      </div>
    </Router>
  );
};

export default App;
