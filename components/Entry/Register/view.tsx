import React from 'react';
import { Controller } from 'react-hook-form';
import Link from 'next/link';
import { Input, Box, FormControl, FormLabel, Text, Badge, Divider, Button, Heading } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import { ComponentPropTypes } from './types';

const View: React.FC<ComponentPropTypes> = ({ formState, onSignUp }) => (
  <Box alignItems="center" display="flex" justifyContent="center" h="100vh" w="100vw" bgColor="gray.50">
    <Box
      w={{ sm: 450, xs: '100vw' }}
      h={{ sm: 'fit-content', xs: '100vh' }}
      bg="#fff"
      boxShadow="gray.100"
      borderRadius={4}
      p="20px 30px"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
    >
      <Heading
        as="h1"
        fontSize="1.5rem"
        mb="1.6rem"
        textAlign="center"
        textTransform="uppercase"
        color="gray.700"
      >Sign Up</Heading>
      <form onSubmit={formState.handleSubmit(onSignUp)} className="form__full-width">
        <Controller
          name="fullName"
          control={formState.control}
          render={({ field: { onChange, value, name } }) => (
            <FormControl mb={3}>
              <FormLabel mb={0}>Full Name</FormLabel>
              <Input
                size="md"
                onChange={onChange}
                value={value || ''}
                w="full"
                variant="whiteTinted"
              />
              <ErrorMessage errors={formState.errors} name={name} render={({ message }) => <Text size="sm" variant="errorMessage" colorScheme="red">{message}</Text>} />
            </FormControl>
          )}
        />
        <Controller
          name="email"
          control={formState.control}
          render={({ field: { onChange, value, name } }) => (
            <FormControl mb={3}>
              <FormLabel mb={0}>Email</FormLabel>
              <Input
                type="email"
                size="md"
                onChange={onChange}
                value={value || ''}
                w="full"
                variant="whiteTinted"
              />
              <ErrorMessage errors={formState.errors} name={name} render={({ message }) => <Text size="sm" variant="errorMessage" colorScheme="red">{message}</Text>} />
            </FormControl>
          )}
        />
        <Controller
          name="password"
          control={formState.control}
          render={({ field: { onChange, value, name } }) => (
            <FormControl mb={3}>
              <FormLabel mb={0}>Password</FormLabel>
              <Input
                type="password"
                size="md"
                onChange={onChange}
                value={value || ''}
                w="full"
                variant="whiteTinted"
              />
              <ErrorMessage errors={formState.errors} name={name} render={({ message }) => <Text size="sm" variant="errorMessage" colorScheme="red">{message}</Text>} />
            </FormControl>
          )}
        />
        <Controller
          name="confirmPassword"
          control={formState.control}
          render={({ field: { onChange, value, name } }) => (
            <FormControl mb={3}>
              <FormLabel mb={0}>Confirm password</FormLabel>
              <Input
                type="password"
                size="md"
                onChange={onChange}
                value={value || ''}
                w="full"
                variant="whiteTinted"
              />
              <ErrorMessage errors={formState.errors} name={name} render={({ message }) => <Text size="sm" variant="errorMessage" colorScheme="red">{message}</Text>} />
            </FormControl>
          )}
        />
        <Button
          mt={2}
          isLoading={formState.formLoading}
          type="submit"
          width="full"
          variant="darcula"
        >
          Sign Up
        </Button>
        <Box
          mt={5}
          mb={3}
          position="relative"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Divider />
          <Badge
            borderRadius={4}
            position="absolute"
          >OR</Badge>
        </Box>
        <Text align="center" fontSize="sm" color="gray.600">
          Already user?
          {' '}
          <Link href="/login">SIGN IN</Link>
        </Text>
      </form>
    </Box>
  </Box>
);
View.displayName = 'RegisterView';
export default View;
