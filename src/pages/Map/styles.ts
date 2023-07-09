import styled from 'styled-components';

export const PageContainer = styled.main`
  height: 100vh;

  > #street-map {
    height: 100%;

    z-index: ${({ theme }) => theme.zIndex.docked};
  }
`;
