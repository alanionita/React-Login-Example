import React from 'react';
import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import './App.css';

// Component
import SignInForm from './SignInForm'

const App = ({ foundApplication, validateSignInDetails, shortcode, detailsValidated }) => {
  return (
    <main className="App">
      <div>
        <h1>Welcome to Spotlite</h1>
        <p>Choose a scanned document to verify</p>
        <SignInForm 
          validateSignInDetails={validateSignInDetails}
          shortcode={shortcode}
          detailsValidated={detailsValidated}
        />
      </div>
    </main>
  );
};

App.propTypes = {
  foundApplication: PropTypes.bool,
  validateSignInDetails: PropTypes.func.isRequired,
  shortcode: PropTypes.string.isRequired
};

export default App;

