
import {
  IconCreditCard,
  IconDeviceLaptop,
  IconMessageCircle,
  IconQuestionMark,
  IconReceipt,
  IconSettings,
  IconUsers,
} from '@tabler/icons-react';
import {
  Accordion,
  AccordionControl,
  AccordionItem,
  AccordionPanel,
  Badge,
  Button,
  Card,
  Container,
  Grid,
  GridCol,
  Group,
  rem,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import classes from './page.module.css';

const faqs = {
  general: [
    {
      question: 'What is DailyPay by Alerts?',
      answer:
        'DailyPay by Alerts is a fintech platform that allows Nigerian workers to access their earned wages daily, instead of waiting until month-end.',
    },
    {
      question: 'Is DailyPay free to use?',
      answer:
        'Yes, DailyPay is completely free for employees. There are no interest charges, hidden fees, or subscription costs.',
    },
    {
      question: 'How does DailyPay work?',
      answer:
        'Set up your employment info and we’ll send a mandate to your employer for approval. Once approved, you can access your pay anytime. ',
    },
    {
      question: 'Is DailyPay safe and secure?',
      answer:
        'Yes, we use bank-level security protocols, including 256-bit SSL encryption and are fully compliant with Nigerian financial regulations. Your personal and financial data is completely protected.',
    },
    {
      question: 'What happens if I change jobs?',
      answer:
        'Your DailyPay account remains active. You can simply update your employment details, or you can close your account at any time.',
    },
  ],
  eligibility: [
    {
      question: 'Who can use DailyPay?',
      answer:
        'Any Nigerian worker can use our service. You must have a valid BVN to use DailyPay.',
    },
    {
      question: 'Do I need a minimum salary to qualify?',
      answer:
        'There\'s no minimum salary requirement. However, you must have worked for at least one complete pay period with your current employer before accessing daily wages.',
    },
    {
      question: 'Can part-time employees use DailyPay?',
      answer:
        'Yes, part-time employees can use DailyPay as long as they meet the basic verification requirements.',
    }
  ],
  technical: [

    {
      question: 'How fast are transfers?',
      answer:
        'Transfers are typically instant.',
    },
    {
      question: 'Is there a mobile app?',
      answer:
        'Yes, we have mobile apps for both Android and iOS. You can download them from Google Play Store or Apple App Store by searching "DailyPay by Alerts".',
    },
    {
      question: 'What if the app is not working?',
      answer:
        'If you experience technical issues, first try updating the app or restarting your phone. If problems persist, contact our support team at support@alerts.africa.',
    },
  ],
};

const categories = [
  { title: 'General', icon: IconQuestionMark, color: 'blue' },
  { title: 'Eligibility', icon: IconUsers, color: 'green' },
  { title: 'Limits', icon: IconCreditCard, color: 'violet' },
  { title: 'Technical', icon: IconDeviceLaptop, color: 'teal' },
];

export default function FAQPage() {
  return (
    <>
      <PageHeaderSection
        title="Frequently Asked Questions"
        caption="Find answers to common questions about DailyPay services"
        badge="FAQ"
      />

      <Container size="lg" py={80}>


        <Stack>
          {Object.entries(faqs).map(([category, items]) => (
            <div key={category} className={classes.section}>
              <Title order={2} mb="lg" className={classes.sectionTitle}>
                {category.charAt(0).toUpperCase() + category.slice(1)} Questions
              </Title>
              <Accordion variant="separated">
                {items.map((item, index) => (
                  <AccordionItem key={index} value={`${category}-${index}`}>
                    <AccordionControl>
                      <Text fw={500}>{item.question}</Text>
                    </AccordionControl>
                    <AccordionPanel>
                      <Text c="dimmed">{item.answer}</Text>
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          ))}
        </Stack>

        <Card withBorder radius="md" className={classes.contactCard} mt={80}>
          <Group>
            <ThemeIcon size={56} radius="md" className={classes.contactIcon}>
              <IconMessageCircle style={{ width: rem(32), height: rem(32) }} />
            </ThemeIcon>
            <div>
              <Text fz="lg" fw={500}>
                Still have questions?
              </Text>
              <Text size="sm" c="dimmed" mt={4}>
                Can't find the answer you're looking for? Our support team is here to help.
              </Text>
            </div>
          </Group>
          <Group mt="xl">
            <Button component="a" href="/contact" size="md" bg="#0b4650">
              Contact Support
            </Button>
            <Button component="a" href="mailto:support@alerts.africa" variant="light" size="md" color="#0b4650">
              Email Us
            </Button>
          </Group>
        </Card>
      </Container>
    </>
  );
}
