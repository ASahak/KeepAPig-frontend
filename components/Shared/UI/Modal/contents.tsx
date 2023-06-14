import React from 'react';
import MODAL_KEYS from './modalKeys';
import { IModalReturn, RenderModalType } from './types';
import { EnableTwoFactorAuth } from '@/components/Shared/ModalContents';
import { UnknownObjectType } from '@/common/types';

export default (props: UnknownObjectType | undefined): RenderModalType => {
  const _ExtendSchema = (Component: React.FC, Title: string | undefined, additionalProps?: UnknownObjectType): IModalReturn => ({
    Title,
    Content: () => <Component {...(props || {})} />,
    modalProps: {
      ...(additionalProps || {})
    }
  });

  return {
    [MODAL_KEYS.SHOW_TWO_FACTOR_AUTH]: () => _ExtendSchema(EnableTwoFactorAuth, 'Enable two factor auth', { size: 'lg' })
  };
};
