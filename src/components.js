import React from 'react';

var MyInput = React.createClass({
	getInitialState:function(){
		return {
			value : this.props.todo.text
		}
	},
	handleChange: function(evt) {
	    this.setState({
	     	value: evt.target.value
	    });
	 },
	render:  function(){
		console.log(this.props);
		return <input type="text" value={this.state.value} onChange={this.handleChange}/>
	}
});


export function Todo(props){
	const { todo } = props;

	if(todo.editable){
		return <MyInput todo={todo}/>
	} else {

		if(todo.isDone){
			return <strike>{todo.text}</strike>
		} else {
			return <span>{todo.text}</span>
		}
	}

}

export function RemoveBtn(props){
	const { todos, removeTodo, toggleTodo, addTodo } = props.foo;
	const { id } = props;
	const removeClick = id => event => removeTodo(id);

	return <span className="remove__item" onClick={removeClick(id)}>Remove</span>
}

export function TodoList(props){

	const { todos, toggleTodo, addTodo ,editTodo } = props;
	console.log(props);
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

	const editClick = id => event => editTodo(id);

	// const editClick = function editClick(){
	// 	constsole.log('editing');
	// }
	
	return(
		<div className='todo'>
			<input type='text' 
				className='todo__entry' 
				placeholder='Add todo' 	
				onKeyDown={onSubmit} />
			<ul className='todo__list'>

				{todos.map(t =>(
					<li key={t.get('id')} className='todo__item'>
						<div className="edit__click" onClick={editClick(t.get('id'))}>
							<Todo todo={t.toJS()} />
						</div>
						<RemoveBtn foo={props} id={t.get('id')}/>
					</li>
				))}
			</ul>
		</div>
	);
}

//onClick={toggleClick(t.get('id'))}