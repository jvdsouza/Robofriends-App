import React from 'react';
import {shallow} from 'enzyme';

import Header from './Header';

it('expect to  handle errors', () => {
  expect(shallow(<Header />)).toMatchSnapshot();
})
