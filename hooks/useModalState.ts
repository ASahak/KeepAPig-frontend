import { useState, useCallback } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import MODAL_KEYS from '../components/Shared/UI/Modal/modalKeys';
import { UnknownObjectType } from '@/common/types';

export const useModalState = (defaultIsOpen?: boolean, defaultActiveKey?: MODAL_KEYS) => {
  const [activeKey, setActiveKey] = useState<MODAL_KEYS | null>(defaultActiveKey || null);
  const [contentProps, setContentProps] = useState<UnknownObjectType | undefined>({});
  const chakraModal = useDisclosure({ defaultIsOpen: !!defaultIsOpen });

  const onOpen = useCallback((key: MODAL_KEYS | null, _contentProps?: UnknownObjectType | undefined) => {
    setContentProps(_contentProps);
    setActiveKey(key);
    chakraModal.onOpen();
  }, []);

  const onClose = useCallback(() => {
    chakraModal.onClose();
    setActiveKey(null);
    setContentProps({});
  }, []);

  return {
    isOpen: chakraModal.isOpen,
    onOpen,
    onClose,
    activeKey,
    contentProps,
    setContentProps
  };
};
