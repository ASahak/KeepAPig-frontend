import React from 'react';
import { ComponentViewPropTypes } from './types';

const View: React.FC<ComponentViewPropTypes> = ({ logout, children }) =>
  React.cloneElement(children as React.ReactElement, {
    onClick: logout
  });
View.displayName = 'LogoutView';
export default View;
