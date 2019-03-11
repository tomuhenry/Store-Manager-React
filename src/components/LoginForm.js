import React from 'react';
import Loader from '../components/Loader';

const LoginForm = props => {
  return (
    <div className='row justify-content-center flex-container'>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
      <div className='flex-login'>
      <h1>Login Here</h1>
        <form onSubmit={props.FormSubmit} id='login'>
          <input
            type='email'
            placeholder='Email...'
            id='email'
            name='email'
            onChange={props.changed}
          />
          <input
            type='password'
            placeholder='Password...'
            id='password'
            name='password'
            onChange={props.changed}
          />
          <input type='submit' value="Login" />
          <span id="message"/><br/>
          <a href=''>
            Forgot password?
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
