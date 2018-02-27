import React from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

// Redux
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';

// Components
import Dashboard from './Dashboard';

class SignInForm extends React.Component {
    render() {
        const {
            handleSubmit,
            docType,
            docTypeSelected,
            docNumber,
            issueDate,
            postcode,
            validateSignInDetails,
            shortcode,
            detailsValidated
        } = this.props;
        const submit = values => {
            validateSignInDetails(shortcode, values)
        }
        if (this.props.detailsValidated === true) {
            return (
                <Dashboard/>
            )
        } else {
            return (
                <form onSubmit={handleSubmit(submit)}>
                    <section>
                        <div>
                            <label htmlFor="docType">Pick a document:</label>
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
                    </section>
                    <section>
                        <button type="submit">
                            Sign In
                    </button>
                    </section>
                </form>
            );
        }
    }
};

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
};

// Decorate with redux-form
SignInForm = reduxForm({
    form: 'signInForm' // a unique identifier for this form
})(SignInForm)

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



export default SignInForm
