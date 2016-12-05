import { List, Map, fromJS } from 'immutable';

const counts = 0;

const counterReducer = (state = counts, action) =>{

	switch(action.type) {
		case 'DECREMENT':				
				return state - 1;		
	
		case 'INCREMENT':		
				return state + 1;
			
		default:
			return state
	}
}

export default counterReducer
