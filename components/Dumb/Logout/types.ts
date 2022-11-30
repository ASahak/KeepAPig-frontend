import React from 'react';

export type ComponentPropTypes = {
  children: React.ReactElement | Array<React.ReactElement>;
};

export type ComponentViewPropTypes = {
  logout: () => void;
} & Pick<ComponentPropTypes, 'children'>;
