import React from 'react';
import { Button, Icon } from '@chakra-ui/react';
import { RiListSettingsLine } from 'react-icons/ri';

const View = () => (
  <Button
    w={10}
    h={10}
    borderRadius="full"
  >
    <Icon fontSize="22px" as={RiListSettingsLine} />
  </Button>
);
View.displayName = 'HamburgerMenuView';
export default View;
