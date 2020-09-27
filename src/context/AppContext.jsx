import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import ReactGA from 'react-ga';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const getName = (e) => {
    setName(e.target.value);
  };

  const getEmail = (e) => {
    setEmail(e.target.value);
  };

  // const handleClick = () => {
  //   ReactGA.event({
  //     category: 'Button',
  //     action: 'Clicked the button',
  //   });

  //   localStorage.setItem('nome', name);
  //   localStorage.setItem('email', email);
  // };

  const context = {
    name,
    setName,
    email,
    setEmail,
    getName,
    getEmail,
    // handleClick,
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
