import React from 'react';

const SignupForm = props => {
  return (
    <div className='row justify-content-center flex-container'>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <div className='flex-login'>
        <h1>Signup A User Here</h1>
        <form onSubmit={props.FormSubmit} id='signup'>
        <input
            type='text'
            placeholder='Username...'
            name='name'
            onChange={props.changed}
          />
          <input
            type='email'
            placeholder='Email...'
            name='email'
            onChange={props.changed}
          />
          <input
            type='password'
            placeholder='Password...'
            name='password'
            onChange={props.changed}
          />    
          <input type='submit' value='Add User' />
          <span id='message' />
          <br />
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
