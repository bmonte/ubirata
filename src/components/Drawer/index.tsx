import { useEffect } from 'react';

import { FaXmark } from 'react-icons/fa6';

import { IconButton } from '@/components/IconButton';
import { theme } from '@/styles';

import { Container, DrawerTitle, Content, Wrapper } from './styles';

type DrawerProps = {
  title: string;
  show: boolean;
  onClose: () => void;
};

export function Drawer({
  show,
  title,
  children,
  onClose,
}: React.PropsWithChildren<DrawerProps>) {
  useEffect(() => {
    function handleEscKeyPress(event: KeyboardEvent) {
      event.stopPropagation();

      if (event.key === 'Escape') {
        onClose();
      }
    }

    document.addEventListener('keydown', handleEscKeyPress);

    return () => {
      document.removeEventListener('keydown', handleEscKeyPress);
    };
  }, []);

  return (
    <Wrapper role="dialog">
      <Container show={show}>
        <header>
          <DrawerTitle title={title}>{title}</DrawerTitle>

          <IconButton onClick={onClose}>
            <FaXmark color={theme.colors.white} size={24} />
          </IconButton>
        </header>

        <Content>{children}</Content>
      </Container>
    </Wrapper>
  );
}
