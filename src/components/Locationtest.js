
  // const userCityLocation = 'Worcester';
  // const onCityInputChange = sinon.spy();
  // const wrapper = setup(props);

  // wrapper.find('.input-text-city');
  // //   .simulate('change', { target: { value: userCityLocation } });
  // expect(onCityInputChange.calledOnce);
  // ('onCityInputChange')(userCityLocation);

  // const cityLocation = 'Worcester';
  // const onCityInputChange = sinon.spy();
  // props.onCityInputChange = onCityInputChange;

  // const wrapper = setup(props);
  // wrapper.find('input').first()(cityLocation);
  // const dispatch = jest.fn();
  // const cityLocation = 'Worcester';
  // // props.onCityInputChange
  // props.dispatch = dispatch;
  // // props.cityLocation = cityLocation;
  // const onCityInputChange = jest.fn();
  // props.onCityInputChange = { onCityInputChange };
  // const finalValue = {
  //   type: 'CITY_LOCATION',
  //   payload: cityLocation,
  // };
  // // props.onCityInputChange = jest.fn();

  // const wrapper = setup(props);

  // const fn = wrapper
  //   .find('input')
  //   .first()
  //   //   .prop('onChange')
  //   .simulate('change', { target: { name: 'Worcester' } });
  // expect(dispatch).toBeCalledWith(finalValue);
  // //   wrapper.find(".")
  // expect;
  // const fn = wrapper
  //   .find('input')
  //   .first()
  //   .prop('onChange');
  // //   .simulate('change' );
  // fn(cityLocation);
  // const input = wrapper.props.onCityInputChange();

  //   .simulate('change');
  // expect(onCityInputChange.mock.calls.length).toBe(1);
  // expect(wrapper.find('input').first()).toHaveBeenCalled();
  // props.cityLocation = 'Worcester';
  // // props.onCityInputChange
  // // const onCityInputChange = jest.fn();
  // // props.onChange = { onCityInputChange };
  // const wrapper = setup({ ...props });

  // const action = onCityInputChange('Worcester');

  // wrapper.find('.input-text-city').simulate('change'), {target: {}};
  // const handleChange = jest.spyOn(Location, 'props.onCityInputChange');
  // handleChange.mockImplementation(city => [city, onCityInputChange]);

  // wrapper.find('.input-text-city').simulate('change');
  // expect(onCityInputChange).toBeTruthy();
  // const wrapper = setup(props);
  // const change = wrapper.find('.input-text-city').onChange;
  // change.simulate('change', { preventDefault() {} });
  // const submit = findByTestAttr(wrapper, '.input-text-city');
  // const wrapper = setup(props);
  // const spy = jest.spyOn(
  //   Location.prototype,
  //   //   Location.prototype,
  //   //   Location.onCityInputChange,
  //   //   wrapper.find('.input-text-city').onChange,
  //   'onChange'
  // );
  ///////////*********** */
  //   it('should return city when setCityLocation is dispatched', () => {
  //     let userCityLocation = 'Worcester';
  //     store.dispatch(actionCreators.setCityLocation(userCityLocation));
  //     const actions = store.getActions();
  //     const expectedPayload = {
  //       type: 'CITY_LOCATION',
  //       payload: userCityLocation,
  //     };
  //     expect(actions).to.deep.equal([expectedPayload]);
  //   });

  //   it('should return state when setStateLocation is dispatched', () => {
  //     let userStateLocation = 'Massachusetts';
  //     store.dispatch(actionCreators.setStateLocation(userStateLocation));
  //     const actions = store.getActions();
  //     const expectedStatePayload = {
  //       type: 'STATE_LOCATION',
  //       payload: userStateLocation,
  //     };
  //     expect(actions[1]).to.deep.equal(expectedStatePayload);
  //   });

  //   it('should execute onCityInputChange onChange of user city location', () => {
  //     const userCityLocation = 'Worcester';
  //     wrapper
  //       .find('.input-text-city')
  //       .simulate('change', { target: { value: userCityLocation } });
  //     expect(onCityInputChange.calledOnce);
  //     // ('onCityInputChange')(userCityLocation);
  //   });

  //   it('should execute onStateInputChange onChange of user state location', () => {
  //     const userStateLocation = 'Massachusetts';
  //     wrapper
  //       .find('.input-text-state')
  //       .simulate('change', { target: { value: userStateLocation } });
  //     expect(onStateInputChange.calledOnce);
  //   });

  //   it('should execute onLocationSubmit onSubmit of user state location', () => {
  //     wrapper.find('.submit-form').simulate('submit');
  //     expect(onLocationSubmit.calledOnce);
  //   });
});

//////////////////************** */
// import React from 'react';
// import { Location } from './Location';
// import { shallow } from 'enzyme';
// import renderer from 'react-test-renderer';

// describe('App Component', () => {
//   let props;

//   beforeEach(() => {
//     props = {
//       onSort: false,
//       cityLocation: '',
//       stateLocation: '',
//       buttonColor: '',
//     };
//   });

//   it('calls the getUsers function when the button is clicked', () => {
//     props.getUsers = jest.fn();
//     const wrapper = shallow(<Location {...props} />);
//     const spy = jest.spyOn(wrapper.instance().props, 'getUsers');

//     // wrapper.find('button').simulate('click');
//     // expect(spy).toHaveBeenCalled();
//   });

//   //   it('renders without crashing', () => {
//   //     const tree = renderer.create(<App {...props} />);

//   //     expect(tree.toJSON()).toMatchSnapshot();
//   //   });

//   //   it('renders an error message when a network error occurs', () => {
//   //     props.users.error = true;
//   //     const tree = renderer.create(<App {...props} />);

//   //     expect(tree.toJSON()).toMatchSnapshot();
//   //   });

//   //   it('renders the User component correctly', () => {
//   //     props.users.users = [
//   //       {
//   //         id: 1,
//   //         name: 'foo',
//   //       },
//   //     ];
//   //     const wrapper = shallow(<App {...props} />);

//   //     expect(wrapper.find('User').length).toBe(1);
//   //   });
// });

//

import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';
import sinon from 'sinon';
import thunk from 'redux-thunk';
import Location from './Location';
import moxios from 'moxios';

// import ConnectedUserInput, { UserInput } from '../src/components/UserInput'
import * as actionCreators from '../actions';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const initialState = {
  onSort: false,
  cityLocation: '',
  stateLocation: '',
  buttonColor: '',
};
const store = mockStore(initialState);

const onCityInputChange = sinon.spy();
const onStateInputChange = sinon.spy();
const onLocationSubmit = sinon.spy();
// const onStateInputChange = '';
// const onSubmit = sinon.spy();
// const changeUserLocationSpy = sinon.spy();
// const removeTechnologySpy = sinon.spy();
// const addTechnologySpy = sinon.spy();
// const changeUserTechnologyWeightSpy = sinon.spy();

const wrapper = mount(
  <Provider store={store}>
    <Location
      onCityInputChange={onCityInputChange}
      onStateInputChange={onStateInputChange}
      onLocationSubmit={onLocationSubmit}
      //   allTechs={['javascript', 'git', 'jquery', 'sass', 'rails', 'kafka', 'aws', 'graphql', 'bootstrap', 'rust', 'docker', 'redux', 'react native', 'express', 'react', 'vue', 'd3', 'ember', 'django', 'flask', 'sql', 'java', 'c#', 'python', 'php', 'c++', 'c', 'clojure', 'typescript', 'ruby', 'swift', 'objective-c', '.net', 'assembly', 'r', 'perl', 'vba', 'matlab', 'golang', 'scala', 'haskell', 'node', 'angular', '.net core', 'cordova', 'mysql', 'sqlite', 'postgresql', 'mongodb', 'oracle', 'redis', 'html', 'css'].sort()}
      //   onSubmit={onSubmit}
      //   changeUserLocation={changeUserLocationSpy}
      //   removeTechnology={removeTechnologySpy}
      //   addTechnology={addTechnologySpy}
      //   changeUserTechnologyWeight={changeUserTechnologyWeightSpy}
    />
  </Provider>
);

// const testTechInputInAllTec hs = 'css';

describe('(Component) UserInput', () => {
  it('renders', () => {
    expect(wrapper).to.have.length(1);
  });

  it('should return city when setCityLocation is dispatched', () => {
    let userCityLocation = 'Worcester';
    store.dispatch(actionCreators.setCityLocation(userCityLocation));
    const actions = store.getActions();
    const expectedPayload = {
      type: 'CITY_LOCATION',
      payload: userCityLocation,
    };
    expect(actions).to.deep.equal([expectedPayload]);
  });

  it('should return state when setStateLocation is dispatched', () => {
    let userStateLocation = 'Massachusetts';
    store.dispatch(actionCreators.setStateLocation(userStateLocation));
    const actions = store.getActions();
    const expectedStatePayload = {
      type: 'STATE_LOCATION',
      payload: userStateLocation,
    };
    expect(actions[1]).to.deep.equal(expectedStatePayload);
  });

  it('should execute onCityInputChange onChange of user city location', () => {
    const userCityLocation = 'Worcester';
    wrapper
      .find('.input-text-city')
      .simulate('change', { target: { value: userCityLocation } });
    expect(onCityInputChange.calledOnce);
    // ('onCityInputChange')(userCityLocation);
  });

  it('should execute onStateInputChange onChange of user state location', () => {
    const userStateLocation = 'Massachusetts';
    wrapper
      .find('.input-text-state')
      //   .find('.submit-form')
      .simulate('change', { target: { value: userStateLocation } });
    expect(onStateInputChange.calledOnce);
    // ('onCityInputChange')(userCityLocation);
  });

  it('should execute onLocationSubmit onSubmit of user state location', () => {
    wrapper.find('.submit-form').simulate('submit');
    expect(onLocationSubmit.calledOnce);
  });

  // it('calls onStateInputChange onChange of user state location', ()=>{
  //   props={
  //     onSort: false,
  //     cityLocation: '',
  //     stateLocation: '',
  //     buttonColor: '',
  //   }
  //   props.onStateInputChange = jest.fn();
  //   const wrapper = shallow(<Location {...props})
  // })

  //   it('should call onCityInputChange when city input changes', () => {
  //     wrapper.find('.input-text-city').simulate('change');
  //     expect(onC)
  //   });
  //   it('should return state when setStateLocation is dispatched', () => {
  //     let userStateLocation = 'Massachusetts';
  //     store.dispatch(actionCreators.setStateLocation(userStateLocation));
  //     const actions = store.getActions();
  //     const expectedPayload = {
  //       type: 'STATE_LOCATION',
  //       payload: userStateLocation,
  //     };
  //     expect(actions).to.deep.equal([expectedPayload]);
  //   });
  //   it('should execute onCityInputChange onChange of city location', () => {
  //     const userLocationValue = 'worcester';
  //     wrapper.find('');
  //   });
  //   it('should not have message display if loading is true', () => {});
});
