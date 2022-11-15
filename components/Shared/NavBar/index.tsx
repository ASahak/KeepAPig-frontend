import React from 'react';
import View from './view';
import { ComponentPropTypes } from './types';

const Container: React.FC<ComponentPropTypes> = ({ title, icon }) => {
  return <View title={title} icon={icon} />;
};
Container.displayName = 'NavBarContainer';
export default React.memo(Container);
