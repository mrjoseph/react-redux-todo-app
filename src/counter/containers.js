
// React-redux allows us to make store aware containers that
// wrap around our components, so that we don't have to change our 
// original implemantations
import { connect } from 'react-redux';

//our current components
import Counter from './components';

//Our actions
import { decrement,increment} from './actions';


export const CounterApp = connect(
	function mapStateToProps(state){
		
		return { count : state };
	},
	function mapDispatchtoProps(dispatch){
		return {
			decrement : num => dispatch(decrement(num)),
			increment : num => dispatch(increment(num)),
		}
	}
)(Counter); 
