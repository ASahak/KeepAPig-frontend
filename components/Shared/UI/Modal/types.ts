import React from 'react';
import MODAL_KEYS from './modalKeys';
import { UnknownObjectType } from '@/common/types';

export type RenderModalType = { [key in MODAL_KEYS]: () => IModalReturn };

export type ModalPropTypes = {
  close: () => any;
  isOpen: boolean;
  activeKey: MODAL_KEYS | null;
  contentProps?: UnknownObjectType;
  shouldCloseOnOverlayClick?: boolean;
  hideCloseIcon?: boolean;
};

export interface IModalReturn {
  Content: () => React.ReactElement<any, any>;
  Title: string | undefined;
  modalProps: UnknownObjectType;
}
