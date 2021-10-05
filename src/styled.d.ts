import 'styled-components';

interface IColorPalette {
  white: string;
  green: string;
  blue: string;
  pink: string;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: IColorPalette;
  }
}
