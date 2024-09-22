declare module '*.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare const __IS_DEV__: boolean;