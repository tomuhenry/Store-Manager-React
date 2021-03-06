import loginReducer from '../loginReducer';
import actionTypes from '../../actions/actionTypes';

const initState = {
  success: false,
  data: {},
  errors: {}
};

describe('Login Reducer', () => {
  it('should return the initial state', () => {
    expect(loginReducer(undefined, {})).toEqual(initState);
  });

  it('In case of Login Success', () => {
    expect(
      loginReducer(initState, {
        type: actionTypes.LOGIN_SUCCESS,
        payload: { email: 'email.com', access_token: 'mytoken' }
      })
    ).toEqual({
      success: true,
      data: { access_token: 'mytoken', email: 'email.com' },
      errors: null
    });
  });

  it('In case of Login fail', () => {
    expect(
      loginReducer(initState, {
        type: actionTypes.LOGIN_FAIL,
        payload: { token: 'mytoken' }
      })
    ).toEqual({
      success: false,
      data: null,
      errors: undefined
    });
  });
});
