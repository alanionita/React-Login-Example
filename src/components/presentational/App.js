import React from 'react';
import PropTypes from 'prop-types';

// Component
import SignInForm from './SignInForm'

const App = ({ foundApplication, validateSignInDetails, shortcode, detailsValidated, error }) => {
  return (
    <section className="container">
      <div className="card">
        <h1>Welcome to Spotlite</h1>
        <p>Before we can take you to your certificates we need to make sure you're you!</p>
        <p>To manage this check we'll ask you about the documents you've scanned with our Spotlite agent and some document details.</p>
        <p>It would be handy if you have your documents near you.</p>
        <SignInForm
          validateSignInDetails={validateSignInDetails}
          shortcode={shortcode}
          detailsValidated={detailsValidated}
          error={error}
        />
      </div>
    </section>
  );
};

App.propTypes = {
  foundApplication: PropTypes.bool,
  validateSignInDetails: PropTypes.func.isRequired,
  shortcode: PropTypes.string.isRequired
};

export default App;

