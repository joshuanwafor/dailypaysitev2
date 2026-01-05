'use client';

import {
  IconArrowRight,
  IconAward,
  IconBuilding,
  IconCheck,
  IconChevronDown,
  IconCircleCheck,
  IconClock,
  IconCreditCard,
  IconCurrency,
  IconDeviceAnalytics,
  IconLock,
  IconPhone,
  IconShield,
  IconStar,
  IconTrendingUp,
  IconUsers,
  IconWallet,
} from '@tabler/icons-react';
import {
  Avatar,
  BackgroundImage,
  Badge,
  Box,
  Button,
  Card,
  Center,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Paper,
  rem,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';

const features = [
  {
    icon: IconWallet,
    title: 'Daily Wage Access',
    description:
      'Access your earned wages every day you work. No more waiting until the end of the month to receive your salary.',
    highlight: 'Get paid daily',
  },
  {
    icon: IconCurrency,
    title: 'Zero Interest',
    description:
      'Claim your daily earnings with absolutely zero interest or hidden fees. What you earn is exactly what you receive.',
    highlight: '0% Interest',
  },
  {
    icon: IconShield,
    title: 'Bank-Level Security',
    description:
      'Your financial data is protected with enterprise-grade security and full regulatory compliance standards.',
    highlight: 'Fully secured',
  },
  {
    icon: IconClock,
    title: 'Instant Transfers',
    description:
      'Transfer money instantly to any Nigerian bank account whenever you need it, 24/7 availability.',
    highlight: 'Instant access',
  },
];

const steps = [
  {
    step: '01',
    title: 'Create Account & Verify',
    description:
      'Sign up with your email and complete KYC verification using your BVN. Our secure process takes just a few minutes.',
    icon: IconUsers,
    time: '2 minutes',
  },
  {
    step: '02',
    title: 'Get HR Department Approval',
    description:
      'Your HR department approves salary payments to your dedicated DailyPay virtual account.',
    icon: IconBuilding,
    time: '1-2 days',
  },
  {
    step: '03',
    title: 'Start Earning Daily',
    description:
      'Receive daily notifications about your earned wages and claim them whenever you need the funds.',
    icon: IconTrendingUp,
    time: 'Immediately',
  },
];

const stats = [
  { label: 'Active Users', value: '50,000+', icon: IconUsers },
  { label: 'Daily Transactions', value: '₦2.5B+', icon: IconTrendingUp },
  { label: 'Partner Companies', value: '1,200+', icon: IconBuilding },
  { label: 'Customer Satisfaction', value: '98%', icon: IconAward },
];

const testimonials = [
  {
    name: 'Adebayo Johnson',
    role: 'Software Developer',
    company: 'Tech Solutions Ltd, Lagos',
    avatar:
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content:
      'DailyPay has completely transformed how I manage my finances. I can handle emergencies without waiting for month-end. The process is incredibly simple and secure.',
    rating: 5,
  },
  {
    name: 'Fatima Ibrahim',
    role: 'Secondary School Teacher',
    company: 'Federal Government College, Abuja',
    avatar:
      'https://images.unsplash.com/photo-1494790108755-2616b667aab?w=150&h=150&fit=crop&crop=face',
    content:
      'As an educator, unexpected expenses used to cause me stress. Now I can access my earned salary daily. DailyPay is truly a game-changer for working professionals.',
    rating: 5,
  },
  {
    name: 'Chukwu Emeka',
    role: 'Banking Officer',
    company: 'First Bank Nigeria, Port Harcourt',
    avatar:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content:
      'The security and transparency of DailyPay impressed me as a banking professional. Zero interest and instant access to daily earnings with full compliance.',
    rating: 5,
  },
];

const benefits = [
  'No credit checks required',
  'No interest or hidden fees',
  'Instant bank transfers',
  'Full regulatory compliance',
  'Bank-level encryption',
  '24/7 customer support',
];

const playstoreLink="https://play.google.com/store/apps/details?id=com.alerts.dailypay.mobile&hl=en";
const appstoreLink="https://apps.apple.com/ng/app/dailypay/id6751250517"

export default function HomePage() {
  // Device detection function
  const detectDevice = () => {
    if (typeof window === 'undefined') return 'unknown';
    
    const userAgent = window.navigator.userAgent.toLowerCase();
    if (/iphone|ipad|ipod/.test(userAgent)) {
      return 'ios';
    } else if (/android/.test(userAgent)) {
      return 'android';
    }
    return 'unknown';
  };

  // Handle get started button click
  const handleGetStarted = () => {
    const device = detectDevice();
    
    if (device === 'ios') {
      window.open(appstoreLink, '_blank');
    } else if (device === 'android') {
      window.open(playstoreLink, '_blank');
    } else {
      // For unknown devices, open Play Store by default
      window.open(playstoreLink, '_blank');
    }
  };

  return (
    <Box>
      {/* Hero Section */}
      <Box py={140} bg="gray.0" pos="relative" style={{ overflow: 'hidden' }}>
        <Container size="lg">
          <Grid align="center" gutter={60}>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="xl">
                <Group>
                  <Box px="md" py="xs" bg="#0b4650" style={{ borderRadius: '20px' }}>
                    <Group gap="xs">
                      <Text size="sm" c="white" fw={500}>
                        🇳🇬
                      </Text>
                      <Text size="sm" c="white" fw={400}>
                        Made for Nigeria
                      </Text>
                    </Group>
                  </Box>
                  <Text size="sm" c="gray.6" fw={500}>
                    Trusted by 1,000+ workers
                  </Text>
                </Group>
                <Stack gap="md">
                  <Title
                    size={rem(58)}
                    fw={300}
                    c="#0b4650"
                    lh={1.1}
                    style={{ fontFamily: '"Outfit", sans-serif' }}
                  >
                    Get Paid Daily{' '}
                    <br />
                    Not Monthly.
                  </Title>
                  <Text size="xl" c="gray.7" lh={1.6} maw={520} fw={300}>
                    With DailyPay, your earned wages are credited every day. No more waiting till payday. Withdraw what you’ve worked for — when you need it.
                  </Text>
                </Stack>

                <Box
                  p="lg"
                  bg="white"
                  style={{
                    borderRadius: '16px',
                    border: '1px solid #e9ecef',
                  }}
                >
                  <Stack gap="sm">
                    <Text size="sm" fw={600} c="#0b4650" mb="xs">
                      ✨ What makes us different:
                    </Text>
                    <SimpleGrid cols={1} spacing="xs">
                      <Group gap="sm">
                        <Box
                          w={24}
                          h={24}
                          bg="#329aae"
                          style={{
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconCheck size={14} color="white" />
                        </Box>
                        <Text size="sm" c="gray.7" fw={400}>
                          <Text component="span" fw={600}>
                            Daily payment
                          </Text>{' '}
                          of earned wages
                        </Text>
                      </Group>

                      <Group gap="sm">
                        <Box
                          w={24}
                          h={24}
                          bg="#329aae"
                          style={{
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconCheck size={14} color="white" />
                        </Box>
                        <Text size="sm" c="gray.7" fw={400}>
                          <Text component="span" fw={600}>
                            Dedicated
                          </Text>{' '}
                          Salary Account
                        </Text>
                      </Group>

                      <Group gap="sm">
                        <Box
                          w={24}
                          h={24}
                          bg="#329aae"
                          style={{
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconCheck size={14} color="white" />
                        </Box>
                        <Text size="sm" c="gray.7" fw={400}>
                          <Text component="span" fw={600}>
                            Zero interest
                          </Text>{' '}
                          on all claimed wages
                        </Text>
                      </Group>
                      <Group gap="sm">
                        <Box
                          w={24}
                          h={24}
                          bg="#329aae"
                          style={{
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <IconCheck size={14} color="white" />
                        </Box>
                        <Text size="sm" c="gray.7" fw={400}>
                          <Text component="span" fw={600}>
                            Bank-level security
                          </Text>{' '}
                          for all transactions
                        </Text>
                      </Group>

                    </SimpleGrid>
                  </Stack>
                </Box>

                <Group gap="md" mt="lg">
                  <Button
                    size="xl"
                    bg="#0b4650"
                    rightSection={<IconArrowRight size={20} />}
                    radius="xl"
                    fw={600}
                    px="xl"
                    h={56}
                    onClick={handleGetStarted}
                  >
                    Get Started Now
                  </Button>
                </Group>

                <Group gap="xl" mt="md">
                  <Text size="xs" c="gray.5">
                    🏆 Rated 4.9/5 by users
                  </Text>
                  <Text size="xs" c="gray.5">
                    🔒 Fully licensed & regulated
                  </Text>
                </Group>
              </Stack>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 6 }}>
              <Box pos="relative" h={600}>
                {/* Clean background gradient */}
                <Box
                  pos="absolute"
                  inset={0}
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(11, 70, 80, 0.03) 0%, rgba(50, 154, 174, 0.05) 50%, rgba(90, 199, 221, 0.03) 100%)',
                    borderRadius: '24px',
                  }}
                />

                {/* Main content */}
                <Stack align="center" justify="center" h="100%" gap="xl" p="xl">
                  {/* Key stats row */}
                  <SimpleGrid cols={3} spacing="lg" w="100%">
                    <Paper
                      p="md"
                      radius="lg"
                      bg="white"
                      ta="center"
                      style={{ border: '1px solid #f1f3f4' }}
                    >
                      <Stack gap="xs">
                        <IconWallet size={24} color="#329aae" style={{ margin: '0 auto' }} />
                        <Text size="lg" fw={700} c="#0b4650">
                          ₦1M+
                        </Text>
                        <Text size="xs" c="gray.6">
                          Available
                        </Text>
                      </Stack>
                    </Paper>

                    <Paper
                      p="md"
                      radius="lg"
                      bg="white"
                      ta="center"
                      style={{ border: '1px solid #f1f3f4' }}
                    >
                      <Stack gap="xs">
                        <IconUsers size={24} color="#329aae" style={{ margin: '0 auto' }} />
                        <Text size="lg" fw={700} c="#0b4650">
                          1k+
                        </Text>
                        <Text size="xs" c="gray.6">
                          Users
                        </Text>
                      </Stack>
                    </Paper>

                    <Paper
                      p="md"
                      radius="lg"
                      bg="white"
                      ta="center"
                      style={{ border: '1px solid #f1f3f4' }}
                    >
                      <Stack gap="xs">
                        <IconShield size={24} color="#329aae" style={{ margin: '0 auto' }} />
                        <Text size="lg" fw={700} c="#0b4650">
                          100%
                        </Text>
                        <Text size="xs" c="gray.6">
                          Secure
                        </Text>
                      </Stack>
                    </Paper>
                  </SimpleGrid>

                  {/* Main phone display */}
                  <Box pos="relative">
                    <Image
                      src="/hlogodark.svg"
                      alt="DailyPay Mobile Application"
                      w={280}
                      mx="auto"
                      radius="xl"
                      style={{
                        filter: 'drop-shadow(0 20px 40px rgba(11, 70, 80, 0.15))',
                      }}
                    />
                  </Box>

                  {/* Feature highlights */}
                  <SimpleGrid cols={2} spacing="md" w="100%">
                    <Group gap="sm">
                      <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                        <IconCheck size={16} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text size="sm" fw={500} c="#0b4650">
                          Zero Interest
                        </Text>
                        <Text size="xs" c="gray.6">
                          On all claims
                        </Text>
                      </Stack>
                    </Group>

                    <Group gap="sm">
                      <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                        <IconClock size={16} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text size="sm" fw={500} c="#0b4650">
                          Instant Access
                        </Text>
                        <Text size="xs" c="gray.6">
                          24/7 availability
                        </Text>
                      </Stack>
                    </Group>

                    <Group gap="sm">
                      <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                        <IconCurrency size={16} />
                      </ThemeIcon>
                      <Stack gap={0}>
                        <Text size="sm" fw={500} c="#0b4650">
                          Daily Earnings
                        </Text>
                        <Text size="xs" c="gray.6">
                          Every workday
                        </Text>
                      </Stack>
                    </Group>

                   
                  </SimpleGrid>

                  {/* Trust badge */}
                  <Group gap="md" justify="center" mt="md">
                    <Group gap="xs">
                      <IconShield size={16} color="green" />
                      <Text size="xs" c="gray.6" fw={500}>
                        Bank-level security
                      </Text>
                    </Group>
                    <Text size="xs" c="gray.4">
                      •
                    </Text>
                    <Group gap="xs">
                      <IconCheck size={16} color="green" />
                      <Text size="xs" c="gray.6" fw={500}>
                        Fully licensed
                      </Text>
                    </Group>
                    <Text size="xs" c="gray.4">
                      •
                    </Text>
                    <Group gap="xs">
                      <IconAward size={16} color="green" />
                      <Text size="xs" c="gray.6" fw={500}>
                        98% satisfaction
                      </Text>
                    </Group>
                  </Group>
                </Stack>
              </Box>
            </Grid.Col>
          </Grid>
        </Container>
      </Box>

      {/* Stats Section */}
      {/* <Box py={80} bg="gray.0">
        <Container size="lg">
          <Stack align="center" mb="xl">
            <Text size="sm" tt="uppercase" fw={500} c="gray.6">
              Trusted by thousands
            </Text>
            <Title order={2} ta="center" fw={400} c="#0b4650">
              Join the DailyPay Community
            </Title>
          </Stack>

          <SimpleGrid cols={{ base: 2, md: 4 }}>
            {stats.map((stat, index) => (
              <Card key={index} p="xl" ta="center" shadow="sm" radius="md" bg="white">
                <Stack align="center" gap="sm">
                  <ThemeIcon size={50} color="#0b4650" variant="light" radius="xl">
                    <stat.icon size={24} />
                  </ThemeIcon>
                  <Text size="xl" fw={600} c="#0b4650">
                    {stat.value}
                  </Text>
                  <Text size="sm" c="gray.6" fw={400}>
                    {stat.label}
                  </Text>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box> */}

      {/* Features Section */}
      <Container size="lg" py={100}>
        <Stack align="center" gap="lg" mb={80}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Why choose DailyPay?
          </Text>
          <Title ta="center" size={rem(36)} fw={400} c="#0b4650" maw={600}>
            Designed specifically for the modern
            <Text component="span" fw={600} c="#329aae">
              {' '}
              African workforce
            </Text>
          </Title>
          <Text ta="center" size="md" c="gray.7" maw={550} lh={1.6}>
            DailyPay addresses the unique financial challenges faced by Nigerian workers with
            innovative, secure, and transparent solutions.
          </Text>
          <Divider w={60} size="sm" color="#329aae" />
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {features.map((feature, index) => (
            <Card
              key={index}
              p="xl"
              shadow="sm"
              radius="lg"
              h="100%"
              bg="white"
              style={{ border: '1px solid #f1f3f4' }}
            >
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={60} radius="xl" variant="light" color="#0b4650">
                    <feature.icon size={28} />
                  </ThemeIcon>
                  <Badge size="xs" variant="dot" color="#329aae">
                    {feature.highlight}
                  </Badge>
                </Group>
                <Title order={4} size="md" fw={500} c="#0b4650">
                  {feature.title}
                </Title>
                <Text c="gray.7" size="sm" lh={1.6}>
                  {feature.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* How It Works Section */}
      <Box py={100} bg="gray.0">
        <Container size="lg">
          <Stack align="center" gap="lg" mb={80}>
            <Text size="sm" tt="uppercase" fw={500} c="gray.6">
              Simple process
            </Text>
            <Title ta="center" size={rem(36)} fw={400} c="#0b4650">
              How DailyPay Works
            </Title>
            <Text ta="center" size="md" c="gray.7" maw={500} lh={1.6}>
              Get started in three simple steps and begin accessing your daily wages immediately.
            </Text>
            <Divider w={60} size="sm" color="#329aae" />
          </Stack>

          <Grid gutter="xl">
            {steps.map((step, index) => (
              <Grid.Col key={index} span={{ base: 12, md: 4 }}>
                <Card
                  p="xl"
                  shadow="sm"
                  radius="lg"
                  bg="white"
                  h="100%"
                  style={{ border: '1px solid #f1f3f4' }}
                >
                  <Stack gap="lg">
                    <Group justify="space-between">
                      <ThemeIcon size={50} radius="xl" color="#0b4650">
                        <Text fw={600} size="md" c="white">
                          {step.step}
                        </Text>
                      </ThemeIcon>
                      <Badge variant="light" color="gray" size="sm">
                        {step.time}
                      </Badge>
                    </Group>
                    <ThemeIcon size={40} radius="xl" variant="light" color="#329aae" mx="auto">
                      <step.icon size={20} />
                    </ThemeIcon>
                    <Stack gap="sm" ta="center">
                      <Title order={4} fw={500} c="#0b4650">
                        {step.title}
                      </Title>
                      <Text c="gray.7" size="sm" lh={1.6}>
                        {step.description}
                      </Text>
                    </Stack>
                  </Stack>
                </Card>
                {index < steps.length - 1 && (
                  <Center my="xl" hiddenFrom="md">
                    <IconChevronDown size={24} color="#329aae" />
                  </Center>
                )}
              </Grid.Col>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Testimonials Section */}
      <Container size="lg" py={100}>
        <Stack align="center" gap="lg" mb={80}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Customer stories
          </Text>
          <Title ta="center" size={rem(36)} fw={400} c="#0b4650">
            Trusted by Nigerian Professionals
          </Title>
          <Text ta="center" size="md" c="gray.7" maw={500} lh={1.6}>
            See how DailyPay is transforming the financial lives of workers across Nigeria.
          </Text>
          <Divider w={60} size="sm" color="#329aae" />
        </Stack>

        <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              p="xl"
              shadow="sm"
              radius="lg"
              h="100%"
              bg="white"
              style={{ border: '1px solid #f1f3f4' }}
            >
              <Stack gap="md" h="100%">
                <Group gap="xs" mb="sm">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <IconStar key={i} size={16} fill="#ffd43b" color="#ffd43b" />
                  ))}
                </Group>
                <Text lh={1.7} c="gray.7" size="sm" style={{ fontStyle: 'italic' }}>
                  "{testimonial.content}"
                </Text>
                <Divider size="xs" color="gray.2" />
                <Group gap="sm" mt="auto">
                  <Avatar size="lg" radius="xl" />
                  <Stack gap={2}>
                    <Text fw={500} size="sm" c="#0b4650">
                      {testimonial.name}
                    </Text>
                    <Text size="xs" c="gray.6" fw={400}>
                      {testimonial.role}
                    </Text>
                    {/* <Text size="xs" c="gray.5">
                      {testimonial.company}
                    </Text> */}
                  </Stack>
                </Group>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

      {/* CTA Section */}
      <Box py={120} bg="white" pos="relative">
        <Container size="lg">
          <Box
            p={80}
            bg="#0b4650"
            style={{
              borderRadius: '24px',
              border: '2px solid #329aae',
            }}
          >
            <Stack align="center" ta="center" gap="xl">
              <Text size="sm" tt="uppercase" fw={500} c="#329aae">
                Ready to get started?
              </Text>

              <Title size={rem(42)} c="white" fw={300} maw={700} lh={1.3}>
                Transform Your Financial Life with{' '}
                <Text component="span" fw={600} c="#329aae">
                  DailyPay
                </Text>
              </Title>

              <Text size="lg" c="white" opacity={0.9} maw={600} lh={1.7} fw={300}>
              Join the growing number of Nigerian workers who are already earning daily. Zero interest,
                maximum flexibility, complete security.
              </Text>

              <Group gap="lg" mt="xl">
                <Button
                  size="xl"
                  variant="white"
                  c="#0b4650"
                  rightSection={<IconArrowRight size={18} />}
                  radius="xl"
                  fw={600}
                  px="xl"
                  h={56}
                  onClick={handleGetStarted}
                >
                  Get Started Now
                </Button>
                <Button
                  size="xl"
                  variant="outline"
                  c="white"
                  radius="xl"
                  fw={400}
                  visibleFrom="md"
                  px="xl"
                  h={56}
                  style={{ borderColor: 'white' }}
                >
                  Learn More
                </Button>
              </Group>

              <Box mt={60} w="100%">
                <Divider color="rgba(255,255,255,0.2)" mb="xl" />

                <SimpleGrid cols={{ base: 2, sm: 3 }} spacing="xl">
                  <Group gap="md" justify="center">
                    <Box
                      w={44}
                      h={44}
                      bg="rgba(255,255,255,0.1)"
                      style={{
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <IconShield size={20} color="white" />
                    </Box>
                    <Stack gap={2}>
                      <Text size="sm" c="white" fw={500}>
                        Bank-Level Security
                      </Text>
                      <Text size="xs" c="white" opacity={0.7}>
                        Your data is protected
                      </Text>
                    </Stack>
                  </Group>

                  <Group gap="md" justify="center">
                    <Box
                      w={44}
                      h={44}
                      bg="rgba(255,255,255,0.1)"
                      style={{
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <IconLock size={20} color="white" />
                    </Box>
                    <Stack gap={2}>
                      <Text size="sm" c="white" fw={500}>
                        Fully Licensed
                      </Text>
                      <Text size="xs" c="white" opacity={0.7}>
                        Regulated & compliant
                      </Text>
                    </Stack>
                  </Group>

                  <Group gap="md" justify="center">
                    <Box
                      w={44}
                      h={44}
                      bg="rgba(255,255,255,0.1)"
                      style={{
                        borderRadius: '12px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        border: '1px solid rgba(255,255,255,0.2)',
                      }}
                    >
                      <IconCheck size={20} color="white" />
                    </Box>
                    <Stack gap={2}>
                      <Text size="sm" c="white" fw={500}>
                        Zero Interest
                      </Text>
                      <Text size="xs" c="white" opacity={0.7}>
                        No hidden fees
                      </Text>
                    </Stack>
                  </Group>
                </SimpleGrid>
              </Box>

              <Text size="xs" c="white" opacity={0.6} ta="center" mt="xl">
                By clicking "Get Started Now", you agree to our Terms of Service and Privacy Policy.
                No commitment required – start your free account today.
              </Text>
            </Stack>
          </Box>
        </Container>
      </Box>
    </Box>
  );
}
