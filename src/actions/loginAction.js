import actionTypes from './actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

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
      } else if (response.data.admin_token) {
        dispatch(fetchLoginSuccess(response.data));
      } else if (response.data.Alert) {
        document.getElementById('message').innerHTML = `${response.data.Alert}`;
        dispatch(fetchLoginFailure(response.data));
      }
    })
    .catch(error => {
      toast.error(error.response.data.error);
      dispatch(fetchLoginFailure(error.response));
    });
};

export default loginAction;
