import '@/styles/globals.css';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { AnimatePresence } from 'motion/react';
import { createTheme, MantineProvider } from '@mantine/core';

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence mode="wait" initial={false}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </AnimatePresence>
  );
}
