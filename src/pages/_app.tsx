import '@/styles/globals.css';
import '@mantine/core/styles.css';
import type { AppProps } from 'next/app';
import { createTheme, MantineProvider } from '@mantine/core';
import { SWRConfig } from 'swr';
import { fetcher } from '@/utils/fetcher';
import React from 'react';
import Script from 'next/script';

const theme = createTheme({});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      {process.env.NODE_ENV === 'development' && (
        <React.Fragment>
          <Script async src="https://www.googletagmanager.com/gtag/js?id=G-RJ8RGTV9KD" />
          <Script id="google-analytic">
            {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
              
                gtag('config', 'G-RJ8RGTV9KD');
              `}
          </Script>
        </React.Fragment>
      )}
      <SWRConfig value={{ fallback: pageProps.fallback || {}, revalidateOnFocus: false, fetcher: fetcher }}>
        <MantineProvider theme={theme}>
          <Component {...pageProps} />
        </MantineProvider>
      </SWRConfig>
    </React.Fragment>
  );
}
