import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AppProvider } from './context/AppContext';
import './App.css';
import Home from './Components/Home/Home';
import Obrigado from './Components/Obrigado/Obrigado';

function App() {
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
