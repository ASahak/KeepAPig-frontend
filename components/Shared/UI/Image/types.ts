import { TypeInRange } from '@/utils/types';

export type ComponentPropTypes = {
  src: string | HTMLImageElement;
  width: number | string;
  height: number | string;
  loading?: 'lazy' | 'eager';
  placeholder?: 'blur' | 'empty';
  radius?: TypeInRange<0, 51>; // include from 0 to 50 px
  isCircle?: boolean;
  priority?: boolean;
  alt?: string;
};
