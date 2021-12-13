import React from 'react';
import { StyledButton } from './Button.styled';

type ButtonProps = {
  // eslint-disable-next-line react/require-default-props
  primary?: boolean;
  // eslint-disable-next-line react/require-default-props
  disabled?: boolean;
  // eslint-disable-next-line react/require-default-props
  children?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children, primary, disabled,
}) => (
  <StyledButton $primary={primary} disabled={disabled}>
    {children}
  </StyledButton>
);
