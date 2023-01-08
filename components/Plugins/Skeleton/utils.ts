import { SkeletonsType } from './types';
import { DEFAULT_GRID_CONTAINER_WIDTH } from './constants';

export const generateMargin = (marginProp: Array<number | string> | number, directionProp?: 'right' | 'center' | 'left') => {
  let margin: string = '';
  let direction;
  const marginDetect = () => {
    return (marginProp as Array<string | number>).reduce((acc, item) => {
      acc += typeof item === 'number' ? item + 'px ' : item + ' ';
      return acc;
    }, '') as string;
  };
  if (Array.isArray(marginProp) || !isNaN(marginProp as number)) {
    margin = typeof marginProp === 'number' ? marginProp + 'px' : marginDetect() || '0px';
  } else margin = '0px';
  if (directionProp) {
    direction = {
      ...(directionProp === 'center'
        ? {
            marginLeft: 'auto',
            marginRight: 'auto'
          }
        : {}),
      [directionProp === 'right' ? 'marginLeft' : 'marginRight']: 'auto'
    };
  }
  return {
    margin,
    ...direction
  };
};

export const generateGridArea = (row: Array<{ w: string | number }>) =>
  row.reduce((acc, item) => {
    acc += Array.isArray(item) ? DEFAULT_GRID_CONTAINER_WIDTH : item.w + ' ';
    return acc;
  }, '1fr / ');

export const itemsWithRepeat = (skeletons: SkeletonsType, repeatCount: number): SkeletonsType => {
  return repeatCount > 0 ? [].constructor(repeatCount).fill(skeletons[0]) : skeletons;
};

export const setOpacity = (viewIndex: number, repeatCount: number, withOpacity: boolean, rowsLength: number) => {
  return (repeatCount || rowsLength) > 0 && withOpacity ? 1 - (1 / (repeatCount || rowsLength)) * viewIndex : 1;
};
