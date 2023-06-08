import React, { useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useRTKDispatch } from '@/store/hooks';
import { setRouterAnimating } from '@/store/slices/base';
import { ROUTER_ANIMATION_STATUS } from '@/common/enums';

type PropsTypes = {
  routerName: string;
  children: React.ReactElement;
};
const variants = {
  hidden: { opacity: 0, x: -10, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -5 }
};
const RouterAnimation = ({ children, routerName }: PropsTypes) => {
  const rtkDispatch = useRTKDispatch();

  const animationCompleted = () => {
    window.scrollTo(0, 0);
    rtkDispatch(setRouterAnimating(ROUTER_ANIMATION_STATUS.COMPLETED));
  };

  useEffect(() => {
    rtkDispatch(setRouterAnimating(ROUTER_ANIMATION_STATUS.ANIMATING));
  }, [routerName]);

  return (
    <AnimatePresence mode="wait" initial={false} onExitComplete={animationCompleted}>
      <motion.main key={routerName} initial="hidden" animate="enter" exit="exit" variants={variants} transition={{ type: 'linear' }} style={{ height: 'inherit' }}>
        {children}
      </motion.main>
    </AnimatePresence>
  );
};
export default RouterAnimation;
