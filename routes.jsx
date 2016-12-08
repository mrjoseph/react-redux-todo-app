import React from 'react';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory ,IndexRoute, match, hashHistory} from 'react-router';
import { TodoList } from './src/todo-app/containers'; 
import Layout from './src/views/layout';
import Contact from './src/views/contact';
import Index from './src/views/index';
import { CounterApp } from './src/counter/containers';
import  Link from './src/jest-test/Link.react';
import store from './src/combine-reducers';

module.exports =  (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={ Layout }> 
				<IndexRoute component={Index}/>
				<Route name='todo' path='/todo' component={ TodoList } />
				<Route name='Contact' path='/contact' component={ Contact } />
				<Route name='counter' path='/counter' component={ CounterApp } />
				<Route name='Link' path='/link' component={ Link } />
			</Route>
		</Router>					
	</Provider>
)

