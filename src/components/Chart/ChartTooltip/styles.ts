import styled from 'styled-components';

export const TooltipContainer = styled.div`
  padding: 0.25rem;

  background-color: ${({ theme }) => theme.colors.white};

  border: 1px solid ${({ theme }) => theme.colors['gray-100']};
  border-radius: ${({ theme }) => theme.border.radius.sm};

  box-shadow: ${({ theme }) => theme.shadows['level-3']};

  > p {
    padding-bottom: 0.25rem;

    border-bottom: 1px solid ${({ theme }) => theme.colors['gray-100']};

    color: ${({ theme }) => theme.colors['gray-600']};

    font-size: ${({ theme }) => theme.font.size.xs};
    font-weight: ${({ theme }) => theme.font.weight.light};
  }

  > h4 {
    margin-top: 0.25rem;

    color: ${({ theme }) => theme.colors['gray-600']};

    font-size: ${({ theme }) => theme.font.size.sm};
  }
`;
