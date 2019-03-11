import React, { Component } from 'react';
import LoginForm from '../components/LoginForm';
import { connect } from 'react-redux';
import loginAction from '../actions/loginAction';
import '../css/login.css';

export class LoginView extends Component {
  state = {
    value: '',
    errors: {},
    data: ''
  };
  componentDidMount() {}

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    const { data, errors } = nextProps;
    if (errors) {      
      this.setState({ errors: errors.data});
    } else if (data) {
      this.setState({ data: data});
      this.props.history.push('/home');
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginAction(data);
  };

  render() {
    return (
      <div>
        <h1>Store Manager</h1>
        <p id="welcome_text">Welcome to the Store Manager Application</p>
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
export const mapStateToProps = (state) => {
  
  return {
    data: state.login.data,
    errors: state.login.errors,
  };
};
export default connect(
  mapStateToProps,
  { loginAction }
)(LoginView);