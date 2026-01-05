'use client';
import {
  IconCreditCard,
  IconDeviceLaptop,
  IconMessageCircle,
  IconQuestionMark,
  IconReceipt,
  IconSettings,
  IconUsers,
  IconPhone,
  IconMail,
  IconMapPin,
  IconClock,
  IconBrandTwitter,
  IconBrandLinkedin,
  IconBrandInstagram,
  IconBrandFacebook,
  IconHeadset,
  IconHelpCircle,
  IconShield,
  IconCurrencyNaira,
  IconArrowRight,
  IconSend,
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
  TextInput,
  Textarea,
  Select,
  SimpleGrid,
  Box,
  Divider,
  List,
  ListItem,
  Anchor,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';
import classes from './page.module.css';

const contactMethods = [
  {
    icon: IconPhone,
    title: 'Call Us',
    description: 'Speak directly with our support team',
    contact: '+234 (0) 800 DAILYPAY',
    subtext: 'Available 24/7',
    color: '#0b4650',
  },
  {
    icon: IconMail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    contact: 'support@dailypay.ng',
    subtext: 'Response within 2 hours',
    color: '#329aae',
  },
  {
    icon: IconMessageCircle,
    title: 'Live Chat',
    description: 'Get instant help through our app',
    contact: 'Available in app',
    subtext: 'Average response: 1 minute',
    color: '#0b4650',
  },
  {
    icon: IconMapPin,
    title: 'Visit Our Office',
    description: 'Meet us in person',
    contact: 'Lagos, Nigeria',
    subtext: 'By appointment only',
    color: '#329aae',
  },
];

const supportCategories = [
  {
    icon: IconUsers,
    title: 'Account Support',
    description: 'Help with account setup, verification, and management',
    topics: ['Account verification', 'BVN issues', 'Profile updates', 'Account security']
  },
  {
    icon: IconCurrencyNaira,
    title: 'Transaction Issues',
    description: 'Assistance with withdrawals, transfers, and payment problems',
    topics: ['Failed transfers', 'Missing funds', 'Transaction history', 'Bank account issues']
  },
  {
    icon: IconSettings,
    title: 'Technical Support',
    description: 'App problems, login issues, and technical troubleshooting',
    topics: ['App crashes', 'Login problems', 'Performance issues', 'Feature requests']
  },
  {
    icon: IconShield,
    title: 'Security & Compliance',
    description: 'Report security concerns and compliance questions',
    topics: ['Suspicious activity', 'Data privacy', 'Regulatory questions', 'Security tips']
  }
];

const offices = [
  {
    city: 'Lagos',
    address: '15 Admiralty Way, Lekki Phase 1, Lagos State',
    type: 'Head Office',
    hours: 'Mon-Fri: 8:00 AM - 6:00 PM',
    phone: '+234 (0) 813 DAILY-01',
  },
  {
    city: 'Abuja',
    address: '142 Adetokunbo Ademola Crescent, Wuse 2, FCT',
    type: 'Regional Office',
    hours: 'Mon-Fri: 9:00 AM - 5:00 PM',
    phone: '+234 (0) 813 DAILY-02',
  },
  {
    city: 'Port Harcourt',
    address: '23 Olu Obasanjo Road, GRA Phase 2, Rivers State',
    type: 'Service Center',
    hours: 'Mon-Fri: 9:00 AM - 4:00 PM',
    phone: '+234 (0) 813 DAILY-03',
  }
];

const faqs = [
  {
    question: 'How quickly do you respond to support requests?',
    answer: 'We aim to respond to all inquiries within 2 hours during business hours. For urgent issues related to transactions or account security, we provide immediate assistance through our 24/7 phone support.'
  },
  {
    question: 'Can I get support in local languages?',
    answer: 'Yes! Our support team is multilingual and can assist you in English, Hausa, Yoruba, and Igbo. Just let us know your preferred language when contacting us.'
  },
  {
    question: 'What information should I include when contacting support?',
    answer: 'Please provide your registered email address, phone number, and a detailed description of the issue. For transaction-related problems, include the transaction ID and approximate time of the transaction.'
  },
  {
    question: 'Do you offer phone support 24/7?',
    answer: 'Yes, our emergency phone support is available 24/7 for urgent issues like unauthorized transactions, account lockouts, or critical technical problems. General inquiries are handled during business hours.'
  },
  {
    question: 'How can I schedule an in-person appointment?',
    answer: 'You can schedule an appointment by calling our office directly or sending an email to appointments@dailypay.ng. We recommend booking at least 24 hours in advance.'
  }
];

export default function ContactPage() {
  return (
    <>
      <PageHeaderSection
        title="Contact Us"
        caption="Get in touch with us for any questions or support"
        badge="Contact"
      />

      <Container size="lg" py={80}>
        {/* Contact Methods */}
        <Stack align="center" gap="lg" mb={80}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Get in touch
          </Text>
          <Title ta="center" size={rem(28)} fw={400} c="#0b4650" maw={600}>
            We're here to help you 
            <Text component="span" fw={600} c="#329aae"> 24/7</Text>
          </Title>
          <Text ta="center" size="md" c="gray.7" maw={500} lh={1.6} fw={300}>
            Choose the most convenient way to reach us. Our dedicated support team 
            is always ready to assist you with any questions or concerns.
          </Text>
          <Box w={60} h={3} bg="#329aae" style={{ borderRadius: '2px' }} />
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="lg" mb={80}>
          {contactMethods.map((method, index) => (
            <Card key={index} p="lg" shadow="sm" radius="lg" h="100%" bg="white" style={{ border: '1px solid #e9ecef' }}>
              <Stack gap="md" align="center" ta="center">
                <ThemeIcon size={60} radius="xl" variant="light" color={method.color}>
                  <method.icon size={28} />
                </ThemeIcon>
                <Title order={4} size="md" fw={500} c="#0b4650">
                  {method.title}
                </Title>
                <Text c="gray.7" size="sm" lh={1.5} mb="xs">
                  {method.description}
                </Text>
                <Text size="sm" fw={600} c={method.color}>
                  {method.contact}
                </Text>
                <Badge size="xs" variant="light" color="green" radius="sm">
                  {method.subtext}
                </Badge>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Contact Form */}
        <Grid mb={80} gutter={40}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="md">
              <Group>
                <ThemeIcon size={40} color="#0b4650" variant="light" radius="xl">
                  <IconSend size={20} />
                </ThemeIcon>
                <Title order={3} fw={500} c="#0b4650" size="lg">
                  Send us a Message
                </Title>
              </Group>
              <Text c="gray.7" size="sm" lh={1.6} mb="md">
                Fill out the form below and we'll get back to you as soon as possible. 
                For urgent matters, please call our 24/7 support line.
              </Text>
              
              <Stack gap="md">
                <Grid>
                  <Grid.Col span={6}>
                    <TextInput
                      label="First Name"
                      placeholder="Your first name"
                      required
                      size="sm"
                      radius="md"
                    />
                  </Grid.Col>
                  <Grid.Col span={6}>
                    <TextInput
                      label="Last Name"
                      placeholder="Your last name"
                      required
                      size="sm"
                      radius="md"
                    />
                  </Grid.Col>
                </Grid>
                
                <TextInput
                  label="Email Address"
                  placeholder="your.email@example.com"
                  required
                  size="sm"
                  type="email"
                  radius="md"
                />
                
                <TextInput
                  label="Phone Number"
                  placeholder="+234 800 000 0000"
                  size="sm"
                  radius="md"
                />
                
                <Select
                  label="Subject Category"
                  placeholder="Select a category"
                  data={[
                    { value: 'account', label: 'Account Support' },
                    { value: 'transaction', label: 'Transaction Issues' },
                    { value: 'technical', label: 'Technical Support' },
                    { value: 'security', label: 'Security & Compliance' },
                    { value: 'general', label: 'General Inquiry' },
                    { value: 'business', label: 'Business Partnership' },
                  ]}
                  required
                  size="sm"
                  radius="md"
                />
                
                <Textarea
                  label="Message"
                  placeholder="Please describe your question or issue in detail..."
                  required
                  size="sm"
                  minRows={4}
                  radius="md"
                />
                
                <Button 
                  size="md" 
                  bg="#0b4650"
                  rightSection={<IconArrowRight size={16} />}
                  radius="md"
                  fw={500}
                  mt="md"
                >
                  Send Message
                </Button>
              </Stack>
            </Stack>
          </Grid.Col>
          
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="lg">
              <Card p="lg" bg="#f8f9fa" radius="lg" style={{ border: '1px solid #e9ecef' }}>
                <Stack gap="md">
                  <Group>
                    <ThemeIcon size={40} color="#329aae" variant="light" radius="xl">
                      <IconHeadset size={20} />
                    </ThemeIcon>
                    <Title order={4} fw={500} c="#0b4650" size="md">
                      Support Hours
                    </Title>
                  </Group>
                  <Stack gap="xs">
                    <Group justify="space-between">
                      <Text size="sm" c="gray.7">Emergency Support</Text>
                      <Text size="sm" fw={500} c="#0b4650">24/7</Text>
                    </Group>
                    <Group justify="space-between">
                      <Text size="sm" c="gray.7">General Support</Text>
                      <Text size="sm" fw={500} c="#0b4650">8 AM - 8 PM</Text>
                    </Group>
                    <Group justify="space-between">
                      <Text size="sm" c="gray.7">Live Chat</Text>
                      <Text size="sm" fw={500} c="#0b4650">24/7</Text>
                    </Group>
                  </Stack>
                </Stack>
              </Card>
              
              <Card p="lg" bg="white" shadow="sm" radius="lg" style={{ border: '1px solid #e9ecef' }}>
                <Stack gap="md">
                  <Group>
                    <ThemeIcon size={40} color="#0b4650" variant="light" radius="xl">
                      <IconHelpCircle size={20} />
                    </ThemeIcon>
                    <Title order={4} fw={500} c="#0b4650" size="md">
                      Quick Help
                    </Title>
                  </Group>
                  <Text size="sm" c="gray.7" mb="xs">
                    Common support topics:
                  </Text>
                  <List 
                    spacing="xs"
                    size="sm"
                    icon={
                      <ThemeIcon size="sm" color="#329aae" variant="light" radius="xl">
                        <IconArrowRight size={12} />
                      </ThemeIcon>
                    }
                  >
                    <List.Item>
                      <Anchor href="/faq" size="sm" c="#329aae">Account verification issues</Anchor>
                    </List.Item>
                    <List.Item>
                      <Anchor href="/faq" size="sm" c="#329aae">Transaction delays</Anchor>
                    </List.Item>
                    <List.Item>
                      <Anchor href="/faq" size="sm" c="#329aae">App login problems</Anchor>
                    </List.Item>
                    <List.Item>
                      <Anchor href="/faq" size="sm" c="#329aae">Withdrawal limits</Anchor>
                    </List.Item>
                  </List>
                </Stack>
              </Card>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Support Categories */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Support categories
          </Text>
          <Title ta="center" size={rem(24)} fw={400} c="#0b4650" maw={600}>
            How can we help you today?
          </Title>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2 }} spacing="lg" mb={80}>
          {supportCategories.map((category, index) => (
            <Card key={index} p="lg" shadow="sm" radius="lg" bg="white" style={{ border: '1px solid #e9ecef' }}>
              <Stack gap="md">
                <Group>
                  <ThemeIcon size={50} radius="xl" variant="light" color="#0b4650">
                    <category.icon size={24} />
                  </ThemeIcon>
                  <Stack gap={0}>
                    <Title order={4} size="md" fw={500} c="#0b4650">
                      {category.title}
                    </Title>
                    <Text c="gray.7" size="sm">
                      {category.description}
                    </Text>
                  </Stack>
                </Group>
                <Text size="sm" fw={500} c="gray.6" mb="xs">
                  Common topics:
                </Text>
                <SimpleGrid cols={2} spacing="xs">
                  {category.topics.map((topic, topicIndex) => (
                    <Badge key={topicIndex} size="xs" variant="light" color="#329aae" radius="sm">
                      {topic}
                    </Badge>
                  ))}
                </SimpleGrid>
              </Stack>
            </Card>
          ))}
        </SimpleGrid>

        {/* Office Locations */}
        <Box py={60} bg="#f8f9fa" mx={-40} px={40} mb={80} style={{ borderRadius: '8px' }}>
          <Stack align="center" gap="lg" mb={60}>
            <Text size="sm" tt="uppercase" fw={500} c="gray.6">
              Our locations
            </Text>
            <Title ta="center" size={rem(24)} fw={400} c="#0b4650" maw={600}>
              Visit us in person
            </Title>
            <Text ta="center" size="sm" c="gray.7" maw={450} lh={1.6} fw={300}>
              We have offices across Nigeria to serve you better. Schedule an appointment 
              to meet with our team in person.
            </Text>
          </Stack>

          <SimpleGrid cols={{ base: 1, md: 3 }} spacing="lg">
            {offices.map((office, index) => (
              <Card key={index} p="lg" shadow="sm" radius="lg" bg="white" style={{ border: '1px solid #e9ecef' }}>
                <Stack gap="md">
                  <Group>
                    <ThemeIcon size={40} radius="xl" variant="light" color="#329aae">
                      <IconMapPin size={20} />
                    </ThemeIcon>
                    <Stack gap={0}>
                      <Title order={4} size="md" fw={500} c="#0b4650">
                        {office.city}
                      </Title>
                      <Badge size="xs" variant="light" color="blue" radius="sm">
                        {office.type}
                      </Badge>
                    </Stack>
                  </Group>
                  
                  <Stack gap="sm">
                    <Text size="sm" c="gray.7" fw={300}>
                      {office.address}
                    </Text>
                    
                    <Group gap="xs">
                      <IconClock size={14} color="gray" />
                      <Text size="xs" c="gray.6">
                        {office.hours}
                      </Text>
                    </Group>
                    
                    <Group gap="xs">
                      <IconPhone size={14} color="gray" />
                      <Text size="xs" c="gray.6">
                        {office.phone}
                      </Text>
                    </Group>
                  </Stack>
                  
                  <Button 
                    variant="light" 
                    color="#0b4650"
                    size="sm"
                    radius="md"
                    fw={500}
                    mt="sm"
                  >
                    Schedule Visit
                  </Button>
                </Stack>
              </Card>
            ))}
          </SimpleGrid>
        </Box>

        {/* FAQ Section */}
        <Stack align="center" gap="lg" mb={60}>
          <Text size="sm" tt="uppercase" fw={500} c="gray.6">
            Support FAQ
          </Text>
          <Title ta="center" size={rem(24)} fw={400} c="#0b4650" maw={600}>
            Frequently Asked Questions
          </Title>
          <Text ta="center" size="sm" c="gray.7" maw={450} lh={1.6} fw={300}>
            Quick answers to common support questions. Can't find what you're looking for? 
            Contact us directly.
          </Text>
        </Stack>

        <Accordion variant="separated" radius="md" mb={80}>
          {faqs.map((faq, index) => (
            <Accordion.Item key={index} value={index.toString()}>
              <Accordion.Control>
                <Text size="sm" fw={500} c="#0b4650">
                  {faq.question}
                </Text>
              </Accordion.Control>
              <Accordion.Panel>
                <Text size="sm" c="gray.7" lh={1.6} fw={300}>
                  {faq.answer}
                </Text>
              </Accordion.Panel>
            </Accordion.Item>
          ))}
        </Accordion>

        {/* Social Media & Final CTA */}
        <Card p="lg" bg="#0b4650" radius="lg">
          <Grid align="center">
            <Grid.Col span={{ base: 12, md: 8 }}>
              <Stack gap="md">
                <Title order={3} c="white" fw={400} size="lg">
                  Stay connected with DailyPay
                </Title>
                <Text c="rgba(255,255,255,0.9)" size="sm" lh={1.6} fw={300}>
                  Follow us on social media for updates, tips, and community discussions. 
                  Join thousands of Nigerian workers in our growing community.
                </Text>
                <Group gap="sm" mt="md">
                  <Button variant="subtle" color="white" leftSection={<IconBrandTwitter size={16} />} size="sm">
                    Twitter
                  </Button>
                  <Button variant="subtle" color="white" leftSection={<IconBrandLinkedin size={16} />} size="sm">
                    LinkedIn
                  </Button>
                  <Button variant="subtle" color="white" leftSection={<IconBrandInstagram size={16} />} size="sm">
                    Instagram
                  </Button>
                  <Button variant="subtle" color="white" leftSection={<IconBrandFacebook size={16} />} size="sm">
                    Facebook
                  </Button>
                </Group>
              </Stack>
            </Grid.Col>
            
            <Grid.Col span={{ base: 12, md: 4 }}>
              <Stack align="center" gap="md">
                <Title order={4} c="white" fw={400} ta="center" size="md">
                  Need immediate help?
                </Title>
                <Button 
                  size="md" 
                  bg="#329aae"
                  leftSection={<IconPhone size={18} />}
                  radius="md"
                  fw={500}
                  fullWidth
                >
                  Call Support Now
                </Button>
              </Stack>
            </Grid.Col>
          </Grid>
        </Card>
      </Container>
    </>
  );
}
