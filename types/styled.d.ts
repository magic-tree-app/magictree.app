import 'styled-components';

interface IColor {
  normal: `#${string}`;
  brighter: `#${string}`;
  darker: `#${string}`;
}

interface IColorPalette {
  primary: IColor;
  white: IColor;
  green: IColor;
  pink: IColor;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColorPalette;
  }
}
