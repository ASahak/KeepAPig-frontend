import React from 'react';
import { Box, Icon, Heading } from '@chakra-ui/react';
import { ComponentPropTypes } from './types';

const View: React.FC<ComponentPropTypes> = ({ title, icon }) => (
  <Box>
    <Icon as={icon} />
    <Heading as="h3" fontSize="1.5rem" color="gray.700">
      {title}
    </Heading>
  </Box>
);
View.displayName = 'NavBarView';
export default View;
