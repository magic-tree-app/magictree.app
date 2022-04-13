import { css } from 'styled-components';

export const Flex = css`
  display: flex;
`;

export const Grid = css`
  display: grid;
`;

export const CenteredVertical = css`
  align-items: center;
`;

export const CenteredHorizontal = css`
  justify-content: center;
`;

export const CenteredFlex = css`
  ${Flex}
  ${CenteredVertical}
  ${CenteredHorizontal}
`;

export const CenteredGrid = css`
  ${Grid}
  ${CenteredVertical}
  ${CenteredHorizontal}
`;
