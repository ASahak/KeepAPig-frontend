import React from 'react';
import { Box } from '@chakra-ui/react';
import { Image } from '@/components/Shared/UI';

const View = () => (
  <Box display="flex" alignItems="center" justifyContent="center" p={4} width="full" height={200}>
    <Image
      src="https://images.unsplash.com/photo-1657299143363-621ba0a1e6ac?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=408&q=80"
      width={130}
      height={130}
      priority
      isCircle
    />
  </Box>
);
View.displayName = 'MySettingAvatarWrapperView';
export default View;
