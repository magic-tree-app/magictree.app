import styled from 'styled-components';
import { CenteredFlex } from '../../styled/general/display.styled';

export const TextPlaceholderWrapper = styled(CenteredFlex)`
  height: 100%;
  font-size: 4rem;
  color: ${({ theme }) => theme.colors.primary.normal};
`;
