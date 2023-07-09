import styled from 'styled-components';

export const AboutContainer = styled.main`
  width: 100%;
  height: 100vh;

  padding: 1.5rem;

  > article {
    max-width: 972px;
    width: 100%;

    height: 100%;

    margin: 0 auto;
    padding: 1.5rem;

    background-color: ${({ theme }) => theme.colors.white};

    border: 1px solid ${({ theme }) => theme.colors['gray-200']};
    border-radius: ${({ theme }) => theme.border.radius.md};

    section {
      > h2 {
        margin-bottom: 0.5rem;

        color: ${({ theme }) => theme.colors['gray-600']};
        font-size: ${({ theme }) => theme.font.size.lg};
      }

      > h3 {
        margin-bottom: 0.5rem;

        color: ${({ theme }) => theme.colors['gray-600']};
        font-size: ${({ theme }) => theme.font.size.md};
      }

      > p {
        color: ${({ theme }) => theme.colors['gray-600']};
        font-size: ${({ theme }) => theme.font.size.xs};

        & + p {
          margin-top: 1rem;
        }
      }

      & + section {
        margin-top: 1rem;
      }
    }
  }
`;
