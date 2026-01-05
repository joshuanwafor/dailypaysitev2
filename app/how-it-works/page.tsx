'use client';

import {
  IconAward,
  IconBuilding,
  IconCheck,
  IconHeart,
  IconShield,
  IconStar,
  IconTarget,
  IconTrendingUp,
  IconUsers,
  IconWallet,
  IconClock,
  IconCurrency,
  IconPhone,
  IconMail,
  IconChevronRight,
  IconArrowRight,
  IconDeviceAnalytics,
  IconCreditCard,
  IconLock,
  IconCashBanknote,
  IconCalendar,
  IconIdBadge2,
  IconBusinessplan,
} from '@tabler/icons-react';
import {
  Avatar,
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  GridCol,
  Group,
  rem,
  SimpleGrid,
  Stack,
  Text,
  ThemeIcon,
  Title,
  List,
  ListItem,
  Timeline,
  TimelineItem,
  Paper,
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';

const steps = [
  {
    step: '01',
    title: 'Create Account, Verify Identity and Enable DailyPay',
    description: 'Sign up with your email address and complete the KYC verification process using your BVN (Bank Verification Number). Enable DailyPay and provide employment details to start earning DailyPay.',
    icon: IconUsers,
    time: '2-3 minutes',
    details: [
      'Sign up with your email address',
      'Complete KYC verification using your BVN',
      'Enable DailyPay feature',
      'Provide employment details including HR email address',
      'Submit employment information for verification'
    ],
    requirements: ['BVN', 'Email address', 'Details of employer including HR email address', 'Employment information']
  },
  {
    step: '02',
    title: 'HR Department Approval',
    description: 'Your HR upon receiving an email from DailyPay by Alerts must after reading through the terms, click the approve button to activate your DailyPay.',
    icon: IconBuilding,
    time: '1-3 business days',
    details: [
      'HR receives email notification from DailyPay by Alerts',
      'HR reviews the terms and conditions',
      'HR confirms employment details',
      'HR clicks approve button to activate DailyPay',
      'System processes approval and activates account'
    ],
    requirements: ['Valid HR Email address', 'Employer agreement to the terms', 'HR confirmation of your employment details']
  },
  {
    step: '03',
    title: 'Start Accessing DailyPay',
    description: 'Once HR approves, you will be notified and you will start earning DailyPay. You will be notified of your DailyPay credit at the close of business everyday.',
    icon: IconTrendingUp,
    time: 'Immediate access',
    details: [
      'Receive notification of HR approval',
      'Start earning DailyPay credits',
      'Get daily notifications of DailyPay credit at close of business',
      'Access your earned wages through the platform',
      'Transfer funds to your DailyPay by Alert salary account'
    ],
    requirements: ['HR Approval', 'DailyPay by Alert salary account']
  },
];

const features = [
  {
    icon: IconCurrency,
    title: 'Zero Interest & Fees',
    description: 'No interest charges, no hidden fees, no surprises. What you earn is exactly what you receive.',
    highlight: '0% Interest'
  },
  {
    icon: IconClock,
    title: 'Instant Transfers',
    description: 'Transfer your earned wages to any Nigerian bank account within seconds, 24/7.',
    highlight: 'Real-time'
  },
  {
    icon: IconShield,
    title: 'Bank-Level Security',
    description: 'Enterprise-grade encryption and full regulatory compliance for complete peace of mind.',
    highlight: 'Fully Secure'
  },
  {
    icon: IconDeviceAnalytics,
    title: 'Smart Analytics',
    description: 'Track your earning patterns, spending habits, and financial goals with detailed insights.',
    highlight: 'AI-Powered'
  }
];

const faqs = [
  {
    question: 'How much of my salary can I access daily?',
    answer:
      `With DailyPay, you don’t have to wait until payday. At the end of each workday, your entire daily wage is available for withdrawal.
👉 Example: If you earn ₦5,000 per day, you’ll see ₦5,000 credited daily in the app — and you can withdraw it anytime.
Your money. Your control. DailyPay.
`,
  },
  {
    question: 'What happens if I change jobs?',
    answer:
      `If you change employers, you must update your employment details in the app. Once updated, DailyPay will send a mandate to your new employer, and your DailyPay access will be reactivated after the mandate is completed.
⚠️ Please note: Failure to update your employment information after a job change will be considered a breach of your agreement. If payments remain outstanding during this period, it will be treated as a default.`,
  },
  {
    question: 'Are there limits on withdrawals?',
    answer:
      `There are no limits on withdrawals. You can access your earned wages as often as you like, up to the total amount you’ve earned for that period.`,
  },
  {
    question: 'How does dailypay calculate my daily earnings ?',
    answer:
      `When you join DailyPay, we send a mandate to your HR department for approval. Once approved, your employer agrees to pay your salary into the dedicated DailyPay salary account we provide. From there, DailyPay breaks down your confirmed monthly salary into daily amounts, based on the number of workdays in the month. This ensures accuracy, fairness, and transparency in what you can access each day.`,
  },
]

export default function HowItWorksPage() {
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

  // App store links
  const playStoreLink = 'https://play.google.com/store/apps/details?id=com.alerts.dailypay.mobile&hl=en';
  const appStoreLink = 'https://apps.apple.com/ng/app/dailypay/id6751250517';

  // Handle get started button click
  const handleGetStarted = () => {
    const device = detectDevice();
    
    if (device === 'ios') {
      window.open(appStoreLink, '_blank');
    } else if (device === 'android') {
      window.open(playStoreLink, '_blank');
    } else {
      // For unknown devices, open Play Store by default
      window.open(playStoreLink, '_blank');
    }
  };

  return (
    <>
      <PageHeaderSection
        title="How It Works"
        caption="Empowering African workers with daily access to their earned wages"
        badge="How It Works"
      />

      <Container size="lg" py={80}>
        {/* Introduction */}
        <Stack align="center" gap="lg" mb={80}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Simple 3-step process
          </Text>
          <Title ta="center" size={rem(36)} fw={400} c="#0b4650" maw={600}>
            Get started with DailyPay in 
            <Text component="span" fw={600} c="#329aae"> minutes, not days</Text>
          </Title>
          <Text ta="center" size="lg" c="gray.7" maw={550} lh={1.6} fw={300}>
            Our streamlined process is designed to get you accessing your daily wages 
            as quickly as possible while maintaining the highest security standards.
          </Text>
          <Divider w={60} size="sm" color="#329aae" />
        </Stack>

        {/* Steps Timeline */}
        <Timeline active={3} bulletSize={60} lineWidth={3} color="#329aae" mb={80}>
          {steps.map((step, index) => (
            <Timeline.Item
              key={index}
              bullet={
                <ThemeIcon size={60} radius="xl" color="#0b4650">
                  <step.icon size={28} />
                </ThemeIcon>
              }
              title={
                <Group gap="md" mb="sm">
                  <Badge size="lg" variant="filled" color="#329aae" radius="sm">
                    {step.step}
                  </Badge>
                  <Title order={3} fw={500} c="#0b4650">
                    {step.title}
                  </Title>
                  <Badge size="sm" variant="light" color="green">
                    {step.time}
                  </Badge>
                </Group>
              }
            >
              <Grid mt="md">
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Stack gap="md">
                    <Text size="md" c="gray.7" lh={1.6} fw={300}>
                      {step.description}
                    </Text>
                    
                    <Card p="md" bg="gray.0" radius="md">
                      <Stack gap="xs">
                        <Text size="sm" fw={600} c="#0b4650" mb="xs">
                          What you'll need:
                        </Text>
                        {step.requirements.map((req, reqIndex) => (
                          <Group key={reqIndex} gap="sm">
                            <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                              <IconCheck size={12} />
                            </ThemeIcon>
                            <Text size="sm" c="gray.7">
                              {req}
                            </Text>
                          </Group>
                        ))}
                      </Stack>
                    </Card>
                  </Stack>
                </Grid.Col>
                
                <Grid.Col span={{ base: 12, md: 6 }}>
                  <Card p="lg" bg="white" shadow="sm" radius="lg" h="100%">
                    <Stack gap="md">
                      <Text size="sm" fw={600} c="#0b4650" mb="xs">
                        Detailed process:
                      </Text>
                      <List 
                        spacing="sm"
                        size="sm"
                        icon={
                          <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                            <IconArrowRight size={12} />
                          </ThemeIcon>
                        }
                      >
                        {step.details.map((detail, detailIndex) => (
                          <List.Item key={detailIndex}>
                            <Text size="sm" c="gray.7">
                              {detail}
                            </Text>
                          </List.Item>
                        ))}
                      </List>
                    </Stack>
                  </Card>
                </Grid.Col>
              </Grid>
            </Timeline.Item>
          ))}
        </Timeline>

        {/* Key Features */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Why choose DailyPay?
          </Text>
          <Title ta="center" size={rem(32)} fw={400} c="#0b4650" maw={600}>
            Built with Nigerian workers in mind
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl" mb={80}>
          {features.map((feature, index) => (
            <Card key={index} p="xl" shadow="sm" radius="lg" h="100%" bg="white" style={{ border: '1px solid #f1f3f4' }}>
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={70} radius="xl" variant="light" color="#0b4650">
                  <feature.icon size={32} />
                </ThemeIcon>
                <Badge size="sm" variant="dot" color="#329aae">
                  {feature.highlight}
                </Badge>
                <Title order={4} size="lg" fw={500} c="#0b4650">
                  {feature.title}
                </Title>
                <Text c="gray.7" size="sm" lh={1.6}>
                  {feature.description}
                </Text>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Requirements Section */}
        <Card p="xl" bg="gray.0" radius="lg" mb={80}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 6 }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} color="#0b4650" variant="light" radius="xl">
                    <IconIdBadge2 size={24} />
                  </ThemeIcon>
                  <Title order={3} fw={500} c="#0b4650">
                    Eligibility Requirements
                  </Title>
                </Group>
                <Text c="gray.7" size="md" lh={1.6}>
                  To use DailyPay, you must meet these basic requirements:
                </Text>
                <List 
                  spacing="sm"
                  icon={
                    <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                      <IconCheck size={12} />
                    </ThemeIcon>
                  }
                >
                  <List.Item>
                    <Text size="sm">Be 18 years or older</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Have a valid BVN (Bank Verification Number)</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Be an employee of an active company</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Be debt-free</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Ensured HR Approval to DailyPay by Alerts terms</Text>
                  </List.Item>
                  <List.Item>
                    <Text size="sm">Must have linked bank account to confirm payment information</Text>
                  </List.Item>
                </List>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>

        {/* FAQ Section */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Common questions
          </Text>
          <Title ta="center" size={rem(32)} fw={400} c="#0b4650" maw={600}>
            Frequently Asked Questions
          </Title>
          <Text ta="center" size="md" c="gray.7" maw={550} lh={1.6}>
            Have questions about how DailyPay works? Find answers to the most common questions below.
          </Text>
        </Stack>

        <Accordion variant="separated" radius="md" mb={80}>
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={index.toString()}>
              <Accordion.Control>
                <Text size="md" fw={500} c="#0b4650">
                  {faq.question}
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm" c="gray.7" lh={1.6}>
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* CTA Section */}
        <Card p="xl" bg="#0b4650" radius="lg">
          <Stack align="center" gap="lg" ta="center">
            <Title order={2} c="white" fw={400}>
              Ready to start accessing your daily wages?
            </Title>
            <Text c="gray.3" size="lg" maw={500} lh={1.6}>
              Join thousands of Nigerian workers who have already transformed their financial freedom with DailyPay.
            </Text>
            <Group gap="md" mt="md">
              <Button 
                size="xl" 
                bg="#329aae"
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
          </Stack>
        </Card>
      </Container>
    </>
  );
}
