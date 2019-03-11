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
        data: { email: 'email.com', access_token: 'mytoken' },
        errors: null,
    });
  });
});
