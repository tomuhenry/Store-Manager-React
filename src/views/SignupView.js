import React, { Component } from 'react';
import SignupForm from '../components/SignupForm';
import { connect } from 'react-redux';
import signupAction from '../actions/signupAction';
import Header from '../components/Header';
import { toast } from 'react-toastify';
import Loader from '../components/Loader';

export class SignupView extends Component {
  state = {
    value: '',
    errors: {},
    data: '',
    loading: false
  };

  componentDidMount() {
    const token = localStorage.getItem('access_token')
    if (!token) {
      toast.error('Please login');
      this.props.history.push('/');
    }
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentWillReceiveProps(nextProps) {
    const { data, errors } = nextProps;
    if (errors) {
      this.setState({ errors: errors });
      this.setState({ loading: false });
    } else if (data) {
      this.setState({ data:data });
      this.setState({ loading: false });
    }
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const data = {
      email: this.state.email,
      name: this.state.name,
      password: this.state.password
    };
    this.setState({ loading: true });
    this.props.signupAction(data);
  };

  render() {
    return (
      <div>
        <Header />
        <p id='welcome_text'>Add new user to Store Manager</p>
        <div className='loader'>{this.state.loading ? <Loader /> : null}</div>
        <SignupForm
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
    data: state.signup.data,
    errors: state.signup.errors
  };
};
export default connect(
  mapStateToProps,
  { signupAction }
)(SignupView);
