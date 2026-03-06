import '@mantine/core/styles.css';
import './style.css';

import React from 'react';
import { Onest } from 'next/font/google';
import { ColorSchemeScript, mantineHtmlProps, MantineProvider } from '@mantine/core';
import UpdatedFooter from '@/components/UpdatedFooter/UpdatedFooter';
import { theme } from '../theme';

const onest = Onest({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-onest',
});

export const metadata = {
  title: 'DailyPay by Alerts - Get Paid Every Day You Work',
  description:
    'Empowering African workers to access their earned wages daily. Get paid every day you work, with zero interest on claimed funds.',
};

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" {...mantineHtmlProps} className={`${onest.className} ${onest.variable}`}>
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@300;400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
        className="font-onest scroll-smooth"
      >
        <MantineProvider theme={theme}>
          <main className="bg-none" style={{ flex: 1, overflow: 'hidden' }}>
            {children}
          </main>
          <UpdatedFooter />
        </MantineProvider>
      </body>
    </html>
  );
}
