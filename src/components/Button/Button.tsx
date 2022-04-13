import React from 'react';
import { ButtonType, StyledButton } from './Button.styled';

type ButtonProps = {
  type?: ButtonType;
  primary?: boolean;
  disabled?: boolean;
  children?: string;

  // Events
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

/* TODO:
 * - implement 'icon' prop
 * - implement 'component' prop
 * - implement other events
 */
export const Button: React.FC<ButtonProps> = ({
  children, primary, disabled, onClick, type = 'dark',
}) => (
  <StyledButton $type={type} $primary={primary} disabled={disabled} onClick={onClick}>
    {children}
  </StyledButton>
);
