import 'styled-components';

type Color = `#${string}`;

interface ColorVariants {
  normal: Color;
  brighter: Color;
  darker: Color;
}

interface ColorPalette {
  primary: ColorVariants;
  white: Color;
  green: ColorVariants;
  pink: ColorVariants;
}

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: ColorPalette;
  }
}
