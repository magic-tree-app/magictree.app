import styled, { css } from 'styled-components';
import { CenteredFlex } from '../../styled/general/display.styled';
import { Typography } from '../../styled/general/typography.styled';

const Common = css`
  ${CenteredFlex}

  ${Typography}

  padding: .6rem 1rem;
  border-radius: .3rem;
  cursor: pointer;
  transition: all 200ms ease-in-out;
`;

const Default = css`
  background-color: transparent;
`;

const DefaultLight = css`
  ${Default}

  color: ${({ theme }) => theme.colors.primary.normal};
  border: thin solid ${({ theme }) => theme.colors.primary.normal};
`;

const DefaultDark = css`
  ${Default}

  color: ${({ theme }) => theme.colors.white};
  border: thin solid ${({ theme }) => theme.colors.white};
`;

const Primary = css`
  background: linear-gradient(45deg, ${
  ({ theme }) => theme.colors.pink.darker
}, ${
  ({ theme }) => theme.colors.pink.brighter
});
  color: ${({ theme }) => theme.colors.white};
  border: none;
  border-bottom: thin solid rgba(255, 255, 255, 0.4);
`;

const Disabled = css`
  opacity: .6;
  cursor: not-allowed;
`;

const getDefaultCss = (type: ButtonType) => (type === 'light' ? DefaultLight : DefaultDark);

export const StyledButton = styled.button<{
  $type: ButtonType;
  $primary?: boolean;
  $disabled?: boolean;
}>`
  ${Common}

  ${({ $primary, $type }) => ($primary ? Primary : getDefaultCss($type))}

  &:hover {
    opacity: .8;
  }

  &:active {
    opacity: .9;
  }

  &:disabled {
    ${Disabled}
  }
`;

export type ButtonType = 'light' | 'dark';
