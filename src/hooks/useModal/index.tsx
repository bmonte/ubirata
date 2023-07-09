import { createContext, useContext, useCallback, useState } from 'react';

import { DEFAULT_MODALS } from './constants';
import type {
  ModalContextData,
  ModalProviderProps,
  StoreProps,
  ModalType,
} from './types';

// Contexto
const ModalContext = createContext<ModalContextData>({} as ModalContextData);

export function ModalProvider({ children }: ModalProviderProps) {
  const [store, setStore] = useState<StoreProps>({});

  function showModal(_modalType: ModalType, _modalProps: any = {}) {
    setStore((prevStore) => ({
      ...prevStore,
      modalType: _modalType,
      modalProps: _modalProps,
    }));
  }

  function hideModal() {
    setStore((prevStore) => ({
      ...prevStore,
      modalType: undefined,
      modalProps: undefined,
    }));
  }

  const renderModal = useCallback(() => {
    const { modalType, modalProps } = store;

    if (modalType) {
      const ModalComponent = DEFAULT_MODALS[modalType];

      if (ModalComponent) {
        return <ModalComponent {...(modalProps as any)} />;
      }
    }

    return null;
  }, [store]);

  return (
    <ModalContext.Provider value={{ store, showModal, hideModal }}>
      {renderModal()}
      {children}
    </ModalContext.Provider>
  );
}

// Hook
export function useModal() {
  const context = useContext(ModalContext);

  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }

  return context;
}
