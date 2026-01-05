
import {
  Container,
  Title,
  Text,
  Stack,
  Badge,
  Grid,
  Card,
  Button,
  Group,
  ThemeIcon,
  TextInput,
  SimpleGrid,
  rem,
  GridCol,
} from '@mantine/core';
import {
  IconSearch,
  IconBook2,
  IconVideo,
  IconMessages,
  IconDownload,
  IconRocket,
  IconTools,
  IconBuildingStore,
  IconReceipt,
  IconChartBar,
  IconUsers,
  IconHeadset,
} from '@tabler/icons-react';
import classes from './page.module.css';

const guides = [
  {
    title: 'Getting Started',
    description: 'Learn the basics of setting up and using DailyPay',
    icon: IconRocket,
    color: 'blue',
    link: '/docs/getting-started'
  },
  {
    title: 'Account Setup',
    description: 'Complete KYC and employment verification',
    icon: IconDownload,
    color: 'teal',
    link: '/docs/account-setup'
  },
  {
    title: 'Daily Wage Access',
    description: 'How to claim and manage your daily wages',
    icon: IconTools,
    color: 'violet',
    link: '/docs/daily-wage-access'
  },
  {
    title: 'Virtual Accounts',
    description: 'Understanding your virtual account and wallet',
    icon: IconBuildingStore,
    color: 'indigo',
    link: '/docs/virtual-accounts'
  },
  {
    title: 'Transfers & Payments',
    description: 'Transfer funds to your linked bank accounts',
    icon: IconReceipt,
    color: 'grape',
    link: '/docs/transfers'
  },
  {
    title: 'Employment Verification',
    description: 'HR approval process and requirements',
    icon: IconChartBar,
    color: 'cyan',
    link: '/docs/employment-verification'
  }
];

const supportChannels = [
  {
    title: 'Documentation',
    description: 'Browse our detailed documentation',
    icon: IconBook2,
    color: 'blue',
    link: '/documentation'
  },
  {
    title: 'Video Tutorials',
    description: 'Watch step-by-step video guides',
    icon: IconVideo,
    color: 'red',
    link: '/tutorials'
  },
  {
    title: 'Community Forum',
    description: 'Connect with other DailyPay users',
    icon: IconUsers,
    color: 'teal',
    link: '/community'
  },
  {
    title: 'Support Team',
    description: 'Get help from our support team',
    icon: IconHeadset,
    color: 'violet',
    link: '/contact'
  }
];

export default function HelpPage() {
  return (
    <>
      <div className={classes.header}>
        <Container size="lg">
          <Stack align="center" py={80} gap={0}>
            <Badge variant="filled" size="lg">Help Center</Badge>
            <Title className={classes.title} ta="center">
              How can we help you?
            </Title>
            <Text c="dimmed" ta="center" maw={600} size="lg">
              Find guides, tutorials, and answers about daily wage access and financial services
            </Text>
            <TextInput
              className={classes.search}
              size="lg"
              radius="md"
              placeholder="Search for guides about daily wages, KYC, transfers..."
              leftSection={<IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />}
            />
          </Stack>
        </Container>
      </div>

      <Container size="lg" py={80}>
        {/* Popular Guides */}
        <Stack mb={80} >
          <Title order={2} className={classes.sectionTitle}>
            Popular Guides
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing={40}>
            {guides.map((guide) => (
              <Card key={guide.title} withBorder radius="md" className={classes.guideCard}>
                <ThemeIcon size={40} radius="md" color={guide.color} className={classes.guideIcon}>
                  <guide.icon style={{ width: rem(20), height: rem(20) }} stroke={1.5} />
                </ThemeIcon>
                <Text fz="lg" fw={500} mt="md">
                  {guide.title}
                </Text>
                <Text fz="sm" c="dimmed" mt={4}>
                  {guide.description}
                </Text>
                <Button 
                  variant="light" 
                  color={guide.color} 
                  fullWidth 
                  mt="md"
                  component="a"
                  href={guide.link}
                >
                  Learn More
                </Button>
              </Card>
            ))}
          </SimpleGrid>
        </Stack>

        {/* Support Channels */}
        <Stack>
          <Title order={2} className={classes.sectionTitle}>
            Support Channels
          </Title>
          <Grid>
            {supportChannels.map((channel) => (
              <GridCol key={channel.title} span={{ base: 12, sm: 6 }}>
                <Card withBorder radius="md" className={classes.channelCard}>
                  <Group>
                    <ThemeIcon size={50} radius="md" color={channel.color} className={classes.channelIcon}>
                      <channel.icon style={{ width: rem(28), height: rem(28) }} stroke={1.5} />
                    </ThemeIcon>
                    <div>
                      <Text fz="lg" fw={500}>
                        {channel.title}
                      </Text>
                      <Text fz="sm" c="dimmed">
                        {channel.description}
                      </Text>
                    </div>
                  </Group>
                  <Button 
                    variant="light" 
                    color={channel.color}
                    fullWidth 
                    mt="xl"
                    component="a"
                    href={channel.link}
                  >
                    Open {channel.title}
                  </Button>
                </Card>
              </GridCol>
            ))}
          </Grid>
        </Stack>

        {/* Contact Support */}
        <Card withBorder radius="md" className={classes.contactCard} mt={80}>
          <Group align="flex-start">
            <ThemeIcon size={60} radius="md" className={classes.contactIcon}>
              <IconMessages style={{ width: rem(32), height: rem(32) }} />
            </ThemeIcon>
            <div>
              <Text fz="xl" fw={500}>Can't find what you're looking for?</Text>
              <Text size="sm" c="dimmed" mt={4} maw={500}>
                Our support team is here to help with your daily wage access, KYC verification, and financial services. Contact us directly and we'll get back to you as soon as possible.
              </Text>
              <Group mt="md">
                <Button component="a" href="/contact">
                  Contact Support
                </Button>
                <Button variant="light" component="a" href="/faq">
                  View FAQ
                </Button>
              </Group>
            </div>
          </Group>
        </Card>
      </Container>
    </>
  );
} 