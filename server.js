import React from 'react';
import { render } from 'react-dom';
import ReactDomServer from 'react-dom/server';
import { Router, Route, browserHistory ,indexRoute, match, RouterContext} from 'react-router';
import store from './src/combine-reducers';


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
		        	<link rel="stylesheet" href="css/style.css" />
		      	</head>
		      	<body>
		      		<h1>ToDo List</h1>
		        		<div id="app" className="app-stuff-goes-here">${html}</div>
		        	<script type="text/jsx">
		        	
		          		window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState)}
		        	</script>
		        	<script src="/js/bundle.js"></script>
		      	</body>
		    </html>`
}

module.exports = function handleRender(req, res) { 
	
	var preloadedState = store.getState();
	
	match({
		routes : require('./routes.jsx'),
		location : req.url
	},function(error,redirectLocation,renderProps){
		if(renderProps){
			var html = ReactDomServer.renderToString(
				<RouterContext  
					{...renderProps} 
					createElement={ function(Component,renderProps){ 
						return <Component {...renderProps} store={store}/> 
				}}/>
			)
			res.send(renderFullPage(html, preloadedState))
		} 
	});
}
