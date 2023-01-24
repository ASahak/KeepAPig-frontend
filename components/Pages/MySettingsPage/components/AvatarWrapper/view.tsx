import React from 'react';
import { Box, Icon } from '@chakra-ui/react';
import { RiUser3Line } from 'react-icons/ri';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Image } from '@/components/Shared/UI';
import { ComponentViewPropsType } from './types';

const View: React.FC<ComponentViewPropsType> = ({ avatar, fileInputRef, triggerOnFile, fileChange }) => (
  <Box display="flex" alignItems="center" justifyContent="center" p={4} width="full" height={200}>
    <Box borderRadius="50%" width={130} height={130} position="relative" overflow="hidden" data-group>
      {avatar ? (
        <Image src={avatar} width={130} height={130} priority isCircle />
      ) : (
        <>
          <Box borderWidth={1} borderColor="grey.300" borderRadius="50%" width="inherit" height="inherit" display="flex" alignItems="center" justifyContent="center" background="gray.50">
            <Icon as={RiUser3Line} color="gray.600" fontSize="40px" />
          </Box>
        </>
      )}
      <Box
        position="absolute"
        bottom="0"
        bgColor="blackAlpha.200"
        w="100%"
        textAlign="center"
        py={1}
        display="flex"
        justifyContent="center"
        alignItems="center"
        transform="translateY(10px)"
        opacity={0}
        visibility="hidden"
        transition=".2s"
        _groupHover={{
          visibility: 'visible',
          opacity: 1,
          transform: 'translateY(0px)'
        }}
        onClick={triggerOnFile}
      >
        <input type="file" hidden ref={fileInputRef as React.RefObject<HTMLInputElement>} onChange={fileChange} />
        <Icon as={MdOutlineFileUpload} color="gray.600" fontSize="20px" cursor="pointer" />
      </Box>
    </Box>
  </Box>
);
View.displayName = 'MySettingAvatarWrapperView';
export default View;
