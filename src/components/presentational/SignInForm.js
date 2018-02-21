import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { Field, reduxForm, formValueSelector } from 'redux-form';

let SignInForm = props => {
    const {
        handleSubmit,
        docType,
        docNumber,
        application,
    } = props;
    const submit = values => values.docNumber === docNumber ? <h2>Dashboard</h2> : <h2>Incorrect document number</h2>
    return (
        <form onSubmit={handleSubmit(submit)}>
            <section>
                <div>
                    <label>Pick a document:</label>
                    <Field name="docType" component="select">
                        <option value="">Select a document</option>
                        {Object.keys(application.scannedDocuments).map(function (keyName, keyIndex) {
                            return <option value={application.scannedDocuments[keyName].docType}>{application.scannedDocuments[keyName].docType}</option>
                        })}
                    </Field>
                </div>
                {docType && (
                    <div>
                        <label>Confirm your document number</label>
                        <Field
                            name="docNumber"
                            component="input"
                            type="text"
                            placeholder="Enter the selected document number"
                        />
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
};

SignInForm.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    application: PropTypes.object.isRequired
};

// Decorate with redux-form
SignInForm = reduxForm({
    form: 'signInForm' // a unique identifier for this form
})(SignInForm)

// Decorate with connect to read form values
const selector = formValueSelector('signInForm') // <-- same as form name
SignInForm = connect(state => {
    // select together as a group
    const { docType, docNumber } = selector(state, 'docType', 'docNumber')
    return {
        docType,
        docNumber
    }
})(SignInForm)

export default SignInForm
