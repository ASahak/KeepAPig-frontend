export type ComponentViewPropsType = {
  isFetching: boolean;
  qrCode: string | null;
  onNextAuth: () => void;
};

export type ComponentPropsType = {
  close: () => void;
};
