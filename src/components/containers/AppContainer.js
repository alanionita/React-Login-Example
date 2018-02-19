import React from 'react';
import PropTypes from 'prop-types';
import App from '../presentational/App';
import qs from 'query-string'

// Redux
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class AppContainer extends React.Component {
  componentDidMount () {
    const token = qs.parse(this.props.location.search).token;
    this.props.fetchApplicationByToken(token);
  }
  render () {
    return (
      <App applications={this.props.applications}/>
    );
  }
}

function mapDispatchToProps (dispatch) {
  return {
    fetchApplicationByToken: (token) => {
      dispatch(actions.fetchApplicationByToken(token));
    }
  };
}

function mapStateToProps (state) {
  return {
    application: state.application.application,
    loading: state.loading
  };
}

AppContainer.propTypes = {
  application: PropTypes.object
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
