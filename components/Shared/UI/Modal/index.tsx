import React from 'react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton } from '@chakra-ui/react';
import RenderModal from './contents';
import { ModalPropTypes, IModalReturn } from './types';

const CustomModal: React.FC<ModalPropTypes> = ({ close, isOpen, activeKey, contentProps }) => {
  const renderModalHandler = (): IModalReturn => {
    return RenderModal(contentProps)[activeKey!]();
  };

  const ModalState = (activeKey ? renderModalHandler() : {}) as IModalReturn;

  return (
    <Modal isOpen={isOpen} onClose={close} {...ModalState.modalProps}>
      <ModalOverlay />
      <ModalContent>
        {ModalState.Title ? <ModalHeader>{ModalState.Title}</ModalHeader> : null}
        <ModalCloseButton />
        <ModalBody>{ModalState.Content?.()}</ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default React.memo(CustomModal);
