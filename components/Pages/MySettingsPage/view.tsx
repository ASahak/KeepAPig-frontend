import React from 'react';
import { Box, VStack, Grid, GridItem, Container, Heading, Divider, Button } from '@chakra-ui/react';
import { MySettingsLoader } from '@/components/Shared/UI/ContentLoaders';
import { Loadable } from '@/components/Smart';
import NavBar from '@/components/Shared/NavBar';
import AvatarWrapper from './components/AvatarWrapper';
import TwoFactor from './components/TwoFactor';
import { ViewPropTypes } from './types';

const View: React.FC<ViewPropTypes> = ({ isReady }) => (
  <VStack h="full" spacing={0}>
    <Box w="full">
      <NavBar title="My Settings" />
    </Box>
    <Container maxW="container.xl" flex={1}>
      <Loadable
        isReady={isReady}
        Fallback={<MySettingsLoader />}
        Component={
          <Grid templateColumns="1fr 3fr" h="full">
            <GridItem p={4} boxShadow="1px 0px 0px 0px rgba(0, 0, 0, 0.05)">
              <AvatarWrapper />
            </GridItem>
            <GridItem p={4}>
              <VStack alignItems="flex-start" spacing={4}>
                <Heading size="lg">Account Settings</Heading>
                <Divider />
                <Box w="full">
                  <TwoFactor />
                </Box>
              </VStack>
            </GridItem>
          </Grid>
        }
      />
    </Container>
  </VStack>
);
View.displayName = 'MySettingsView';
export default View;
