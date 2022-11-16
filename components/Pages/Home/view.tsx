import React from 'react';
import { Box, Button, Icon } from '@chakra-ui/react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { HamburgerMenu, Logout } from '@/components/Dumb';

const View = () => (
  <Box position="relative" h="full">
    <Box position="absolute" top={5} right={5}>
      <HamburgerMenu />
    </Box>
    <Box position="absolute" bottom={5} right={5}>
      <Logout>
        <Button w={10} h={10} borderRadius="full">
          <Icon fontSize="22px" as={RiLogoutBoxRLine} />
        </Button>
      </Logout>
    </Box>
  </Box>
);
View.displayName = 'HomeView';
export default View;
