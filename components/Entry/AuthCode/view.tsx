import React from 'react';
import { ErrorMessage } from '@hookform/error-message';
import { Controller } from 'react-hook-form';
import MaskInput from 'react-input-mask';
import { Button, FormControl, FormLabel, Input, Text } from '@chakra-ui/react';
import { ComponentViewPropTypes } from './types';

const View: React.FC<ComponentViewPropTypes> = ({ formState, onSubmit }) => (
  <form onSubmit={formState.handleSubmit(onSubmit)} className="form__full-width">
    <Controller
      name="code"
      control={formState.control}
      render={({ field: { onChange, value } }) => (
        <FormControl mb={3}>
          <FormLabel>Code</FormLabel>
          <Input as={MaskInput} placeholder="XXX XXX" variant="whiteTinted" value={value || ''} onChange={onChange} mask="999999" size="md" w="full" />
          <ErrorMessage
            errors={formState.errors}
            name="code"
            render={({ message }) => (
              <Text size="sm" variant="errorMessage" colorScheme="red">
                {message}
              </Text>
            )}
          />
        </FormControl>
      )}
    />
    <Button mt={1} mb={3} isLoading={formState.formLoading} type="submit" width="full" variant="darcula">
      Activate
    </Button>
  </form>
);
View.displayName = 'AuthCodeView';
export default View;
