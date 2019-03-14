import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';
import Loader from '../components/Loader';
export class LoginView extends Component {
  state = {
    value: '',
    errors: '',
    data: '',
    loading: false
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    const { data, errors } = nextProps;
    if (errors) {
      this.setState({ errors: errors.data });
      this.setState({ loading: false });
    } else if (data) {
      
      if (data.admin_token) {
        localStorage.setItem('access_token', data.admin_token);
      } else if (data.user_token) {
        localStorage.setItem('access_token', data.user_token);
      }
      this.setState({ data: data });
      this.setState({ loading: false });
      this.props.history.push('/home');
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.setState({ loading: true });
    this.props.loginAction(data);
  };

  render() {
    return (
      <div>
        <h1>Store Manager</h1>
        <p id='welcome_text'>Welcome to the Store Manager Application</p>
        <div className='loader'>{this.state.loading ? <Loader /> : null}</div>
        <LoginForm
          changed={this.handleChange}
          FormSubmit={this.handleFormSubmit}
          errors={this.state.errors}
          data={this.state.data}
        />
      </div>
    );
  }
}
export const mapStateToProps = state => {
  return {
    data: state.login.data,
    errors: state.login.errors
  };
};
export default connect(
  mapStateToProps,
  { loginAction }
)(LoginView);
