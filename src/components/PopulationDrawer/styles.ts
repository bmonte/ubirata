import styled from 'styled-components';

import { theme } from '@/styles';

export const PopulationContainer = styled.article`
  padding: 1rem;

  > span {
    display: grid;
    grid-template-columns: 1fr 1fr;

    width: 100%;

    > p {
      color: ${theme.colors['gray-600']};
      font-size: ${theme.font.size.sm};
    }
  }

  > section {
    margin-top: 1rem;

    > h2 {
      margin-bottom: 0.5rem;

      color: ${theme.colors['gray-600']};
      font-size: ${theme.font.size.sm};
    }

    > p {
      margin-bottom: 0.5rem;

      color: ${theme.colors['gray-600']};

      font-size: ${theme.font.size.xs};
      font-weight: ${theme.font.weight.light};
    }
  }
`;
