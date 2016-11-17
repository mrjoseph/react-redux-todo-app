import React from 'react';

class Test extends React.Component {
	constructor(props){
		super(props)
		this.displayName = 'Test';
	}
	getChildContext() {
	    return {
			location: this.props.location
	    }
	}
	render(){
		return (<div> Hello World</div>)
	}
}
Test.childContextTypes = {
    location: React.PropTypes.object
}
export default Test