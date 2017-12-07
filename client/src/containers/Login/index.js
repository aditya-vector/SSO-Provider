import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {reduxForm} from 'redux-form';
import CssModules from 'react-css-modules';

import * as actionCreators from '../../actions/auth';
import PrimaryTextInput from '../../components/PrimaryTextInput';
import PrimaryButton from '../../components/PrimaryButton';
import InlineMessage from '../../components/InlineMessage';

import styles from './styles.css';

const mapStateToProps = ({auth}) => ({auth});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const validate = ({email, password}) => {
  const errors = {};
  if (!email) {
    errors.email = 'Required';
  } else if (email.length <= 6) {
    errors.email = 'email must be 6 characters or more';
  }

  if (!password) {
    errors.password = 'Required';
  } else if (password.length < 8) {
    errors.password = 'password must be 8 characters or more';
  }

  return errors;
};

class Login extends Component {

  render() {
    const {
      fields: {
        email,
        password
      },
      auth: {authFetch, errorMessage},
      handleSubmit,
      actions: {
        login
      }
    } = this.props;
    return (
      <form styleName={'form'} onSubmit={handleSubmit(data => login(data))}>
        <h1> Log in </h1>
        {email.touched && email.error && <InlineMessage type={'error'} message={email.error}/>}
        <PrimaryTextInput type={'text'} placeholder={'email'} {...email}/>
        {password.touched && password.error && <InlineMessage type={'error'} message={password.error}/>}
        <PrimaryTextInput type={'password'} placeholder={'Password'} {...password}/>

        <div className={'clear-fix'} styleName={'actions'}>
          <PrimaryButton onClick={handleSubmit(data => login(data))} loading={authFetch}>LOG IN</PrimaryButton>
        </div>
        <div>
          {errorMessage}
        </div>
      </form>
      );
  }
}

Login.propTypes = {
  fields: PropTypes.shape({
    email: PropTypes.object,
    password: PropTypes.object
  }),
  handleSubmit: PropTypes.func,
  submitting: PropTypes.bool,

  // Our defined Props
  auth: PropTypes.shape({
    errorMessage: PropTypes.string,
    authFetch: PropTypes.bool.isRequired,
    authFailed: PropTypes.bool.isRequired
  }),
  actions: PropTypes.object
};


export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
  form: 'login',
  fields: ['email', 'password'],
  validate
})(CssModules(Login, styles)));
