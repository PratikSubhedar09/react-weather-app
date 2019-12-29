import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import App from '../App';
import getCityWeather from '../actions/getCityWeather';

function mapStateToProps(state) {
  return {
    ...state
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCityWeather,
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
