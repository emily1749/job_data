//DONE GOOD :)

import React from 'react';
import { mount } from 'enzyme';
import { expect } from 'chai';
import InfoBox from './InfoBox';

const wrapper = mount(<InfoBox />);

describe('InfoBox Component ', () => {
  it('renders', () => {
    expect(wrapper).to.have.length(1);
  });
});
