import React from 'react';
import logo from '../../assets/logo.svg';
import './App.css';

// Component
import SignInForm from './SignInForm'

const App = props => {
  const { application } = props;
  return (
    <main className="App">
      <div>
        <h2>Sign In for APP #{application.token}</h2>
        <SignInForm application={application}/>
      </div>
    </main>
  );
};

export default App;

