import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Icon } from '@chakra-ui/react';
import { RiAlertLine } from 'react-icons/ri';
import ContentLoader from 'react-content-loader';
import { ComponentPropTypes } from './types';

const ImageContainer: React.FC<ComponentPropTypes> = ({ src, width, height, loading, placeholder = 'empty', radius = 0 }) => {
  const [contentIsReady, setContentIsReady] = useState<boolean>(false);
  const [imageError, setImageError] = useState<boolean>(false);

  const onError = () => {
    setImageError(true);
    setContentIsReady(true);
  };

  const onLoad = () => {
    setImageError(false);
    setContentIsReady(true);
  };

  return (
    <Box position="relative" width={width} height={height}>
      {imageError ? (
        <Box display="flex" alignItems="center" justifyContent="center" h="full" w="full" borderRadius={radius} bgColor="gray.100">
          <Icon as={RiAlertLine} w="30%" h="30%" maxW="35px" maxH="35px" color="gray.600" />
        </Box>
      ) : null}
      {!contentIsReady ? (
        <ContentLoader style={{ position: 'absolute' }} uniqueKey="image-content-loader">
          <rect x="0" y="0" rx={radius} ry={radius} width={width} height={height} />
        </ContentLoader>
      ) : null}
      <Image style={{ borderRadius: radius }} src={src} width={width} height={height} placeholder={placeholder} loading={loading} onError={onError} onLoad={onLoad} />
    </Box>
  );
};
export default React.memo(ImageContainer);
