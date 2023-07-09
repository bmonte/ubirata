import styled from 'styled-components';

import { theme } from '@/styles';

interface ContainerProps {
  show: boolean;
}

const MODAL_WIDTH = '408px';
const SIDEBAR_OFFSET = '56px';

export const Wrapper = styled.aside`
  width: ${MODAL_WIDTH};

  z-index: ${theme.zIndex.modal};
`;

export const Container = styled.article<ContainerProps>`
  display: flex;
  flex-direction: column;

  width: ${MODAL_WIDTH};

  position: absolute;

  left: ${SIDEBAR_OFFSET};
  top: 0;
  bottom: 0;

  background: ${theme.colors.white};

  z-index: ${theme.zIndex.modal};
  box-shadow: ${theme.shadows['level-1']};

  & > header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    height: 74px;

    padding: 1.5rem;

    background: linear-gradient(
      90deg,
      rgba(72, 69, 249, 1) 0%,
      rgba(167, 168, 240, 1) 100%
    );
  }
`;

export const DrawerTitle = styled.p`
  color: ${theme.colors.white};

  font-size: ${theme.font.size.md};
  text-overflow: ellipsis;

  white-space: nowrap;

  max-width: 80%;
  overflow: hidden;
`;

export const Content = styled.section`
  height: 100%;
  max-height: 100%;
`;
