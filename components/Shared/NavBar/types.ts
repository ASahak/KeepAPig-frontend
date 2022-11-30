export type ComponentPropTypes = {
  title: string;
};

export type ComponentViewPropTypes = {
  goBack: () => void;
} & Pick<ComponentPropTypes, 'title'>;
