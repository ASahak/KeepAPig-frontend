import React, { useState } from 'react';
import Image from 'next/image';
import { Box, Icon } from '@chakra-ui/react';
import { RiAlertLine } from 'react-icons/ri';
import ContentLoader from 'react-content-loader';
import { ComponentPropTypes } from './types';

const ImageContainer: React.FC<ComponentPropTypes> = ({ src, width, height, loading, priority, placeholder = 'empty', radius = 0, isCircle = false }) => {
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

  const getCircleNumber = (n: string | number) => {
    if (typeof n === 'string') {
      const digit: string[] = n.match(/(\d+)/g) || [];
      const str: string[] = n.match(/[^\d.]/g) || [];
      return +digit[0] / 2 + str.join('');
    }
    return n / 2;
  };

  return (
    <Box position="relative" width={width} height={height}>
      {imageError ? (
        <Box display="flex" alignItems="center" justifyContent="center" h="full" w="full" borderRadius={isCircle ? '50%' : radius} bgColor="gray.100">
          <Icon as={RiAlertLine} w="30%" h="30%" maxW="35px" maxH="35px" color="gray.600" />
        </Box>
      ) : null}
      {!contentIsReady ? (
        <ContentLoader style={{ position: 'absolute', width: '100%', height: '100%' }} uniqueKey="image-content-loader">
          {isCircle ? <circle cx="50%" cy="50%" r={getCircleNumber(width)} /> : <rect x="0" y="0" rx={radius} ry={radius} width={width} height={height} />}
        </ContentLoader>
      ) : null}
      <Image style={{ borderRadius: isCircle ? '50%' : radius }} layout="fill" src={src} placeholder={placeholder} loading={loading} priority={priority} onError={onError} onLoad={onLoad} />
    </Box>
  );
};
export default React.memo(ImageContainer);
