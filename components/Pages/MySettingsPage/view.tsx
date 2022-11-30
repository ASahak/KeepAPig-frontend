import React from 'react';
import { Box, Grid, GridItem, Container } from '@chakra-ui/react';
import NavBar from '@/components/Shared/NavBar';
import AvatarWrapper from './components/AvatarWrapper';

const View = () => (
  <Box>
    <NavBar title="My Settings" />
    <Container maxW="container.xl">
      <Grid templateColumns="1fr 2fr" gap={4}>
        <GridItem>
          <AvatarWrapper />
        </GridItem>
        <GridItem />
      </Grid>
    </Container>
  </Box>
);
View.displayName = 'MySettingsView';
export default View;
