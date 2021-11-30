import styled from 'styled-components';
import { Flex } from '../../styled/general/display.styled';

export const SidebarSection = styled(Flex)<{ $isCollapsed: boolean }>`
  flex-direction: column;
  width: ${({ $isCollapsed }) => ($isCollapsed ? '5rem' : '20rem')};
  background-color: ${({ theme }) => theme.colors.primary.normal};
  transition: width 300ms ease-in-out;
  border-right: thin solid ${({ theme }) => theme.colors.primary.brighter};
  
  img {
    max-width: 3.8rem;
    padding: .6rem;
  }
`;
