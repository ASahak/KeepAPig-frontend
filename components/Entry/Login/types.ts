import PropTypes from 'prop-types';

const ComponentPropTypes = {
  onSignIn: PropTypes.func.isRequired
};

const DefaultComponentPropTypes = {};

export type Inputs = {
  email: string;
  password: string;
  rememberMe: boolean;
};

export { ComponentPropTypes, DefaultComponentPropTypes };
