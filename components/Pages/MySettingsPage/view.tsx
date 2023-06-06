import React from 'react';
import { Box, VStack, Grid, GridItem, Container, Heading, Divider, Button, Icon, Spinner, HStack } from '@chakra-ui/react';
import { RiLogoutBoxRLine } from 'react-icons/ri';
import { MySettingsLoader } from '@/components/Shared/UI/ContentLoaders';
import { Loadable } from '@/components/Smart';
import NavBar from '@/components/Shared/NavBar';
import AvatarWrapper from './components/AvatarWrapper';
import TwoFactor from './components/TwoFactor';
import { ViewPropTypes } from './types';
import { Logout } from '@/components/Dumb';

const View: React.FC<ViewPropTypes> = ({ isReady, isSaving }) => (
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
            <GridItem p={4} boxShadow="1px 0px 0px 0px rgba(0, 0, 0, 0.05)" display="flex" flexDirection="column">
              <Box flex="1">
                <AvatarWrapper />
              </Box>
              <Logout>
                <Button variant="ghost" textAlign="center" w="full">
                  Log out
                  <Icon fontSize="22px" ml={2} as={RiLogoutBoxRLine} />
                </Button>
              </Logout>
            </GridItem>
            <GridItem p={4}>
              <VStack alignItems="flex-start" spacing={4}>
                <HStack spacing={0} w="full" justifyContent="space-between">
                  <Heading size="lg">Account Settings</Heading>
                  {isSaving ? <Spinner size="sm" color="gray.500" /> : null}
                </HStack>
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
