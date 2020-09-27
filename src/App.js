import React, { useEffect } from 'react';

import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './App.css';
import Home from './Components/Home/Home';
import Obrigado from './Components/Obrigado/Obrigado';

import ReactGA from 'react-ga';

function App() {
  useEffect(() => {
    ReactGA.initialize('UA-179039062-1');
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <AppProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/obrigado" component={Obrigado} />
        </Switch>
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
