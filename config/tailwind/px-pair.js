// IMPORTANT: PostCSS Converts all `px` values to `rem`
export const pxPair = (value) => {
  ({ [value]: `${value}px` });
};
