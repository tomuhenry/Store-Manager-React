import actionTypes from './actionTypes';
import axios from 'axios';

export const fetchLoginSuccess = payload => ({
  type: actionTypes.LOGIN_SUCCESS,
  payload: payload
});

export const fetchLoginFailure = error => ({
  type: actionTypes.LOGIN_FAIL,
  error
});

const loginAction = userData => dispatch => {
  return axios
    .post(
      'https://tomuhenry-storemanagerapp.herokuapp.com/store-manager/api/v1/auth/login',
      userData
    )
    .then(response => {
      if (response.data.user_token) {
        dispatch(fetchLoginSuccess(response.data));
        window.localStorage.setItem('access_token', response.data.user_token);
      } else if (response.data.admin_token) {
        dispatch(fetchLoginSuccess(response.data));
        window.localStorage.setItem('access_token', response.data.admin_token);
      } else if (response.data.Alert) {
        document.getElementById('message').innerHTML = `${response.data.Alert}`;
        dispatch(fetchLoginFailure(response.data));
      }
    })
    .catch(error => {
      document.getElementById('message').innerHTML =
        'Login failed! check login info';
      dispatch(fetchLoginFailure(error.response));
    });
};

export default loginAction;
