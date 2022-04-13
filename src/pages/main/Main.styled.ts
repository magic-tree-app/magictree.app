import styled from 'styled-components';

export const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary.normal};
`;

export const SocialMediaLink = styled.a`
  margin-bottom: 1rem;
  padding: 0.2rem 0.4rem;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${({ theme }) => theme.colors.white};
  background-color: transparent;
  border-radius: 0.2rem;
  transition: background-color 200ms;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary.normal};
  }
`;

export const SocialMediaContainer = styled.div`
  display: flex;
  flex-flow: wrap;
  justify-content: center;
  column-gap: 2rem;
`;

export const PageSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.green.normal};

  img {
    height: 45vh;
  }

  ${Title} {
    padding-right: 1rem;
    padding-left: 1rem;
    text-align: center;
    letter-spacing: 0.05rem;
  }
`;
