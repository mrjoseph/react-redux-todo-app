import React from 'react'; 
if (process.env.BROWSER) require("./style.css");  

export class Increment extends React.Component {
	constructor(props){
		super(props)
		var { decrement,increment,count } = props;
		var count = count;
		this.state = {
			disableInc : false,
			disableDec : true,
			counterValue : count.counterReducer,
			inc :num => event => increment(num),
			dec :num => event => decrement(num)
		}
	}

	componentWillReceiveProps(nextProps){
		
		this.setState( { counterValue : nextProps.count.counterReducer } );
	}

	render(){
		return <div className="counter_app">
				<ButtonDec   {...this.state} />
				<div className="number-container">{this.state.counterValue}</div>
				<ButtonInc {...this.state} />
			</div>
	}
}



export class ButtonDec extends React.Component {
	constructor(props){
		super(props)
		const {counterValue ,dec, disableDec } = props
		this.state = {
			dec,
			counterValue,
			disableDec,
			classname : 'buttons dec'
		}
		
	}
	componentWillReceiveProps(nextProps){
		if (nextProps.counterValue <= 0) {
			this.setState({ 
				disableDec : true, 
				classname : 'buttons dec'
			});
		} else {
			this.setState({ 
				disableDec : false,
				classname : 'active buttons dec'
			});
		}
	}

	render(){
		return <button 
			className={this.state.classname}
			onClick={this.state.dec(this.state.counterValue)}
			disabled={this.state.disableDec}>
			-
			</button>
	}
} 

export class ButtonInc extends React.Component {
	constructor(props){
		super()
		const {counterValue, inc, disableInc } = props
		this.state = {
			inc,counterValue,disableInc,
			classname : 'active buttons inc'
		}

	}
	componentWillReceiveProps(nextProps){
		if (nextProps.counterValue >= 10) {
			this.setState({
				disableInc:true,
				classname : 'buttons inc'
			}) 
		} else {
			this.setState( {
				disableInc:false,
				classname : 'active buttons inc'
			})
		}
	}

	render(){
		return <button 
			className={this.state.classname} 
			onClick={this.state.inc(this.state.counterValue)}
			disabled={this.state.disableInc}>
			+
			</button>
	}
} 

class Counter extends React.Component {
	constructor(props) {
	    super(props);
		this.displayName = 'Counter';
		this.state = {
			name : 'Trev'
		}
    }
	getChildContext() {
	    return {
			location: this.props.location
	    }
	}
	componentWillUpdate(nextProps, nextState){
		console.log(nextProps, nextState)
	}
	componentDidMount(){
		
	}
	
	render() {
		
		return <div className="container"><Increment {...this.props}/></div>
	}
}
Counter.childContextTypes = {
    location: React.PropTypes.object
}
export default Counter