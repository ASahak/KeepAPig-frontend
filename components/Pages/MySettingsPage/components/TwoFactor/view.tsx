import React from 'react';
import { FormControl, FormLabel, Switch } from '@chakra-ui/react';

const View = () => (
  <FormControl display="flex" w="full" alignItems="center" justifyContent="space-between">
    <FormLabel htmlFor="toggle-two-factor-auth" mb="0" fontWeight="400">
      Enable two factor authentication
    </FormLabel>
    <Switch id="toggle-two-factor-auth" />
  </FormControl>
);
View.displayName = 'MySettingsTwoFactorView';
export default View;
