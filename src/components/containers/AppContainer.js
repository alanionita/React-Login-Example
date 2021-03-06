import React from 'react';
import PropTypes from 'prop-types';
import App from '../presentational/App';
import qs from 'query-string';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

// Components
import AppNotFound from '../presentational/AppNotFound'

class AppContainer extends React.Component {
  componentDidMount () {
    const shortcode = qs.parse(this.props.location.search).shortcode;
    this.props.findApplicationByShortcode(shortcode);
  }
  render () {
    return this.props.foundApplication === true 
        ? <App 
            foundApplication={this.props.foundApplication}
            validateSignInDetails={this.props.validateSignInDetails}
            shortcode={qs.parse(this.props.location.search).shortcode}
            detailsValidated={this.props.detailsValidated}
            error={this.props.error}
          /> 
        : <AppNotFound/>
  }
}

function mapDispatchToProps (dispatch) {
  return {
    findApplicationByShortcode: (shortcode) => {
      dispatch(actions.findApplicationByShortcode(shortcode));
    },
    validateSignInDetails: (link, userInput) => {
      dispatch(actions.validateSignInDetails(link, userInput));
    }
  };
}

function mapStateToProps (state) {
  console.log(state)
  return {
    foundApplication: state.application.data.foundApplication,
    detailsValidated: state.application.detailsValidated,
    error: state.application.error,
    loading: state.loading
  };
}

AppContainer.propTypes = {
  foundApplication: PropTypes.bool,
  validateSignInDetails: PropTypes.func.isRequired
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
