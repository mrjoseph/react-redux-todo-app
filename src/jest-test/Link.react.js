import React from 'react';

const STATUS = {
  NORMAL: 'normal',
  HOVERED: 'hovered',
  INITIAL_TEXT : 'click here to open',
  CLICKED_TEXT : 'click here to close'
};


export default class Link extends React.Component {

  constructor(props) {
    super(props);
    this._onMouseEnter = this._onMouseEnter.bind(this);
    this._onMouseLeave = this._onMouseLeave.bind(this);
    this._toggle = this._toggle.bind(this);


    this.state = {
      class: STATUS.NORMAL,
      text : false
    };
  }

  _onMouseEnter() {
    this.setState({class: STATUS.HOVERED});
  }

  _onMouseLeave() {
    this.setState({class: STATUS.NORMAL});
  }

  _toggle(){
  	this.setState({ text : !this.state.text })
  }

  render() {
    return (
    	<div>
    	<a className={this.state.class} id="text-link" href={this.props.page || '#'} onClick={this._toggle} onMouseEnter={this._onMouseEnter} onMouseLeave={this._onMouseLeave}>
    	  
    	  {this.state.text ? STATUS.CLICKED_TEXT :STATUS.INITIAL_TEXT}
    	</a>
    	</div>
    );
  }

}