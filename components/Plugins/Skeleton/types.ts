type MarginType = Array<number | string> | number;

export type RowType = {
  w?: string | number;
  h: string | number;
  r: string | number;
  margin?: MarginType;
  skeletonW?: number;
};

export type RowsContainerType = Array<RowType>;

export type RowsContainerWithAlignmentType = {
  alignment: GridItemAlignment;
  cols: RowsContainerType;
};

export type GridItemAlignment = 'flex-start' | 'flex-end' | 'center' | 'apace-around' | 'space-between';

export type MainRowType = RowsContainerType | RowsContainerWithAlignmentType;

export type MainRowsType = Array<RowsContainerType | RowsContainerWithAlignmentType>;

export type GridItemAsSectionType = {
  w?: string | number;
  h?: string | number;
  repeatCount?: number;
  withOpacity?: boolean;
  gridGap?: number;
  rows: MainRowsType;
};

export type ComponentPropTypes = {
  grid: Array<GridItemAsSectionType>;
  style?: { [key: string]: any };
  variant?: 'grey';
  sectionSpacing?: number;
  margin?: MarginType;
};
