import React from 'react';
import { shallow } from 'enzyme';
import { mount } from 'enzyme';
import { expect } from 'chai';
// import sinon from 'sinon'
import Loading from './Loading';

// import ConnectedUserInput, { UserInput } from '../src/components/UserInput'
// import * as actionCreators from '../src/actions/actionCreators.js';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

const middlewares = [];
const mockStore = configureStore(middlewares);
const initialState = {
  jobData: {
    jobDataCopy: [],
    loading: false,
    error: false,
    locationSubmitted: false,
    message: 'Please enter location',
  },
};
const store = mockStore(initialState);

// const onSubmit = sinon.spy();
// const changeUserLocationSpy = sinon.spy();
// const removeTechnologySpy = sinon.spy();
// const addTechnologySpy = sinon.spy();
// const changeUserTechnologyWeightSpy = sinon.spy();

const wrapper = mount(
  <Provider store={store}>
    <Loading
    //   allTechs={['javascript', 'git', 'jquery', 'sass', 'rails', 'kafka', 'aws', 'graphql', 'bootstrap', 'rust', 'docker', 'redux', 'react native', 'express', 'react', 'vue', 'd3', 'ember', 'django', 'flask', 'sql', 'java', 'c#', 'python', 'php', 'c++', 'c', 'clojure', 'typescript', 'ruby', 'swift', 'objective-c', '.net', 'assembly', 'r', 'perl', 'vba', 'matlab', 'golang', 'scala', 'haskell', 'node', 'angular', '.net core', 'cordova', 'mysql', 'sqlite', 'postgresql', 'mongodb', 'oracle', 'redis', 'html', 'css'].sort()}
    //   onSubmit={onSubmit}
    //   changeUserLocation={changeUserLocationSpy}
    //   removeTechnology={removeTechnologySpy}
    //   addTechnology={addTechnologySpy}
    //   changeUserTechnologyWeight={changeUserTechnologyWeightSpy}
    />
  </Provider>
);

const testTechInputInAllTechs = 'css';

describe('(Component) UserInput', () => {
  it('renders...', () => {
    expect(wrapper).to.have.length(1);
  });
});
// import React from 'react';
// import { Provider } from 'react-redux';
// import configureStore from 'redux-mock-store';
// // import configureStore from 'redux-mock-store';
// // import configureStore from 'redux-mock-store';

// import Loading from './Loading';

// const mockStore = configureStore([]);

// describe('My Connected React-Redux Component', () => {
//   let store;
//   let component;

//   beforeEach(() => {
//     store = mockStore({
//       //   myState: 'sample test',
//       jobData: {
//         jobDataCopy: [],
//         loading: false,
//         error: false,
//         locationSubmitted: false,
//         message: 'Please enter location',
//       },
//     });
//     component = renderer.create(
//       <Provider store={store}>
//         <Loading />
//       </Provider>
//     );
//   });
//   it('should render with given stte from redux store', () => {
//     expect(component.toJSON()).toMatchSnapshot();
//   });
// });
//   it('should dispatch an action on button click', () => {});
// });

// import React from 'react';
// import { shallow } from 'enzyme';

// import Enzyme from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({
//   adapter: new EnzymeAdapter(),
//   disableLifecycleMethods: true,
// });

// import { storeFactory } from '../test/testUtils';
// import Loading from './Loading';

// const initialState = {
//   jobData: {
//     jobDataCopy: [],
//     loading: false,
//     error: false,
//     locationSubmitted: false,
//     message: 'Please enter location',
//   },
// };
// const setup = (state = initialState) => {
//   const store = storeFactory(state);
//   const wrapper = shallow(<Loading store={store} />)
//     .dive()
//     .dive();
//   return wrapper;
// };

// describe('redux properties', () => {
//   test('has access to `success` state', () => {
//     const jobData = {
//       jobDataCopy: [],
//       loading: true,
//       error: false,
//       locationSubmitted: false,
//       message: 'Please enter location',
//     };
//     const wrapper = setup({ jobData });
//     const successProp = wrapper.instance().props.jobData;
//     // expect(successProp).toBe(success);
//   });
// });

// import React from 'react';
// import { shallow } from 'enzyme';

// import Enzyme from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';

// Enzyme.configure({
//   adapter: new EnzymeAdapter(),
//   disableLifecycleMethods: true,
// });

// import { storeFactory } from '../test/testUtils';
// import Loading from './Loading';

// const setup = (
//   state = {
//     jobData: {
//       jobDataCopy: [],
//       loading: false,
//       error: false,
//       locationSubmitted: false,
//       message: 'Please enter location',
//     },
//   }
// ) => {
//   const store = storeFactory(state);
//   const wrapper = shallow(<Loading store={store} />)
//     .dive()
//     .dive();
//   return wrapper;
// };

// describe('redux properties', () => {
//   test('has access to `success` state', () => {
//     const testarr = {
//       jobData: {
//         jobDataCopy: [],
//         // resultArray: [],
//         loading: false,
//         error: false,
//         locationSubmitted: false,
//         message: 'Please enter location',
//       },
//     };
//     const wrapper = setup(testarr);
//     const messageProp = wrapper.instance().props.jobData.message;
//     expect(messageProp).toBe('test message');
//   });
// });

// import React from 'react';
// import { shallow } from 'enzyme';
// import { mount } from 'enzyme';
// import Provider from 'react-redux';

// import Loading from './Loading';
// const message = 'test message';

// const setup = (state = { message }) => {
//   const store = storeFactory(state);
//   const wrapper = shallow(<Loading store={store} />)
//     .dive()
//     // .dive()
//     .dive();
//   console.log(wrapper.debug());
//   return wrapper;
// };
// // const messageText = 'This is the message text';
// // const loading = true;

// // const middlewares = [];
// // const mockStore = configureStore(middlewares);
// const wrapper = mount(
//   <Provider store={store}>
//     <Loading messageText={'test'} loading={false} />
//   </Provider>
// );

// describe('Loading Component', () => {
//   it('renders...', () => {
//     expect(wrapper).toBe.have.length(1);
//   });
//   test('has access to "message" state', () => {
//     const message = 'test message';
//     const wrapper = setup({ message });
//     const messageProp = wrapper.instance().props.message;
//   });
// });
// const initialState = {
//   loading: false,
//   message: 'This is the message text',
// };
// const storeFactory = initialState => {
//   const createStoreWithMiddleware = applyMiddleware(...middlewares)(
//     createStore
//   );
//   return createStoreWithMiddleware(rootReducer, initialState);
// };
// const store = storeFactory(initialState);
// export const findByTestAttr = (wrapper, val) => {
//   return wrapper.find(`[data-test="${val}"]`);
// };

// import { storeFactory } from '../test/testUtils';
// import Enzyme from 'enzyme';
// import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
