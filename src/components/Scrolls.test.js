import React from 'react';
import {shallow} from 'enzyme';
//mount is full dom rendering, ideal for components that use DOM API
//or has a lifecycle method, requires a full DOM API and a browser environment
//ie headerless browser or jsdom
//render used to render react components to a static html, uses cheerio library

import Scroll from './Scroll';

it('expect to handle errors', () => {
  expect(shallow(<Scroll />)).toMatchSnapshot();
})
