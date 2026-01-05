'use client';

import React from 'react';
import { AppShell, Box } from '@mantine/core';
import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <AppShell>
      <Header />
      <Box component="main" style={{ minHeight: 'calc(100vh - 120px)' }}>
        {children}
      </Box>
      <Footer />
    </AppShell>
  );
} 