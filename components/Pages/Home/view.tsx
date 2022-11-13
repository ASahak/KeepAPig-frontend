import React from 'react';
import { Box } from '@chakra-ui/react';
import HamburgerMenu from '@/components/Dumb/HamburgerMenu';

const View = () => <Box position="relative">
  <Box
    position="absolute"
    top={5}
    right={5}
  >
    <HamburgerMenu />
  </Box>
</Box>
View.displayName = 'HomeView';
export default View;
