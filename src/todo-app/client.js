import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import reducer from './reducer';
import { TodoList} from './containers';
import { Router, Route, browserHistory, hashHistory, IndexRoute } from 'react-router';
import Layout from './views/layout';
import Contact from './views/contact';
import Index from './views/index';
const store = createStore(reducer);
require("./style.css");

render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path='/' component={ Layout } > 
				<IndexRoute component={Index}/>
				<Route path='todo' component={ TodoList } />
				<Route path='contact' component={ Contact } />
			</Route>
		</Router>				
	</Provider>
	, document.getElementById('app')
);

