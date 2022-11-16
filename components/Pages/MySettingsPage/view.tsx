import React from 'react';
import { Box } from '@chakra-ui/react';
import NavBar from '@/components/Shared/NavBar';

const View = () => (
  <Box>
    <NavBar title="My Settings" />
  </Box>
);
View.displayName = 'MySettingsView';
export default View;
