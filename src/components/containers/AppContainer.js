import React from 'react';
import PropTypes from 'prop-types';
import App from '../presentational/App';
import qs from 'query-string';
import { objIsEmpty } from '../../helpers/utils';

// Redux
import { connect } from 'react-redux';
import * as actions from '../../actions/actions';

class AppContainer extends React.Component {
  componentDidMount () {
    const shortcode = qs.parse(this.props.location.search).shortcode;
    this.props.findApplicationByShortcode(shortcode);
  }
  render () {
    return this.props.foundApplication === true 
        ? <App foundApplication={this.props.foundApplication}/> 
        : <h2>Token not found!</h2>
  }
}

function mapDispatchToProps (dispatch) {
  return {
    findApplicationByShortcode: (shortcode) => {
      dispatch(actions.findApplicationByShortcode(shortcode));
    }
  };
}

function mapStateToProps (state) {
  console.log(state)
  return {
    foundApplication: state.application.data.foundApplication,
    loading: state.loading
  };
}

AppContainer.propTypes = {
  foundApplication: PropTypes.bool
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
