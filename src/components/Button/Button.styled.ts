import styled, { css } from 'styled-components';

const Default = css`
  background: green;
  // background: transparent;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

const Primary = css`
  background: linear-gradient(to bottom right, blue, pink);

  &:disabled {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const StyledButton = styled.button<{ $primary?: boolean; $disabled?: boolean }>`
  ${({ $primary }) => ($primary ? Primary : Default)};
  display: inline-block;
  padding: 12px 16px;
  border-radius: 25px;
  color: white;
  margin: 10px;
`;
