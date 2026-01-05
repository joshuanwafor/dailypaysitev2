import { Container } from '@mantine/core';

export function MDXClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <Container size="lg" py={40}>
      {children}
    </Container>
  );
} 