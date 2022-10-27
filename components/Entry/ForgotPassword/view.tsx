import React from 'react';
import { Controller } from 'react-hook-form';
import Link from 'next/link';
import { Box, Heading, Input, FormControl, FormLabel, Button, Text, Divider, Badge } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { ComponentPropTypes } from './types';

const View: React.FC<ComponentPropTypes> = ({ formState, onSubmit }) => (
  <Box alignItems="center" display="flex" justifyContent="center" h="100vh" w="100vw" bgColor="gray.50">
    <Box
      w={{ sm: 450, xs: '100vw' }}
      h={{ sm: 'fit-content', xs: '100vh' }}
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      bgColor="white"
      borderRadius={3}
      py={8}
      px={10}
      boxShadow="gray.100"
    >
      <Heading as="h1" fontSize="1.5rem" mb="1.6rem" textAlign="center" textTransform="uppercase" color="gray.700">
        Forgot Password
      </Heading>
      <form onSubmit={formState.handleSubmit(onSubmit)} className="form__full-width">
        <Controller
          name="email"
          control={formState.control}
          render={({ field: { onChange, value } }) => (
            <FormControl mb={3}>
              <FormLabel>Email</FormLabel>
              <Input type="email" size="md" onChange={onChange} value={value || ''} w="full" variant="whiteTinted" />
              <ErrorMessage
                errors={formState.errors}
                name="email"
                render={({ message }) => (
                  <Text size="sm" variant="errorMessage" colorScheme="red">
                    {message}
                  </Text>
                )}
              />
            </FormControl>
          )}
        />
        {/*<Controller*/}
        {/*  name="password"*/}
        {/*  control={formState.control}*/}
        {/*  render={({ field: { onChange, value } }) => (*/}
        {/*    <FormControl mb={3}>*/}
        {/*      <FormLabel>Password</FormLabel>*/}
        {/*      <Input type="password" size="md" onChange={onChange} value={value || ''} w="full" variant="whiteTinted" />*/}
        {/*      <ErrorMessage*/}
        {/*        errors={formState.errors}*/}
        {/*        name="password"*/}
        {/*        render={({ message }) => (*/}
        {/*          <Text size="sm" variant="errorMessage" colorScheme="red">*/}
        {/*            {message}*/}
        {/*          </Text>*/}
        {/*        )}*/}
        {/*      />*/}
        {/*    </FormControl>*/}
        {/*  )}*/}
        {/*/>*/}
        <Button mt={1} mb={3} isLoading={formState.formLoading} type="submit" width="full" variant="darcula">
          Send
        </Button>
        <Box my={3} position="relative" display="flex" alignItems="center" justifyContent="center">
          <Divider />
          <Badge borderRadius={4} position="absolute">
            OR
          </Badge>
        </Box>
        <Box textAlign="center" fontSize="sm" color="gray.600">
          Go to{' '}
          <Link href="/login">
            <Text textDecoration="underline" display="inline" cursor="pointer">
              SIGN IN
            </Text>
          </Link>
        </Box>
      </form>
    </Box>
  </Box>
);
View.displayName = 'ForgotPasswordView';
export default React.memo(View);
