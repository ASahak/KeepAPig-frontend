import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { RiListSettingsLine } from 'react-icons/ri';
import { ComponentPropTypes } from './types';

const View: React.FC<ComponentPropTypes> = ({ goTo }) => (
  <Button w={10} h={10} borderRadius="full" onClick={goTo}>
    <Icon fontSize="22px" as={RiListSettingsLine} />
  </Button>
);
View.displayName = 'HamburgerMenuView';
export default View;
