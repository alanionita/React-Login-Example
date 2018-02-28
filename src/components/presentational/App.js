import React from 'react';
import PropTypes from 'prop-types';

// Components
import SignInForm from './SignInForm'

const App = ({ foundApplication, validateSignInDetails, shortcode, detailsValidated, error }) => {
  return (
    <section className="container">
      <div className="card-large">
        <h1>Welcome to Spotlite</h1>
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

