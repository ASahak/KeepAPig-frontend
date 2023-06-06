import React from 'react';
import { MdOutlineSecurityUpdateGood } from 'react-icons/md';
import { FormControl, FormLabel, Switch, Icon } from '@chakra-ui/react';
import { ComponentViewPropsType } from './types';

const View: React.FC<ComponentViewPropsType> = ({ isEnabled, onChange, isChangingOnServer }) => (
  <FormControl display="flex" w="full" alignItems="center" justifyContent="space-between">
    <FormLabel htmlFor="null" mb="0" fontWeight="400" display="flex" alignItems="center">
      <Icon as={MdOutlineSecurityUpdateGood} fontSize="md" mr={1} />
      Enable two factor authentication
    </FormLabel>
    <Switch isChecked={isEnabled} onChange={onChange} isDisabled={isChangingOnServer} />
  </FormControl>
);
View.displayName = 'MySettingsTwoFactorView';
export default View;
