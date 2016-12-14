import React from 'react';
import Counter,{ Increment ,ButtonInc, ButtonDec}  from '../components';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';
import counterReducer from '../reducer'; 
import { Provider } from 'react-redux';
import store from '../../combine-reducers';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';

function setup(){
	const props = {
			count : counterReducer,
			increment: function(num){},
			decrement: function(num){}
	}
	const {increment,decrement, count} = props

	const state = {
		disableInc : false,
		disableDec : true,
		counterValue :count,
		inc :num => event => increment(num),
		dec :num => event => decrement(num)
	}
	
	const wrapper = render(
		<Increment {...props} >
			<ButtonDec {...state}/>
				<div className="number-container" />
			<ButtonInc {...state}/>
		</Increment>
	);
	const onButtonClick = sinon.spy();
	const buttonDec = shallow(<ButtonDec {...state} onButtonClick={onButtonClick}/>) 
	const buttonInc = shallow(<ButtonInc {...state} onButtonClick={onButtonClick}/>)

	return {
		wrapper,
		buttonDec,
		buttonInc,
		state
	}
}

describe('Component: Counter button', () =>{

	it('Should render without exploding', () => {
		expect(shallow(<Counter />).length).toEqual(1)
  	})

	it('Should have 2 buttons', () => {
		const { wrapper,state } = setup();
		expect(wrapper.find('.buttons').length).toEqual(2)
	})

	it('Should handle INCREMENT', () =>{
		const initialState = 0;
		const newState = counterReducer(initialState, {type: 'INCREMENT'});
		expect(newState).toEqual(1);
	})

	it('Should handle DECREMENT', () =>{
		const initialState = 1;
		const newState = counterReducer(initialState, {type: 'DECREMENT'});
		expect(newState).toEqual(0);
	})


	it('Should remove disabled from DECREMENT button on click',() =>{
		const {state,buttonInc,buttonDec } = setup();

		buttonDec.setProps({ counterValue: 1 });
		
       	expect(buttonDec.html()).toEqual('<button class="active buttons dec">-</button>');
       
	})

	it('Should add disabled to INCREMENT button on click',() =>{
		const {state,buttonInc,buttonDec } = setup();
	
		buttonInc.setProps({ counterValue: 10 });
		buttonInc.setState({ foo: 'bar' });
		
       	expect(buttonInc.html()).toEqual('<button class="buttons inc" disabled="">+</button>');
       
	})  

})