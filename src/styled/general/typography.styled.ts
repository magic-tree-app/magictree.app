import styled, { css } from 'styled-components';

export const Common = css`
  font-size-adjust: 0.3;
  font-family: 'Arial Rounded MT Bold', sans-serif;
  letter-spacing: 0.3px;
`;

export const Body = css`
  font-size: 1rem;
  line-height: 1.25;
`;

export const H1 = styled.h1`
  ${Common},
  font-size: 1rem;
  line-height: 1.25;
`;

export const H2 = styled.h2`
  ${Common},
  font-size: 1.625rem;
  line-height: 1.15384615;
`;

export const H3 = styled.h3`
  ${Common},
  font-size: 1.375rem;
  line-height: 1.13636364;
`;

export const H4 = styled.h4`
  ${Common},
  font-size: 1.125rem;
  line-height: 1.11111111;
`;

export const H5 = styled.h5`
  ${Common},
  font-size: 1rem;
  line-height: 1.25;
`;

export const H6 = styled.h6`
  ${Common},
  font-size: 0.75rem;
  line-height: 1.25;
`;

export const Blockquote = css`
  ${Common},
  font-size: 1.25rem;
  line-height: 1.25;
`;
