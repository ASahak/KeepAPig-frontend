import React from 'react';
import { Controller } from 'react-hook-form';
import Link from 'next/link';
import { ComponentPropTypes } from './types';
import { Box, Heading, Input, FormControl, FormLabel, Button, Text, Checkbox, Badge, Divider } from '@chakra-ui/react';
import { ErrorMessage } from '@hookform/error-message';
import OAuth from '@/components/Entry/OAuth';

const View: React.FC<ComponentPropTypes> = ({ onSignIn, formState }) => (
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
        Sign In
      </Heading>
      <form onSubmit={formState.handleSubmit(onSignIn)} className="form__full-width">
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
        <Controller
          name="password"
          control={formState.control}
          render={({ field: { onChange, value } }) => (
            <FormControl mb={3}>
              <FormLabel>Password</FormLabel>
              <Input type="password" size="md" onChange={onChange} value={value || ''} w="full" variant="whiteTinted" />
              <ErrorMessage
                errors={formState.errors}
                name="password"
                render={({ message }) => (
                  <Text size="sm" variant="errorMessage" colorScheme="red">
                    {message}
                  </Text>
                )}
              />
            </FormControl>
          )}
        />
        <Controller
          name="rememberMe"
          control={formState.control}
          render={({ field: { onChange } }) => (
            <FormControl mb={3}>
              <Checkbox onChange={onChange} variant="darcula">
                Remember me
              </Checkbox>
            </FormControl>
          )}
        />
        <Button mt={1} isLoading={formState.formLoading} type="submit" width="full" variant="darcula">
          Sign In
        </Button>
        <Text textAlign="right" mt={1} color="gray.600" fontSize="14px" cursor="pointer" textDecoration="underline">
          <Link href="/forgot-password">Forgot password?</Link>
        </Text>
        <Box my={3} position="relative" display="flex" alignItems="center" justifyContent="center">
          <Divider />
          <Badge borderRadius={4} position="absolute">
            OR
          </Badge>
        </Box>
        <OAuth />
        <Box textAlign="center" fontSize="sm" color="gray.600">
          Need an account? <Link href="/register"><Text textDecoration="underline" cursor="pointer" display="inline">SIGN UP</Text></Link>
        </Box>
      </form>
    </Box>
  </Box>
);
View.displayName = 'LoginView';
export default React.memo(View);
