import React from 'react';
import PropTypes from 'prop-types';

// Redux
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector, SubmissionError } from 'redux-form';

// Components
import Dashboard from './Dashboard';

let SignInForm = (props) => {
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
        if (typeof validateSignInDetails(shortcode, values) === Error) {
            throw new SubmissionError(validateSignInDetails(shortcode, values));
        } else {
            validateSignInDetails(shortcode, values);
        }
    }
    if (detailsValidated) {
        return (
            <Dashboard />
        )
    } else {
        return (
            <form onSubmit={handleSubmit(submit)}>
                <div>
                    <p>Which document would you like to use?</p>
                    <div>
                        <label htmlFor="docType">Available documents:</label>
                        <div>
                            <label>
                                <Field
                                    name="docType"
                                    component="input"
                                    type="radio"
                                    value="Passport"
                                />{' '}
                                Passport
                                </label>
                            <label>
                                <Field
                                    name="docType"
                                    component="input"
                                    type="radio"
                                    value="Driving License"
                                />{' '}
                                Driving License
                                </label>
                            <label>
                                <Field
                                    name="docType"
                                    component="input"
                                    type="radio"
                                    value="Identity Card"
                                />{' '}
                                Identity Card
                                </label>
                            <label>
                                <Field
                                    name="docType"
                                    component="input"
                                    type="radio"
                                    value="Proof of Address"
                                />{' '}
                                Proof of Address
                                </label>
                        </div>
                    </div>
                    {docTypeSelected && (
                        <div>
                            <p>Perfect you've chosen your document!</p>
                            <p>Now verify the document by entering the correct document number</p>
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
                <div>
                    <button type="submit">
                        Sign In
                            </button>
                </div>
                {error && <strong>{error}</strong>}
            </form>
        );
    }
}

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

// Decorate with connect to read form values
const selector = formValueSelector('signInForm') // <-- same as form name
SignInForm = connect(state => {
    // select together as a group
    const docTypeSelected = selector(state, 'docType')
    const { docNumber, issueDate, postcode } = selector(state, 'docNumber', 'issueDate', 'postcode')
    return {
        docTypeSelected,
        docNumber,
        issueDate,
        postcode
    }
})(SignInForm)


// Decorate with redux-form
export default reduxForm({
    form: 'signInForm' // a unique identifier for this form
})(SignInForm)
