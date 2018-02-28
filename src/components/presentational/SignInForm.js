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
    issueDate,
    postcode,
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
        <div>
          <div>
            <label htmlFor="docType">Choose a scanned document to verify</label>
            <div className="row">
              <div className="card-mini">
                <label>
                  <i className="icon passport" />
                  <label>Passport</label>
                  <Field
                    name="docType"
                    component="input"
                    type="radio"
                    value="Passport"
                  />
                </label>
              </div>
              <div className="card-mini">
                <label>
                  <i className="icon driving-license" />
                  <label>Driving License</label>
                  <Field
                    name="docType"
                    component="input"
                    type="radio"
                    value="Driving License"
                  />
                </label>
              </div>
              <div className="card-mini">
                <label>
                  <i className="icon identity-card" />
                  <label>Identity Card</label>
                  <Field
                    name="docType"
                    component="input"
                    type="radio"
                    value="Identity Card"
                  />
                </label>
              </div>
              <div className="card-mini">
                <i className="icon proof-of-address" />
                <label>Proof of Address</label>
                <Field
                  name="docType"
                  component="input"
                  type="radio"
                  value="Proof of Address"
                />
              </div>
            </div>
          </div>
          {docTypeSelected && (
            <div>
              <label>Enter document number</label>
              <div>
                <Field
                  name="docNumber"
                  component="input"
                  type="text"
                  placeholder="Enter document number"
                />
              </div>
            </div>
          )}
        </div>
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
  const { docNumber, issueDate, postcode } = selector(
    state,
    "docNumber",
    "issueDate",
    "postcode"
  );
  return {
    docTypeSelected,
    docNumber,
    issueDate,
    postcode
  };
})(SignInForm);

// Decorate with redux-form
export default reduxForm({
  form: "signInForm" // a unique identifier for this form
})(SignInForm);
