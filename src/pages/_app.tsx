import '@/styles/globals.css';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { SWRConfig } from 'swr';
import { fetcher } from '@/utils/fetcher';

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SWRConfig value={{ fallback: pageProps.fallback || {}, revalidateOnFocus: false, fetcher: fetcher }}>
      <MantineProvider theme={theme}>
        <Component {...pageProps} />
      </MantineProvider>
    </SWRConfig>
  );
}
