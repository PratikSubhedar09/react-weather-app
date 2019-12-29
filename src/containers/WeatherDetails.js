import { connect } from 'react-redux';

import WeatherDetails from '../components/WeatherDetails';

function mapStateToProps(state) {
  return {
    ...state
  };
}


export default connect(mapStateToProps)(WeatherDetails);
