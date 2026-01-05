'use client';

import React from 'react';
import {
  Box,
  Button,
  Container,
  Grid,
  Group,
  Stack,
  Text,
  Title,
  Card,
  SimpleGrid,
  ThemeIcon,
  Badge,
} from '@mantine/core';
import {
  IconWallet,
  IconCalendar,
  IconShield,
  IconClock,
  IconArrowRight,
  IconCurrency,
} from '@tabler/icons-react';

const features = [
  {
    icon: IconWallet,
    title: 'Daily Wage Access',
    description: 'Access your earned wages every day you work, no waiting until month-end.',
  },
  {
    icon: IconCurrency,
    title: 'Zero Interest',
    description: 'Claim your daily earnings with zero interest or hidden fees.',
  },
  {
    icon: IconShield,
    title: 'Bank-Level Security',
    description: 'Your financial data is protected with enterprise-grade security.',
  },
  {
    icon: IconClock,
    title: 'Instant Transfers',
    description: 'Transfer money instantly to any bank account in Nigeria.',
  },
];

export function HomePage() {
  return (
    <Box>
      {/* Hero Section */}
      <Box py={80} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container size="lg">
          <Grid>
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="xl">
                <Badge size="lg" variant="light" color="white" c="white">
                  Fintech for African Workers
                </Badge>
                <Title size="3rem" c="white" fw={900}>
                  Get Paid Every Day You Work
                </Title>
                <Text size="xl" c="white" opacity={0.9}>
                  DailyPay empowers African workers to access their earned wages daily. 
                  No more waiting until month-end - claim your earnings when you need them most.
                </Text>
                <Group>
                  <Button size="lg" variant="white" rightSection={<IconArrowRight />}>
                    Get Started Free
                  </Button>
                  <Button size="lg" variant="subtle" c="white">
                    Learn More
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Features Section */}
      <Container size="lg" py={80}>
        <Stack align="center" gap="xl" mb={60}>
          <Title ta="center" size="2.5rem">
            Why Choose DailyPay?
          </Title>
          <Text ta="center" size="lg" c="dimmed" maw={600}>
            Built specifically for the African workforce, DailyPay offers a modern solution 
            to traditional payroll challenges.
          </Text>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="xl">
          {features.map((feature, index) => (
            <Card key={index} p="xl" shadow="sm" radius="md" style={{ height: '100%' }}>
              <Stack align="center" ta="center">
                <ThemeIcon size={60} radius="xl" variant="light">
                  <feature.icon size={30} />
                </ThemeIcon>
                <Title order={3} size="lg">
                  {feature.title}
                </Title>
                <Text c="dimmed">
                  {feature.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* How It Works Section */}
      <Box py={80} bg="gray.0">
        <Container size="lg">
          <Stack align="center" gap="xl" mb={60}>
            <Title ta="center" size="2.5rem">
              How It Works
            </Title>
            <Text ta="center" size="lg" c="dimmed" maw={600}>
              Simple, secure, and designed for the modern African worker.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
            <Card p="xl" shadow="sm" radius="md" bg="white">
              <Stack align="center" ta="center">
                <ThemeIcon size={50} radius="xl" color="blue" variant="light">
                  <Text fw={700} size="lg">1</Text>
                </ThemeIcon>
                <Title order={3}>Sign Up & Verify</Title>
                <Text c="dimmed">
                  Create your account and complete KYC verification with your BVN.
                </Text>
              </Stack>
            </Card>

            <Card p="xl" shadow="sm" radius="md" bg="white">
              <Stack align="center" ta="center">
                <ThemeIcon size={50} radius="xl" color="green" variant="light">
                  <Text fw={700} size="lg">2</Text>
                </ThemeIcon>
                <Title order={3}>Get HR Approval</Title>
                <Text c="dimmed">
                  Your HR department approves salary payments to your DailyPay account.
                </Text>
              </Stack>
            </Card>

            <Card p="xl" shadow="sm" radius="md" bg="white">
              <Stack align="center" ta="center">
                <ThemeIcon size={50} radius="xl" color="violet" variant="light">
                  <Text fw={700} size="lg">3</Text>
                </ThemeIcon>
                <Title order={3}>Earn Daily</Title>
                <Text c="dimmed">
                  Access your earned wages daily with zero interest on claimed funds.
                </Text>
              </Stack>
            </Card>
          </SimpleGrid>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box py={80} style={{ background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' }}>
        <Container size="lg">
          <Stack align="center" ta="center" gap="xl">
            <Title size="2.5rem" c="white">
              Ready to Transform Your Financial Life?
            </Title>
            <Text size="xl" c="white" opacity={0.9} maw={600}>
              Join thousands of African workers who are already earning daily with DailyPay.
            </Text>
            <Group>
              <Button size="lg" variant="white" rightSection={<IconArrowRight />}>
                Start Earning Daily
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
} 