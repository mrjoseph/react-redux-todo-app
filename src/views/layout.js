import React from 'react';
import { Link } from 'react-router'

if (process.env.BROWSER) require("./style.css"); 

class Nav extends React.Component {
	render(){
		return (
			<ul className="nav">
				<li><Link to="/">Home</Link></li>
				<li><Link to="todo">Todo app</Link></li>
				<li><Link to="contact">Contact</Link></li>
				<li><Link to="counter">Counter</Link></li>
			</ul>
		)
	}
}

class Layout extends React.Component {
	
	render(){
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		)
	}
}

export default Layout