import React from 'react';
import { Link } from 'react-router'
class Layout extends React.Component {
	
	render(){
		return (
			<div>
				<ul className="nav">
					<li><Link to="/">Home</Link></li>
					<li><Link to="todo">Todo app</Link></li>
					<li><Link to="contact">Contact</Link></li>
				</ul>
				{this.props.children}
			</div>
		)
	}
}

export default Layout