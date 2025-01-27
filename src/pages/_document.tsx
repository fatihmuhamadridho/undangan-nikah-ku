import { Html, Head, Main, NextScript } from 'next/document';
import { ColorSchemeScript } from '@mantine/core';
import React from 'react';
import Script from 'next/script';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
        <ColorSchemeScript />
        {process.env.NODE_ENV === 'production' && (
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
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
