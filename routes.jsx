import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import ReactDomServer from 'react-dom/server';
import reducer from './src/todo-app/reducer';
import { Router, Route, browserHistory ,IndexRoute, match, hashHistory} from 'react-router';
import { TodoList } from './src/todo-app/containers'; 
import Layout from './src/views/layout';
import Contact from './src/views/contact';
import Index from './src/views/index';
var store = createStore(reducer);

module.exports =  (
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={ Layout }> 
				<IndexRoute component={Index}/>
				<Route name='todo' path='/todo' component={ TodoList } />
				<Route name='Contact' path='/contact' component={ Contact } />
			</Route>
		</Router>					
	</Provider>
)

