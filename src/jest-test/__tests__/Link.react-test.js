import React from 'react';
import Link from '../Link.react';
import renderer from 'react-test-renderer';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';


describe('Component: Link button', () =>{
  
  it('Should render without exploding', () => {
    const wrapper = shallow(<Link />);
     expect(wrapper.find('a').length).toEqual(1);
  })


  it('Should change the text of the link', () => {
    
    const onButtonClick = sinon.spy();

    const wrapper = shallow(
      <Link onButtonClick={onButtonClick} />  
    );

    wrapper.find('a').simulate('click');
    expect(wrapper.find('a').text()).toEqual('click here to close');
  });


  it('Should change the text of the link back when clicked twice', () => {
    
    const onButtonClick = sinon.spy();

    const wrapper = shallow(
      <Link onButtonClick={onButtonClick} />  
    );

    wrapper.find('a').simulate('click');
    wrapper.find('a').simulate('click');
    expect(wrapper.find('a').text()).toEqual('click here to open');
  });
})
