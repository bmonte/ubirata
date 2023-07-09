import { DEFAULT_MODALS } from './constants';

export interface ModalProviderProps {
  children: React.ReactNode;
}

export interface ModalContextData {
  store: StoreProps;
  showModal: (
    modalType: ModalType,
    modalProps?: TemplateTypeObject<unknown>,
  ) => void;
  hideModal: () => void;
}

export interface StoreProps {
  modalType?: ModalType;
  modalProps?: TemplateTypeObject<unknown>;
}

// Utils
export type ModalType = keyof typeof DEFAULT_MODALS;

type TemplateTypeObject<T> = {
  [key: string]: T;
};
