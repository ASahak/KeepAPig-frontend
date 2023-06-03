import React from 'react';

export type ComponentViewPropsType = {
  avatar: string;
  fileInputRef: React.RefObject<HTMLInputElement>;
  triggerOnFile: () => void;
  isUploading: boolean;
  isDeleting: boolean;
  fileChange: (...args: any[]) => any;
  deleteAvatar: () => void;
};
