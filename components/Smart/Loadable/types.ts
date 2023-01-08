import React from 'react';

export type ComponentPropsType = {
  isReady: boolean;
  minDelay?: number;
  emitLoaded?: () => void;
  Fallback: React.ReactElement;
  Component: React.ReactElement;
};
