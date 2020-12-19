import React from 'react';
import { mount } from 'enzyme';

import BarGraph from '../../components/BarGraph';

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

describe('BarGraph Component', () => {
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });

  it("it renders the graph's bars correctly", () => {
    expect(wrapper.find('.bar').length).toBe(10);
  });
});
