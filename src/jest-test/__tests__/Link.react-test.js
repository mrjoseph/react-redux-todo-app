import React from 'react';
import Link from '../Link.react';
import { shallow, mount, render } from 'enzyme';
import sinon from 'sinon';



describe('Component: Link button', () =>{
  
  it('Should render without exploding', () => {
    const wrapper = shallow(<Link />);
     expect(wrapper.find('a').length).toEqual(1);
  })


  it('Should change the text of the link', () => {
  
    const wrapper = shallow(<Link  />);

    wrapper.find('a').simulate('click');
    expect(wrapper.find('a').text()).toEqual('click here to close');
  });


  it('Should change the text of the link back when clicked twice', () => {
    const wrapper = shallow(<Link />);
    wrapper.find('a').simulate('click');
    wrapper.find('a').simulate('click');
    expect(wrapper.find('a').text()).toEqual('click here to open');
  });
})
