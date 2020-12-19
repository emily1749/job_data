import React from 'react';
import { mount } from 'enzyme';

import InfoBox from '../../components/InfoBox';

const wrapper = mount(<InfoBox />);

describe('InfoBox Component ', () => {
  it('renders', () => {
    expect(wrapper.length).toBe(1);
  });
});
