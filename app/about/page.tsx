import {
  IconWallet,
  IconShield,
  IconUsers,
  IconTrendingUp,
  IconBuilding,
  IconAward,
  IconTarget,
  IconHeart,
  IconStar,
  IconCheck,
} from '@tabler/icons-react';
import {
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
  Avatar,
  Box,
  SimpleGrid,
  Divider,
} from '@mantine/core';
import PageHeaderSection from '@/components/Sections/PageHeaderSection';

const values = [
  {
    icon: IconHeart,
    title: 'Financial Empowerment',
    description: 'We believe every worker deserves access to their earned wages when they need them most.',
    color: 'red',
  },
  {
    icon: IconShield,
    title: 'Trust & Security',
    description: 'Bank-level security and full regulatory compliance protect every transaction.',
    color: 'blue',
  },
  {
    icon: IconUsers,
    title: 'Community First',
    description: 'Building solutions specifically for the African workforce and their unique needs.',
    color: 'green',
  },
  {
    icon: IconTarget,
    title: 'Innovation',
    description: 'Leveraging technology to solve real financial challenges facing Nigerian workers.',
    color: 'violet',
  },
];

const stats = [
  { label: 'Active Users', value: '50,000+', icon: IconUsers },
  { label: 'Daily Transactions', value: '₦2.5B+', icon: IconTrendingUp },
  { label: 'Partner Companies', value: '1,200+', icon: IconBuilding },
  { label: 'Customer Satisfaction', value: '98%', icon: IconAward },
];

// const team = [
//   {
//     name: 'Adebayo Ogundimu',
//     role: 'CEO & Co-founder',
//     bio: 'Former banking executive with 15+ years in Nigerian financial services.',
//     avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Kemi Adebayo',
//     role: 'CTO & Co-founder',
//     bio: 'Technology leader with expertise in fintech and payment systems.',
//     avatar: 'https://images.unsplash.com/photo-1494790108755-2616b667aab?w=150&h=150&fit=crop&crop=face',
//   },
//   {
//     name: 'Chukwu Okoro',
//     role: 'Head of Product',
//     bio: 'Product strategist focused on user experience and financial inclusion.',
//     avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
//   },
// ];

const timeline = [
  {
    year: '2022',
    title: 'Company Founded',
    description: 'DailyPay by Alerts was established to revolutionize payroll in Nigeria.',
  },
  {
    year: '2023',
    title: 'First 1,000 Users',
    description: 'Reached our first milestone with early adopters in Lagos and Abuja.',
  },
  {
    year: '2024',
    title: 'Scale Across Nigeria',
    description: 'Expanded to all major Nigerian cities with 50,000+ active users.',
  },
  {
    year: '2025',
    title: 'Pan-African Expansion',
    description: 'Planning expansion to Ghana, Kenya, and South Africa.',
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeaderSection
        title="About DailyPay by Alerts"
        caption="Empowering African workers with daily access to their earned wages"
        badge="Our Story"
      />

      {/* Mission Section */}
      <Container size="lg" py={100}>
        <Grid gutter="xl">
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap="xl">
              <Badge 
                size="lg" 
                variant="light" 
                color="#0b4650"
                radius="md"
              >
                Our Mission
              </Badge>
              <Box>
                <Title order={2} size={rem(40)} fw={400} c="#0b4650" lh={1.2} mb="md">
                  Transforming Financial Access for{' '}
                  <Text 
                    component="span" 
                    fw={600} 
                    c="#329aae"
                  >
                    African Workers
                  </Text>
                </Title>
                <Box w={80} h={3} bg="#329aae" mb="xl" style={{ borderRadius: '2px' }} />
              </Box>
              
              <Stack gap="lg">
                <Text size="lg" c="gray.8" lh={1.7} fw={300}>
                  DailyPay by Alerts is revolutionizing how Nigerian workers access their earned wages. 
                  We believe that waiting until month-end for your salary is an outdated system that creates 
                  unnecessary financial stress.
                </Text>
                <Text size="md" c="gray.7" lh={1.6} fw={300}>
                  Our platform enables workers to access their daily earnings with zero interest, 
                  providing financial flexibility and peace of mind when unexpected expenses arise.
                </Text>
              </Stack>

       
              <Group gap="md" mt="xl">
                <Button 
                  size="lg" 
                  bg="#0b4650"
                  radius="md"
                  fw={500}
                >
                  Join Our Mission
                </Button>
                <Button variant="outline" color="#0b4650" size="lg" fw={400} radius="md">
                  Learn More
                </Button>
              </Group>
            </Stack>
          </GridCol>
          <GridCol span={{ base: 12, md: 6 }}>
            <Stack gap="lg" h="100%">
              <Card 
                p="xl" 
                radius="lg" 
                h="100%"
                bg="#0b4650"
                style={{ color: 'white' }}
              >
                <Stack align="center" ta="center" gap="xl" h="100%" justify="center">
                  <Box pos="relative">
                    <ThemeIcon size={100} radius="xl" color="rgba(255,255,255,0.15)" variant="filled">
                      <IconWallet size={50} color="white" />
                    </ThemeIcon>
                    <Box
                      pos="absolute"
                      top={-8}
                      right={-8}
                      w={32}
                      h={32}
                      bg="#329aae"
                      style={{
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <IconStar size={16} color="white" />
                    </Box>
                  </Box>
                  
                  <Box>
                    <Title order={3} c="white" fw={400} size="lg" mb="md">The Problem We Solve</Title>
                    <Text c="rgba(255,255,255,0.9)" lh={1.6} fw={300} size="sm">
                      80% of Nigerian workers struggle with cash flow between paydays, 
                      often resorting to expensive loans or delaying essential expenses.
                    </Text>
                  </Box>
                  
             
                </Stack>
              </Card>
            </Stack>
          </GridCol>
        </Grid>
      </Container>



      {/* Values Section */}
      <Container size="lg" py={100}>
        <Stack align="center" gap="lg" mb={80}>
          <Badge 
            size="lg" 
            variant="light" 
            color="#0b4650"
            radius="md"
          >
            Our Values
          </Badge>
          <Box ta="center">
            <Title ta="center" size={rem(32)} fw={400} c="#0b4650" mb="md">
              What Drives Us Forward
            </Title>
            <Box w={80} h={3} bg="#329aae" mx="auto" style={{ borderRadius: '2px' }} />
          </Box>
        </Stack>

        <SimpleGrid cols={{ base: 1, sm: 2, lg: 4 }} spacing="xl">
          {values.map((value, index) => (
            <Card 
              key={index} 
              p="xl" 
              radius="lg" 
              h="100%" 
              bg="white" 
              shadow="sm"
              style={{ border: '1px solid #e9ecef' }}
            >
              <Stack align="center" ta="center" gap="lg" h="100%">
                <Box pos="relative">
                  <ThemeIcon 
                    size={70} 
                    radius="xl" 
                    variant="light"
                    color={value.color}
                  >
                    <value.icon size={32} />
                  </ThemeIcon>
                  <Box
                    pos="absolute"
                    top={-4}
                    right={-4}
                    w={20}
                    h={20}
                    bg="#329aae"
                    style={{
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text size="xs" c="white" fw={600}>{index + 1}</Text>
                  </Box>
                </Box>
                
                <Box>
                  <Title order={4} size="md" fw={500} c="#0b4650" mb="sm">
                    {value.title}
                  </Title>
                  <Text c="gray.7" size="sm" lh={1.6} fw={300}>
                    {value.description}
                  </Text>
                </Box>
                
                <Box 
                  w="100%" 
                  h={2} 
                  bg={value.color === 'red' ? '#ff6b6b' : 
                      value.color === 'blue' ? '#74a8ff' :
                      value.color === 'green' ? '#51cf66' :
                      '#cc9bff'}
                  style={{ borderRadius: '2px', marginTop: 'auto', opacity: 0.3 }}
                />
              </Stack>
            </Card>
          ))}
        </SimpleGrid>
      </Container>

   

  
      {/* CTA Section */}
      <Box py={80} bg="#0b4650">
        <Container size="lg">
          <Stack align="center" ta="center" gap="lg">
            <Title size={rem(28)} c="white" fw={400}>
              Ready to Transform Your Financial Life?
            </Title>
            <Text size="md" c="rgba(255,255,255,0.9)" maw={500} lh={1.6} fw={300}>
              Join thousands of Nigerian workers who are already experiencing 
              the freedom of daily wage access.
            </Text>
            <Group gap="md" mt="md">
              <Button size="lg" bg="white" c="#0b4650" fw={500} radius="md">
                Get Started Today
              </Button>
              <Button size="lg" variant="outline" c="white" style={{ borderColor: 'white' }} fw={400} radius="md">
                Contact Us
              </Button>
            </Group>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
