import actionTypes from './actionTypes';
import axios from 'axios';
import { toast } from 'react-toastify';

const signupUrl =
  'https://tomuhenry-storemanagerapp.herokuapp.com/store-manager/api/v1/auth/signup';

export const fetchsignupSuccess = payload => ({
  type: actionTypes.SIGNUP_SUCCESS,
  payload: payload
});

export const fetchsignupFailure = errors => ({
  type: actionTypes.SIGNUP_FAIL,
  errors
});

const signupAction = userData => dispatch => {
  const token = localStorage.getItem('access_token');

  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`
  };

  userData.rights = false;
  return axios
    .post(signupUrl, userData, {
      headers: headers
    })
    .then(response => {
      if (response.data.Message) {
        toast.success(`${response.data.Message}`);
        dispatch(fetchsignupSuccess(response.data));
      } else if (response.data.error) {
        toast.error(`${response.data.error}`);
        dispatch(fetchsignupFailure(response.data));
      } else if (response.data.Alert) {
        toast.error(`${response.data.Alert}`);
        dispatch(fetchsignupFailure(response.data));
      }
    })
    .catch(error => {
      if (error.response.data.Alert) {
        toast.error(error.response.data.Alert);
      }
      if (error.response.data.error) {
        toast.error(error.response.data.error);
      }
      dispatch(fetchsignupFailure(error.response));
    });
};

export default signupAction;
