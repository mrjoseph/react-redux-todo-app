import { List, Map } from 'immutable';

const init = List([]);

export default function reducer(state=init, action) {
	switch(action.type) {
		case 'ADD_TODO':
				return state.push(Map(action.payload));
		case 'REMOVE_TODO':
					
			return state.filter(function(t){
				if(t.get('id') != action.payload) {
					return t;
				}
			});
				
		case 'EDIT_TODO':
				
		  	return state.map(t => {
		    	if(t.get('id') === action.payload) {
		      		return t.update('editable', editable => !editable);
		    	} else {
		      		return t;
				}
			 });
		case 'FINISH_EDIT_TODO':	
		  	return state.map(t => {
		    	if(t.get('id') === action.payload.id) {
		    		let a = t.set('text',action.payload.text);
		    		let b = t.update('editable', editable => !editable);
		      		return a;
		    	} else {
		      		return t;
				}
			 });		

		case 'TOGGLE_TODO':
		  	return state.map(t => {
		    	if(t.get('id') === action.payload) {
		      		return t.update('isDone', isDone => !isDone);
		    	} else {
		      		return t;
			}
			 });
		default:
		  	return state;
	}
}
