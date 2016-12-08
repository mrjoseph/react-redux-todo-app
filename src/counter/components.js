import React from 'react'; 
if (process.env.BROWSER) require("./style.css");  

class Increment extends React.Component {
	constructor(props){
		super(props)
		console.log(props)
		const { decrement,increment } = props.props;
		this.state = {
			disableInc : false,
			disableDec : true,
			counterValue : this.props.props.count.counterReducer,
			inc :num => event => increment(num),
			dec :num => event => decrement(num)
		}

	}

	componentWillReceiveProps(nextProps){
		this.setState( { counterValue : nextProps.props.count.counterReducer } );

		if (nextProps.props.count.counterReducer >= 10) {
			this.setState({disableInc:true}) 
		} else {
			this.setState( {disableInc:false})
		}
			
		
		if (nextProps.props.count.counterReducer <= 0) {
			this.setState( { disableDec : true } );
		} else {
			this.setState( { disableDec : false } );
		}
	}

	render(){
		return <div className="counter_app">
				<button className="buttons" disabled={this.state.disableDec ? "disabled" :""} onClick={this.state.dec(this.state.counterValue)}>-</button>
				<div className="number-container">{this.state.counterValue}</div>
				<button className="buttons" disabled={this.state.disableInc ? "disabled" :""} onClick={this.state.inc(this.state.counterValue)}>+</button>
			</div>
	}
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