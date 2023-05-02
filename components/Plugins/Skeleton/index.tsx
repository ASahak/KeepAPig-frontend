import React from 'react';
import { GridType, ComponentPropTypes, SkeletonsType, SkeletonType } from './types';
import { DIRECTION } from './enums';
import { generateMargin, generateGridArea, itemsWithRepeat, setOpacity } from './utils';
import * as CONSTANTS from './constants';
import styles from './styles.module.css';

const Skeleton: React.FC<ComponentPropTypes> = ({ grid, style = {}, variant = CONSTANTS.DEFAULT_VARIANT }) => {
  const generateSkeletons = (skeletons: SkeletonsType, gridKey: string, repeatCount: number, withOpacity: boolean) => {
    return skeletons.map((skeleton: SkeletonType & GridType, index: number) =>
      Object.hasOwn(skeleton, 'children') ? (
        generateGrid(skeleton, gridKey)
      ) : (
        <div
          key={`skeleton__${gridKey}-${index}`}
          style={{
            width: skeleton.w === CONSTANTS.DEFAULT_GRID_CONTAINER_WIDTH ? CONSTANTS.DEFAULT_SKELETON_WIDTH : skeleton.w || CONSTANTS.DEFAULT_SKELETON_WIDTH,
            height: skeleton.h || CONSTANTS.DEFAULT_HEIGHT,
            borderRadius: skeleton.r || '0px',
            margin: generateMargin(skeleton.margin || []).margin,
            backgroundColor: CONSTANTS.VARIANTS[variant].main,
            opacity: setOpacity(index, repeatCount, withOpacity, skeletons.length)
          }}
          className={`${styles['skeleton-bg-gradient']} skeleton-${gridKey}-${index}`}
        >
          <style>{`
            .skeleton-${gridKey}-${index}:after {
              width: ${skeleton.skeletonW || CONSTANTS.DEFAULT_SKELETON_GRADIENT_WIDTH}px;
              background-image: linear-gradient(
                90deg,
                ${CONSTANTS.VARIANTS[variant].main} 0px,
                ${CONSTANTS.VARIANTS[variant].gradient} ${(skeleton.skeletonW || CONSTANTS.DEFAULT_SKELETON_GRADIENT_WIDTH) / 2}px,
                ${CONSTANTS.VARIANTS[variant].main} ${skeleton.skeletonW || CONSTANTS.DEFAULT_SKELETON_GRADIENT_WIDTH}px
              );
            }
          `}</style>
        </div>
      )
    );
  };

  const generateGrid = (grid: GridType, indexLevel?: string) => {
    let key_level: string = indexLevel || '1';
    const gridGap = grid.gridGap || CONSTANTS.DEFAULT_GAP,
      hasChildren = Object.hasOwn(grid, 'children'),
      hasSkeletons = Object.hasOwn(grid, 'skeletons'),
      repeatCount = grid.repeatCount || CONSTANTS.DEFAULT_REPEAT_COUNT,
      children = hasChildren ? itemsWithRepeat(grid.children!, repeatCount) : [],
      gridStyle =
        grid.direction === DIRECTION.row
          ? generateGridArea((hasChildren ? children : itemsWithRepeat(grid.skeletons!, repeatCount)).map(({ w = CONSTANTS.DEFAULT_GRID_CONTAINER_WIDTH }) => ({ w })))
          : CONSTANTS.DEFAULT_GRID_STYLE,
      withOpacity = grid.withOpacity || false;

    return (
      <div
        key={key_level}
        className={styles['skeleton-grid__container']}
        style={{
          gridGap,
          margin: generateMargin(grid.margin || []).margin,
          grid: gridStyle,
          height: grid.h || CONSTANTS.DEFAULT_HEIGHT,
          alignItems: CONSTANTS.DEFAULT_ALIGN_ITEMS_ALIGNMENT,
          justifyContent: grid.justifyContent || CONSTANTS.DEFAULT_JUSTIFY_ALIGNMENT
        }}
      >
        {hasChildren
          ? children.map((gridItem: GridType, gridItemIndex: number) => generateGrid(gridItem, `${key_level}_${gridItemIndex}`))
          : hasSkeletons
          ? generateSkeletons(itemsWithRepeat(grid.skeletons!, repeatCount), key_level, repeatCount, withOpacity)
          : null}
      </div>
    );
  };

  return <div style={style}>{generateGrid(grid)}</div>;
};
Skeleton.displayName = 'Skeleton';
export default React.memo(Skeleton);
