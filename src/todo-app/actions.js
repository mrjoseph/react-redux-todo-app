const uid = () => Math.random().toString(34).slice(2);

export function addTodo(text) {
  return {
    type: 'ADD_TODO',
    payload: {
      id: uid(),
      isDone: false,
      text: text,
      editable:false
    }
  };
}

export function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    payload: id
  };
}

export function removeTodo(id){
	return {
		type : 'REMOVE_TODO',
		payload : id
	}
}

export function editTodo(id){

	return {
		type : 'EDIT_TODO',
		payload : id
	}
}

export function finishEditTodo(id,text){
  return {
    type : 'FINISH_EDIT_TODO',
    payload : {
      id : id,
      text : text
    }
  }
}
