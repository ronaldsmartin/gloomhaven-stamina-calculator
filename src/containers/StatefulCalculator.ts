import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import Calculator from '../components/Calculator';
import { AppState } from '../redux/app';

const mapStateToProps = (state: AppState) => state.calculator;
const matchDispatchToProps = (dispatch: Dispatch) => { }

const StatefulCalculator = connect(
    mapStateToProps,
    matchDispatchToProps,
)(Calculator)

export default StatefulCalculator;