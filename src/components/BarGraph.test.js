import React from 'react';
// import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';
import BarGraph from './BarGraph';
import { checkProps } from '../test/testUtils';

const defaultProps = {
  resultArray: [
    ['Typescript', 0.2, 0],
    ['Ruby', 1.52, 0],
    ['Python', 27.21, 0],
    ['C++', 22.84, 0],
    ['Golang', 0.4, 0],
    ['Swift', 2.34, 0],
    ['Javascript', 17.16, 0],
    ['PHP', 2.44, 0],
    ['Java', 17.56, 0],
    ['C#', 8.22, 0],
  ],
};

const wrapper = mount(<BarGraph {...defaultProps} />);

test('does not throw warning with expected props', () => {
  checkProps(BarGraph, defaultProps);
});

test('BarGraph Component renders', () => {
  expect(wrapper).to.have.length(1);
});
