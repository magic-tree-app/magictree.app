import styled, { css } from 'styled-components';

export const Typography = css`
  font-family: 'Arial Rounded MT Bold', sans-serif;
  line-height: 1.25;
  letter-spacing: 0.03rem;
`;

export const FontSize = css`
  font-size: 1rem;
`;

export const H1 = styled.h1`
  ${Typography}
  font-size: 2.4rem;
`;

export const H2 = styled.h2`
  ${Typography}
  font-size: 1.625rem;
`;

export const H3 = styled.h3`
  ${Typography}
  font-size: 1.375rem;
`;

export const H4 = styled.h4`
  ${Typography}
  font-size: 1.125rem;
`;

export const H5 = styled.h5`
  ${Typography}
  ${FontSize}
`;

export const H6 = styled.h6`
  ${Typography}
  font-size: 0.75rem;
`;

export const Text = styled.p`
  ${Typography}
  ${FontSize}
`;
