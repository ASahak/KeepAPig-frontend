import React from 'react';

export type ComponentViewPropsType = {
  avatar: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  triggerOnFile: () => void;
  fileChange: (...args: any[]) => any;
};
