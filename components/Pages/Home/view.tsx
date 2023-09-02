import React from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { HamburgerMenu, Logout } from '@/components/Dumb';
import { SCOPES } from '@/common/constants';
import Village from './components/Village';
import PermissionGate from '@/hoc/PermissionGate';

const View = () => (
  <Box position="relative" h="full">
    <Village />
    <PermissionGate scope={SCOPES.LOGGED_USER}>
      <Box position="absolute" top={5} right={5}>
        <HamburgerMenu />
      </Box>
    </PermissionGate>
    <PermissionGate scope={SCOPES.LOGGED_USER}>
      <Box position="absolute" bottom={5} right={5}>
        <Logout>
          <Button w={10} h={10} borderRadius="full">
            <Icon fontSize="22px" as={RiLogoutBoxRLine} />
          </Button>
        </Logout>
      </Box>
    </PermissionGate>
  </Box>
);
View.displayName = 'HomeView';
export default View;
