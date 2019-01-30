import React from 'react';
import {shallow, mount, render} from 'enzyme';
//mount is full dom rendering, ideal for components that use DOM API
//or has a lifecycle method, requires a full DOM API and a browser environment
//ie headerless browser or jsdom
//render used to render react components to a static html, uses cheerio library

import Card from './Card';

it('expect to render card component', () =>{
  const wrapper = shallow(<Card />);
  // expect(wrapper.length).toEqual(1) //shallow rendering
  expect(shallow(<Card />)).toMatchSnapshot();
})
