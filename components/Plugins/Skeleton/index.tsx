import React, { useCallback } from 'react';
import { ComponentPropTypes, RowType, RowsContainerType, GridItemAsSectionType, MainRowsType, MainRowType } from './types';
import { generateMargin, generateGridArea, checkRepeatedRows, setOpacity } from './utils';
import { VARIANTS, DEFAULT_GAP, DEFAULT_ALIGNMENT, DEFAULT_VARIANT, DEFAULT_SKELETON_GRADIENT_WIDTH, DEFAULT_REPEAT_COUNT } from './constants';
import styles from './styles.module.css';

const Skeleton: React.FC<ComponentPropTypes> = ({ grid, style = {}, sectionSpacing = DEFAULT_GAP, variant = DEFAULT_VARIANT }) => {
  const renderEachView = (col: RowType, colItemIndex: string, colIndex: number, rowIndex: number) => {
    return (
      <div
        key={'grid-item-each-view__' + (colIndex + rowIndex + colItemIndex)}
        style={{
          width: col.w || 'auto',
          height: col.h,
          borderRadius: col.r || '0px',
          margin: generateMargin(col.margin || []).margin,
          backgroundColor: VARIANTS[variant].main
        }}
        className={`${styles['skeleton-bg-gradient']} skeleton-${rowIndex + '_' + colIndex + '_' + colItemIndex}`}
      >
        <style jsx={true}>{`
          .skeleton-${rowIndex + '_' + colIndex + '_' + colItemIndex}:after {
            width: ${col.skeletonW || DEFAULT_SKELETON_GRADIENT_WIDTH}px;
            background-image: linear-gradient(
              90deg,
              ${VARIANTS[variant].main} 0px,
              ${VARIANTS[variant].gradient} ${(col.skeletonW || DEFAULT_SKELETON_GRADIENT_WIDTH) / 2}px,
              ${VARIANTS[variant].main} ${col.skeletonW || DEFAULT_SKELETON_GRADIENT_WIDTH}px
            );
          }
        `}</style>
      </div>
    );
  };

  const generateWrapper = (row: MainRowType, rowIndex: number, rowsLength: number, { repeatCount = DEFAULT_REPEAT_COUNT, withOpacity = false, gridGap }: Partial<GridItemAsSectionType>) => {
    const _row = 'cols' in row ? row.cols : row;
    const _alignment = 'alignment' in row ? row.alignment : DEFAULT_ALIGNMENT;

    return (
      <div
        style={{
          gridGap,
          grid: generateGridArea(_row.map((e) => ({ w: e.w || 'auto' }))),
          opacity: setOpacity(rowIndex, repeatCount, withOpacity, rowsLength),
          justifyContent: _alignment
        }}
        key={'grid-item-key__' + rowIndex}
        className={styles['skeleton-grid-area']}
      >
        {_row.map((col: RowsContainerType | RowType, colIndex: number) =>
          Array.isArray(col) ? (
            <div key={'grid-item-col-key__' + (rowIndex + colIndex)}>{col.map((item, colItemIndex) => renderEachView(item, colItemIndex.toString(), colIndex, rowIndex))}</div>
          ) : (
            renderEachView(col, '', colIndex, rowIndex)
          )
        )}
      </div>
    );
  };

  const generateSectionItemAsGrid = (gridItemAsSection: GridItemAsSectionType) => {
    const { repeatCount = DEFAULT_REPEAT_COUNT, withOpacity = false, gridGap = DEFAULT_GAP, rows } = gridItemAsSection;
    const rowsList: MainRowsType = checkRepeatedRows({ rows, repeatCount });

    return rowsList.map((row: MainRowType, rowIndex: number) => generateWrapper(row, rowIndex, rowsList.length, { withOpacity, repeatCount, gridGap }));
  };

  const generateSectionsAsGrid = useCallback(() => {
    return (
      <div className={styles['skeleton-sections__container']} style={{ gridGap: sectionSpacing, grid: generateGridArea(grid.map(({ w = 'auto' }) => ({ w }))) }}>
        {grid.map((gridItemAsSection: GridItemAsSectionType, gridItemAsSectionIndex: number) => (
          <div key={'grid-as-section-key__' + gridItemAsSectionIndex} style={{ height: gridItemAsSection.h || 'auto' }}>
            {generateSectionItemAsGrid(gridItemAsSection)}
          </div>
        ))}
      </div>
    );
  }, [grid, sectionSpacing]);

  return <div style={style}>{generateSectionsAsGrid()}</div>;
};
Skeleton.displayName = 'Skeleton';
export default React.memo(Skeleton);
