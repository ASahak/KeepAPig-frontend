import React from 'react';
import { Box } from '@chakra-ui/react';
import { RiListSettingsLine } from 'react-icons/ri';
import NavBar from '@/components/Shared/NavBar';

const View = () => (
  <Box>
    <NavBar title="My Settings" icon={RiListSettingsLine} />
  </Box>
);
View.displayName = 'MySettingsView';
export default View;
