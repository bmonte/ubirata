import styled from 'styled-components';

export const NavbarContainer = styled.nav`
  width: 56px;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 1rem 0.5rem;

  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: ${({ theme }) => theme.shadows['level-5']};

  overflow-x: hidden;

  z-index: ${({ theme }) => theme.zIndex.sticky};

  > img {
    width: 40px;
    margin-bottom: 1rem;
  }

  > ul {
    padding-top: 1rem;
    border-top: 1px solid ${({ theme }) => theme.colors['gray-100']};

    list-style: none;

    > li {
      a {
        display: inline-block;

        font-size: ${({ theme }) => theme.font.size.xxs};

        text-align: center;
        text-decoration: none;

        &.active {
          opacity: 0.6;
        }
      }

      & + li {
        margin-top: 1rem;
      }
    }
  }
`;
