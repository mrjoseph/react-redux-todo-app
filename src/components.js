import React from 'react';

export function MyInput (props){
	const { finishEditTodo } = props.props.foo;
	const { id,text } = props.props.todo;
	function getInitialState(){
		return {
			value : props.props.todo.text,
		}
	}
	const finishEditClick = function(id) {
		return event => {
			finishEditTodo(id, event.target.value);
		};
	}
	return (<input 
		type="text" 
		className="input" 
		autoFocus={true}
		
		onBlur={finishEditClick(id)} 
		defaultValue={text} />);
}

export function Todo(props){	
	const { todo } = props;
	const { editTodo } = props.foo;
	const editClick = id => event => editTodo(todo.id);
	if(todo.editable){
		return <MyInput props={props}/>
	} else {

		if(todo.isDone){
			return  <strike>{todo.text}</strike> 
		} else {
			return <span className="edit__click" onClick={editClick(todo.id)}> {todo.text}</span> 
		}
	}
}

export function RemoveBtn(props){
	const { todos, removeTodo, toggleTodo, addTodo } = props.foo;
	const { id } = props;
	const removeClick = id => event => removeTodo(id);
	return <span className="remove__item" onClick={removeClick(id)}>Remove</span>
}

export function ToggleTodo(props){
	const { id } = props;
	const { todos, removeTodo, toggleTodo, addTodo } = props.foo;
	const toggleClick = id => event => toggleTodo(id);
	return(<span className="toggle_todo" onClick={toggleClick(id)}>toggle</span>)
}

export function TodoList(props){
	const { todos, toggleTodo, addTodo } = props;
	const onSubmit = (event) => {
	    const input = event.target;
	    const text = input.value;
	    const isEnterKey = (event.which == 13);
	    const isLongEnough = text.length > 0;
		if(isEnterKey && isLongEnough) {
	  		input.value = '';
	  		addTodo(text);
		}
	};
	const toggleClick = id => event => toggleTodo(id);
	return(
		<div className='todo'>
			<input type='text' 
				className='todo__entry' 
				placeholder='Add todo' 	
				onKeyDown={onSubmit} />
			<ul className='todo__list'>

				{todos.map(t =>(
					<li key={t.get('id')} className='todo__item'>
						
						<Todo todo={t.toJS()} foo={props} />
						
						<RemoveBtn foo={props} id={t.get('id')}/>
						<ToggleTodo foo={props} id={t.get('id')}/>
					</li>
				))}
			</ul>
		</div>
	);
}