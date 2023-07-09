import { StreetMap } from '@/components';
import { ModalProvider } from '@/hooks';

import { PageContainer } from './styles';

export function Map() {
  return (
    <ModalProvider>
      <PageContainer>
        <StreetMap />
      </PageContainer>
    </ModalProvider>
  );
}
