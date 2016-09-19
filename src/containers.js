
// React-redux allows us to make store aware containers that
// wrap around our components, so that we don't have to change our 
// original implemantations
import { connect } from 'react-redux';

//our current components
import * as components from './components';

//Our actions
import { addTodo, toggleTodo, removeTodo, editTodo , finishEditTodo} from './actions';


export const TodoList = connect(
	function mapStateToProps(state){
		return { todos : state };
	},
	function mapDispatchtoProps(dispatch){
		return {
			addTodo : text => dispatch(addTodo(text)),
			toggleTodo : id => dispatch(toggleTodo(id)),
			removeTodo : id => dispatch(removeTodo(id)),
			editTodo : id => dispatch(editTodo(id)),
			finishEditTodo : (id,text) => dispatch(finishEditTodo(id,text))
		}
	}
)(components.TodoList);
