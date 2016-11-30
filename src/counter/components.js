import React from 'react'; 
if (process.env.BROWSER) require("./style.css");  
function Increment(props){
	const { count,decrement,increment } = props.props;
	
	const inc = num => event => increment(num);
	const dec = num => event => decrement(num);
	return <div className="counter_app">
			<button onClick={dec(count.counterReducer)}>-</button>
			{count.counterReducer}
			<button onClick={inc(count.counterReducer)}>+</button>
		</div>
}


class Counter extends React.Component {
	constructor(props) {
	    super(props);
		this.displayName = 'Counter';
    }
	getChildContext() {
	    return {
			location: this.props.location
	    }
	}
	render() {
		
		return <div><Increment props={this.props}/></div>
	}
}
Counter.childContextTypes = {
    location: React.PropTypes.object
}
export default Counter