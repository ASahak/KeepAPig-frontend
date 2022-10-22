import React from 'react';
import { Box } from '@chakra-ui/react';
import GoogleAuth from './components/google';

const OAuth = () => (
  <Box
    textAlign="center"
    mt="30px"
    mb="5px"
    display="flex"
    alignItems="center"
    justifyContent="center"
  >
    <GoogleAuth />
  </Box>
);
export default React.memo(OAuth);
