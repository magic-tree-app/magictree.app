import styled from 'styled-components';

export const OutletSection = styled.section`
  background-color: ${({ theme }) => theme.colors.primary.darker};
`;

export const ViewSection = styled.section`
  display: grid;
  grid-template-columns: max-content 1fr;
  height: 100vh;
`;
