import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import CityList from '../components/CityList';
import getCityWeather from '../actions/getCityWeather';

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCityWeather,
  }, dispatch);
}

export default connect(null, mapDispatchToProps)(CityList);
