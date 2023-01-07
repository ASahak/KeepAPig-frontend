import React from 'react';
import { Box, VStack, Grid, GridItem, Container } from '@chakra-ui/react';
import { MySettingsLoader } from '@/components/Shared/UI/ContentLoaders';
import NavBar from '@/components/Shared/NavBar';
import AvatarWrapper from './components/AvatarWrapper';
import { ViewPropTypes } from './types';

const View: React.FC<ViewPropTypes> = ({ isReady }) => (
  <VStack h="full" spacing={0}>
    <Box w="full">
      <NavBar title="My Settings" />
    </Box>
    <Container maxW="container.xl" flex={1}>
      {!isReady ? (
        <Grid templateColumns="1fr 3fr" gap={4}>
          <GridItem>
            <AvatarWrapper />
          </GridItem>
          <GridItem />
        </Grid>
      ) : (
        <MySettingsLoader />
      )}
    </Container>
  </VStack>
);
View.displayName = 'MySettingsView';
export default View;
