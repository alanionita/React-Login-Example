import React from "react";
import PropTypes from "prop-types";

// Redux
import { connect } from "react-redux";
import {
  Field,
  reduxForm,
  formValueSelector,
  SubmissionError
} from "redux-form";

// Components
import Dashboard from "./Dashboard";

let SignInForm = props => {
  const {
    handleSubmit,
    docType,
    docTypeSelected,
    docNumber,
    validateSignInDetails,
    shortcode,
    detailsValidated,
    error
  } = props;
  const submit = values => {
    validateSignInDetails(shortcode, values);
  };
  if (detailsValidated) {
    return <Dashboard />;
  } else {
    return (
      <form onSubmit={handleSubmit(submit)}>
        <section>
            <label>Choose a scanned document to verify</label>
            <div className="doc-select">
              <Field name="docType" component="select">
                <option value="">Select an option</option>
                <option value="Passport">Passport</option>
                <option value="Driving License">Driving License</option>
                <option value="Identity Card">Identity Card</option>
                <option value="Proof of Address">Proof of Address</option>
              </Field>
            </div>
        </section>
        {docTypeSelected && (
          <section>
            <label>Document number</label>
            <div>
              <Field
                name="docNumber"
                component="input"
                type="text"
                placeholder="Enter document number"
              />
            </div>
          </section>
        )}
        <button type="submit" className="button">
          Sign In
        </button>
        {error && <strong>{error}</strong>}
      </form>
    );
  }
};

SignInForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
};

// Decorate with connect to read form values
const selector = formValueSelector("signInForm"); // <-- same as form name
SignInForm = connect(state => {
  // select together as a group
  const docTypeSelected = selector(state, "docType");
  const docNumber = selector(state, "docNumber");
  return {
    docTypeSelected,
    docNumber
  };
})(SignInForm);

// Decorate with redux-form
export default reduxForm({
  form: "signInForm" // a unique identifier for this form
})(SignInForm);
