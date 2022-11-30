type OneOnly<Obj, Key extends keyof Obj> = { [key in Exclude<keyof Obj, Key>]: null } & Pick<Obj, Key>;
export type OneOf<T> = { [key in keyof T]: OneOnly<T, key> };
