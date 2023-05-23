import React from 'react';
import { Box, Icon, Spinner } from '@chakra-ui/react';
import { RiUser3Line } from 'react-icons/ri';
import { MdOutlineFileUpload } from 'react-icons/md';
import { Image } from '@/components/Shared/UI';
import { ComponentViewPropsType } from './types';

const View: React.FC<ComponentViewPropsType> = ({ avatar, fileInputRef, triggerOnFile, fileChange, isUploading }) => (
  <Box display="flex" alignItems="center" justifyContent="center" p={4} width="full" height={200}>
    <Box borderRadius="50%" width={130} height={130} position="relative" overflow="hidden">
      {isUploading ? (
        <Box
          position="absolute"
          left={0}
          top={0}
          borderWidth={1}
          borderColor="gray.300"
          borderRadius="50%"
          width="inherit"
          height="inherit"
          display="flex"
          alignItems="center"
          justifyContent="center"
          bgColor="rgba(255, 255, 255, .9)"
          zIndex={22}
        >
          <Spinner />
        </Box>
      ) : null}
      <Box data-group w="inherit" h="inherit">
        {avatar ? (
          <Image src={avatar} width={130} height={130} priority isCircle alt="avatar" />
        ) : (
          <>
            <Box borderWidth={1} borderColor="gray.300" borderRadius="50%" width="inherit" height="inherit" display="flex" alignItems="center" justifyContent="center" background="gray.50">
              <Icon as={RiUser3Line} color="gray.600" fontSize="40px" />
            </Box>
          </>
        )}
        <Box
          position="absolute"
          bottom="0"
          cursor="pointer"
          bgColor="blackAlpha.700"
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
          <Icon as={MdOutlineFileUpload} color="white" fontSize="20px" cursor="pointer" />
        </Box>
      </Box>
    </Box>
  </Box>
);
View.displayName = 'MySettingAvatarWrapperView';
export default View;
