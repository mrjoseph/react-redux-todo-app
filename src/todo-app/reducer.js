import { List, Map, fromJS } from 'immutable';

const arr = [
	{id : 0, isDone : true, text : 'make components'},
	{id : 1, isDone : false, text : 'design actions'},
	{id : 2, isDone : false, text : 'implement reducer'},
	{id : 3, isDone : false, text : 'connect components'},
];

//convert our incoming data to immutable so it looks like this

// const init = List([
// 	Map({id : 0, isDone : true, text : 'make components'}),
// 	Map({id : 1, isDone : false, text : 'design actions'}),
// 	Map({id : 2, isDone : false, text : 'implement reducer'}),
// 	Map({id : 3, isDone : false, text : 'connect components'}),
// ]);
const init = fromJS(arr);


//const init = List([]);

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
		    	if (t.get('id') === action.payload.id) {
		    		return t.update('editable', editable => !editable)
		    			    .set('text', action.payload.text);
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
