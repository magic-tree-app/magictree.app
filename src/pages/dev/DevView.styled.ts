import styled from 'styled-components';
import { CenteredFlex, Flex } from '../../styled/general/display.styled';

export const FullScreenView = styled.div`
  ${CenteredFlex}
  flex-direction: column;
  row-gap: 1rem;

  height: 100vh;

  div {
    ${Flex}

    padding: 1rem;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

    button {
      margin-right: 1rem;
  
      &:last-child {
        margin-right: 0;
      }
    }

    &:first-child {
      background-color: ${({ theme }) => theme.colors.primary.normal};
    }

    &:last-child {
      background-color: ${({ theme }) => theme.colors.white};
    }
  }

  
`;
