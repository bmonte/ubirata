import React, { ReactElement } from 'react';

import { render, RenderOptions } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';

import { theme } from '@/styles/theme';

import '@testing-library/jest-dom/extend-expect';

import '@/__tests__/mocks/resizeObserver';

// eslint-disable-next-line react/prop-types
const Providers: React.FC = ({ children }: React.PropsWithChildren) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

const customRender = (
  component: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(component, { wrapper: Providers, ...options });

export { default as userEvent } from '@testing-library/user-event';
export * from '@testing-library/react';

export { customRender as render };
