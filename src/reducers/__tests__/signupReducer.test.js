import signupReducer from '../signupReducer';
import actionTypes from '../../actions/actionTypes';

const initState = {
  success: false,
  data: {},
  errors: {}
};

describe('Login Reducer', () => {
  it('should return the initial state', () => {
    expect(signupReducer(undefined, {})).toEqual(initState);
  });

  it('In case of signup Success', () => {
    expect(
      signupReducer(initState, {
        type: actionTypes.SIGNUP_SUCCESS,
        payload: { email: 'email.com', access_token: 'mytoken' }
      })
    ).toEqual({
      success: true,
      data: { access_token: 'mytoken', email: 'email.com' },
      errors: null
    });
  });

  it('In case of signup fail', () => {
    expect(
      signupReducer(initState, {
        type: actionTypes.SIGNUP_FAIL,
        payload: { token: 'mytoken' }
      })
    ).toEqual({
      success: false,
      data: null,
      errors: undefined
    });
  });
});
