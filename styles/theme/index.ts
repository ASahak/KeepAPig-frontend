import { extendTheme } from '@chakra-ui/react';

// Global style overrides
import styles from '@/styles/globalStyles';

// Foundational style overrides
import foundations from './foundations';
import * as components from './components';

const breakpoints = {
  xs: '481px',
  sm: '577px',
  md: '768px',
  lg: '962px',
  xl: '1200px',
  '2xl': '1536px'
};

const overrides = {
  ...foundations,
  components: { ...components },
  styles,
  breakpoints
};

export default extendTheme(overrides);
