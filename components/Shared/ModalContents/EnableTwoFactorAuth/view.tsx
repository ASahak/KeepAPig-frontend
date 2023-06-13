import React from 'react';
import { Box, Spinner, Text } from '@chakra-ui/react';
import { Image } from '@/components/Shared/UI';
import { ComponentViewPropsType } from './types';

const View: React.FC<ComponentViewPropsType> = ({ isFetching, qrCode }) => (
  <Box h="50vh">
    {isFetching ? (
      <Box display="flex" justifyContent="center" alignItems="center" minH="full">
        <Spinner size="lg" />
      </Box>
    ) : qrCode ? (
      <Box>
        <Box display="flex" justifyContent="center" alignItems="center" flexDirection="column">
          <Image src={qrCode as string} width={200} height={200} priority alt="qrCode" />
          <Text>Please scan this QR</Text>
        </Box>
      </Box>
    ) : null}
  </Box>
);
View.displayName = 'EnableTwoFactorAuthView';
export default View;
