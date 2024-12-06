// components/ProviderWrapper.tsx
"use client";

import { Provider } from 'react-redux';
import { store } from '@/stores/store';
import { NextUIProvider } from '@nextui-org/react';
import { ReactNode } from 'react';

export default function ProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <Provider store={store}>
      <NextUIProvider>
        {children}
      </NextUIProvider>
    </Provider>
  );
}