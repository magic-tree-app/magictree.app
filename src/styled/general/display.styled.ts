import styled, { css } from 'styled-components';

export const Flex = styled.div`
  display: flex;
`;

export const Grid = styled.div`
  display: grid;
`;

export const CenteredVertical = css`
  align-items: center;
`;

export const CenteredHorizontal = css`
  justify-content: center;
`;

export const CenteredFlex = styled(Flex)`
  ${CenteredVertical}
  ${CenteredHorizontal}
`;

export const CenteredGrid = styled(Grid)`
  ${CenteredVertical}
  ${CenteredHorizontal}
`;
