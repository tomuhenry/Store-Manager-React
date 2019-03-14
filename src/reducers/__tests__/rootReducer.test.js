import rootReducer from '../rootReducer';

const initState = {
    login: {
      data: {},
      errors: {},
      success: false,
    },
   signup: {
     data: {},
     errors: {},
      success: false,
    },
    start: {
       start: false,
    }
 }

describe('Login Reducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toEqual(initState);
  });

});
