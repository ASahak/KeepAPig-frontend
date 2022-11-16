import React from 'react';
import { Box, Icon, Heading } from '@chakra-ui/react';
import { RiArrowLeftLine } from 'react-icons/ri';
import { ComponentViewPropTypes } from './types';

const View: React.FC<ComponentViewPropTypes> = ({ title, goBack }) => (
  <Box display="flex" alignItems="center" p={4} boxShadow="xs">
    <Icon as={RiArrowLeftLine} fontSize={25} mr={3} cursor="pointer" onClick={goBack} />
    <Heading as="h3" fontSize="1.5rem" color="gray.700">
      {title}
    </Heading>
  </Box>
);
View.displayName = 'NavBarView';
export default View;
