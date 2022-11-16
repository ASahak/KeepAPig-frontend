import React, { useCallback } from 'react';
import { useRouter } from 'next/router';
import View from './view';
import { ComponentPropTypes } from './types';

const Container: React.FC<ComponentPropTypes> = ({ title }) => {
  const router = useRouter();

  const goBack = useCallback(() => {
    router.back();
  }, []);

  return <View title={title} goBack={goBack} />;
};
Container.displayName = 'NavBarContainer';
export default React.memo(Container);
