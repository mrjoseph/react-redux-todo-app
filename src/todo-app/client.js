import React from 'react';
import { render } from 'react-dom';
import { createStore , combineReducers } from 'redux';
import { Provider } from 'react-redux'
import reducer, {counterReducer} from './reducer';
import { TodoList } from './containers';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import Layout from '../views/layout';
import Contact from '../views/contact';
import {CounterApp} from '../counter/containers';
import Index from '../views/index';

const rootReducer = combineReducers({
	reducer,
	counterReducer
});
const store = createStore(rootReducer); 



render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={ Layout } > 
				<IndexRoute component={Index}/>
				<Route name='todo' path='/todo' component={ TodoList } />
				<Route name='Contact' path='/contact' component={ Contact } />
				<Route name='counter' path='/counter' component={ CounterApp } />
			</Route>
		</Router>				
	</Provider>
	, document.getElementById('app')
);

