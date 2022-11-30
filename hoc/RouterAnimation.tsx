import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

type PropsTypes = {
  routerName: string,
  children: React.ReactElement
}
const variants = {
  hidden: { opacity: 0, x: -10, y: 0 },
  enter: { opacity: 1, x: 0, y: 0 },
  exit: { opacity: 0, x: 0, y: -5 },
}
const RouterAnimation = ({ children, routerName }: PropsTypes) => {
  return <AnimatePresence
    mode="wait"
    initial={false}
    onExitComplete={() => window.scrollTo(0, 0)}
  >
    <motion.main
      key={routerName}
      initial="hidden"
      animate="enter"
      exit="exit"
      variants={variants}
      transition={{ type: 'linear' }}
      style={{ height: 'inherit'}}
    >
      {children}
    </motion.main>
  </AnimatePresence>
}
export default RouterAnimation;
