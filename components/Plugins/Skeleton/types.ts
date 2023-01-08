import { DIRECTION } from './enums';

type MarginType = Array<number | string> | number;

export type DirectionType = keyof typeof DIRECTION;

export type ComponentPropTypes = {
  grid: GridType;
  style?: { [key: string]: any };
  variant?: 'grey';
  margin?: MarginType;
};

export type JustifyAlignment = 'flex-start' | 'flex-end' | 'center' | 'apace-around' | 'space-between';

export type SkeletonType = {
  w?: string | number;
  h?: string | number;
  r?: string | number;
  margin?: MarginType;
  skeletonW?: number;
};

export type SkeletonsType = Array<SkeletonType | GridType>;

export type GridType = {
  margin?: MarginType;
  w?: string | number;
  h?: string | number;
  gridGap?: number;
  justifyContent?: JustifyAlignment;
  children?: Array<GridType>;
  direction?: DirectionType;
  repeatCount?: number;
  withOpacity?: boolean;
  skeletons?: SkeletonsType;
};
