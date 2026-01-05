import {
  IconShieldLock,
  IconTrash,
  IconUserOff,
  IconAlertCircle,
  IconClipboardCheck,
  IconWallet,
  IconId,
  IconBuilding,
  IconCreditCard,
  IconFileText,
  IconCashBanknote,
} from '@tabler/icons-react';
import {
  Container,
  Grid,
  Card,
  Text,
  Title,
  List,
  ThemeIcon,
  Button,
  Stack,
  rem,
  Timeline,
  Alert,
  GridCol,
  TimelineItem,
  ListItem,
  Badge,
  Group,
  Divider,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import classes from './page.module.css';
import { DeleteDataForm } from '@/components/Forms/DeleteDataForm';

const deletionSteps = [
  {
    title: 'Request Submission',
    description: 'Submit your data deletion request through our secure form with identity verification',
    icon: IconShieldLock,
    color: 'blue',
  },
  {
    title: 'Identity Verification',
    description: 'We verify your identity using BVN, NIN, and employment details for security',
    icon: IconClipboardCheck,
    color: 'teal',
  },
  {
    title: 'Account Closure',
    description: 'Your DailyPay account and virtual accounts are permanently closed',
    icon: IconUserOff,
    color: 'orange',
  },
  {
    title: 'Data Removal',
    description: 'All personal, financial, and employment data is permanently deleted',
    icon: IconTrash,
    color: 'red',
  },
  {
    title: 'Confirmation',
    description: 'You receive confirmation once deletion is complete',
    icon: IconShieldLock,
    color: 'green',
  },
];

const dataCategories = [
  {
    title: 'Personal Information',
    description: 'Name, email, phone, address, BVN, NIN',
    icon: IconId,
    color: 'blue',
  },
  {
    title: 'Financial Data',
    description: 'Virtual accounts, wallet balances, transaction history',
    icon: IconWallet,
    color: 'green',
  },
  {
    title: 'Employment Data',
    description: 'Employer details, salary information, HR approvals',
    icon: IconBuilding,
    color: 'violet',
  },
  {
    title: 'Banking Information',
    description: 'Linked bank accounts, transfer records',
    icon: IconCashBanknote,
    color: 'cyan',
  },
  {
    title: 'Daily Wage Records',
    description: 'Earnings, claims, payment history',
    icon: IconCreditCard,
    color: 'grape',
  },
  {
    title: 'KYC Documents',
    description: 'Government IDs, verification documents',
    icon: IconFileText,
    color: 'indigo',
  },
];

export default function DeleteMyDataPage() {
  return (
    <>
      <PageHeaderSection
        title="Request Data Deletion"
        caption="Permanently delete your DailyPay account and all associated data"
        badge="Privacy & Security"
      />

      <Container size="lg" py={80}>
        <Grid gutter={40}>
          <GridCol span={{ base: 12, md: 8 }}>
            <Stack gap="xl">
              <div>
                <Title order={2} className={classes.sectionTitle}>
                  Data Deletion Process
                </Title>
                <Text size="lg" c="dimmed" mb="xl">
                  We take your privacy seriously. Follow these steps to permanently delete your DailyPay account and all associated data.
                </Text>

                <Timeline active={1} bulletSize={32} lineWidth={2}>
                  {deletionSteps.map((step, index) => (
                    <TimelineItem
                      key={index}
                      bullet={
                        <ThemeIcon size={32} radius="xl" color={step.color}>
                          <step.icon style={{ width: rem(18), height: rem(18) }} />
                        </ThemeIcon>
                      }
                      title={
                        <Group gap="xs">
                          <Text fw={600}>{step.title}</Text>
                          {index === 0 && <Badge size="xs" color="blue">Current</Badge>}
                        </Group>
                      }
                    >
                      <Text size="sm" mt={4} c="dimmed">
                        {step.description}
                      </Text>
                    </TimelineItem>
                  ))}
                </Timeline>
              </div>

              <Alert
                variant="light"
                color="red"
                title="Important: Permanent Action"
                icon={<IconAlertCircle />}
              >
                <List spacing="xs" size="sm">
                  <ListItem>This process typically takes 30-45 days to complete</ListItem>
                  <ListItem>Some financial data may be retained for regulatory compliance (7 years)</ListItem>
                  <ListItem>Account deletion is permanent and cannot be undone</ListItem>
                  <ListItem>All virtual accounts and wallet balances will be closed</ListItem>
                  <ListItem>You will lose access to all DailyPay services immediately</ListItem>
                </List>
              </Alert>

              <Card withBorder radius="md" className={classes.formCard}>
                <Title order={3} mb="lg">
                  Submit Deletion Request
                </Title>
                <Text c="dimmed" mb="xl">
                  Please fill out the form below to submit your data deletion request. We will verify your 
                  identity using your BVN, NIN, and employment details before processing the request.
                </Text>
                <DeleteDataForm />
              </Card>
            </Stack>
          </GridCol>

          <GridCol span={{ base: 12, md: 4 }}>
            <Stack gap="xl">
              <Card withBorder radius="md" className={classes.infoCard}>
                <Title order={3} mb="lg">
                  Data Categories to be Deleted
                </Title>
                <Stack gap="md">
                  {dataCategories.map((category) => (
                    <div key={category.title} className={classes.categoryItem}>
                      <Group gap="sm">
                        <ThemeIcon size={32} radius="md" color={category.color}>
                          <category.icon style={{ width: rem(18), height: rem(18) }} />
                        </ThemeIcon>
                        <div>
                          <Text fw={500} size="sm">{category.title}</Text>
                          <Text size="xs" c="dimmed">{category.description}</Text>
                        </div>
                      </Group>
                    </div>
                  ))}
                </Stack>
              </Card>

              <Card withBorder radius="md" className={classes.helpCard}>
                <Title order={3} mb="lg">
                  Need Help?
                </Title>
                <Text size="sm" c="dimmed" mb="md">
                  If you have questions about the data deletion process or need assistance, our support team is here to help.
                </Text>
                <Stack gap="sm">
                  <Button variant="light" fullWidth component="a" href="/contact">
                    Contact Support
                  </Button>
                  <Button variant="subtle" fullWidth component="a" href="/faq">
                    View FAQ
                  </Button>
                </Stack>
              </Card>

              <Card withBorder radius="md" className={classes.legalCard}>
                <Title order={3} mb="lg">
                  Legal Requirements
                </Title>
                <Text size="sm" c="dimmed" mb="md">
                  Some data may be retained for legal and regulatory purposes:
                </Text>
                <List size="sm" spacing="xs">
                  <ListItem>Financial transaction records (7 years)</ListItem>
                  <ListItem>KYC verification documents (5 years)</ListItem>
                  <ListItem>Employment verification records (3 years)</ListItem>
                </List>
              </Card>
            </Stack>
          </GridCol>
        </Grid>
      </Container>
    </>
  );
}
