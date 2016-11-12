import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import ReactDomServer from 'react-dom/server';
import reducer from './src/reducer';
import { TodoList} from './src/containers';



/**
 * [renderFullPage description]
 * @param  {[type]} html			The html to from our redux storeto be rendered on first load
 * @param  {[type]} preloadedState  Send our redux store to be attached to the window object to be used on first load
 * @return {[type]}                 Return our html string
 */
function renderFullPage(html, preloadedState){
	return`<!doctype html>
		    <html>
		     	<head>
		        	<title>Redux Universal Example</title>
		        	<link rel="stylesheet" href="/style.css" />
		      	</head>
		      	<body>
		      		<h1>ToDo List</h1>
		        	<div id="app">${html}</div>
		        	<script type="text/jsx">
		        	
		          		window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
		        	</script>
		        	<script src="/bundle.js"></script>
		      	</body>
		    </html>`
}
//
module.exports = function handleRender(req, res) { 
	var store = createStore(reducer);
	var html = ReactDomServer.renderToString(
		<Provider store={store}>
			<TodoList />
		</Provider>
	)
	var preloadedState = store.getState();

	// Send our html string, redux app and our initial state on our first load
	res.send(renderFullPage(html, preloadedState))

}