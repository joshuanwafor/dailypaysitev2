'use client';

import Link from 'next/link';
import {
  IconBrandFacebook,
  IconBrandFacebookFilled,
  IconBrandInstagramFilled,
  IconBrandLinkedinFilled,
  IconBrandXFilled,
  IconShield,
  IconLock,
  IconMail,
  IconPhone,
} from '@tabler/icons-react';
import { Box, Container, Divider, Grid, Group, Stack, Text, Title } from '@mantine/core';
import classes from './Footer.module.css';

const footerLinks = {
  product: [
    { label: 'Features', link: '/features' },
    { label: 'How It Works', link: '/how-it-works' },
    { label: 'Pricing', link: '/pricing' },
    { label: 'Download App', link: '/download' },
  ],
  support: [
    { label: 'Help Center', link: '/help' },
    { label: 'FAQ', link: '/faq' },
    { label: 'Contact Us', link: '/contact' },
    { label: 'Customer Support', link: '/support' },
  ],
  company: [
    { label: 'About Us', link: '/about' },
    { label: 'Careers', link: '/careers' },
    { label: 'Blog', link: '/blog' },
    { label: 'Press', link: '/press' },
  ],
  legal: [
    { label: 'Privacy Policy', link: '/privacy' },
    { label: 'Terms of Service', link: '/terms' },
    { label: 'Security', link: '/security' },
    { label: 'Compliance', link: '/compliance' },
  ],
};

export function Footer() {
  return (
    <footer className={classes.footer}>
      <Container size="lg">
        {/* Top Section - Logo & Social Media */}
        <Group justify="space-between" align="flex-start" mb="xl" wrap="wrap">
          <Link href="/" className={classes.brandLink}>
            <img src="/hlogolight.svg" alt="Alerts africa" width={160} />
          </Link>
          
          <Stack gap="xs" align="flex-end">
            <Text size="sm" fw={500} c="gray.3">
              Follow us
            </Text>
            <Group gap="md">
              <Link href="https://twitter.com/dailypayalerts" className={classes.socialLink}>
                <IconBrandXFilled size={20} />
              </Link>
              <Link href="https://instagram.com/dailypayalerts" className={classes.socialLink}>
                <IconBrandInstagramFilled size={20} />
              </Link>
              <Link href="https://linkedin.com/company/dailypayalerts" className={classes.socialLink}>
                <IconBrandLinkedinFilled size={20} />
              </Link>
              <Link href="https://facebook.com/dailypayalerts" className={classes.socialLink}>
                <IconBrandFacebookFilled size={20} />
              </Link>
            </Group>
          </Stack>
        </Group>

        <Divider my="xl" color="gray.7" />

        {/* Links Grid */}
        <Grid gutter="xl" mb="xl">
          <Grid.Col span={{ base: 6, sm: 3 }}>
            <Stack gap="sm">
              <Text fw={600} className={classes.title} c="white">
                Product
              </Text>
              {footerLinks.product.map((link) => (
                <Link key={link.link} href={link.link} className={classes.link}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 3 }}>
            <Stack gap="sm">
              <Text fw={600} className={classes.title} c="white">
                Support
              </Text>
              {footerLinks.support.map((link) => (
                <Link key={link.link} href={link.link} className={classes.link}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 3 }}>
            <Stack gap="sm">
              <Text fw={600} className={classes.title} c="white">
                Company
              </Text>
              {footerLinks.company.map((link) => (
                <Link key={link.link} href={link.link} className={classes.link}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 6, sm: 3 }}>
            <Stack gap="sm">
              <Text fw={600} className={classes.title} c="white">
                Legal
              </Text>
              {footerLinks.legal.map((link) => (
                <Link key={link.link} href={link.link} className={classes.link}>
                  {link.label}
                </Link>
              ))}
            </Stack>
          </Grid.Col>
        </Grid>

        <Divider my="xl" color="gray.7" />

        {/* Contact & Trust Badges Section */}
        <Grid gutter="xl" mb="xl">
          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xs">
              <Text size="sm" fw={500} c="gray.3" mb="sm">
                Get in touch
              </Text>
              <Group gap="sm">
                <IconMail size={16} color="var(--mantine-color-gray-4)" />
                <Link href="mailto:support@alerts.africa" className={classes.contactLink}>
                  support@alerts.africa
                </Link>
              </Group>
              <Group gap="sm">
                <IconPhone size={16} color="var(--mantine-color-gray-4)" />
                <Text size="sm" c="gray.4">
                  +234 (0) 800 DAILY PAY
                </Text>
              </Group>
            </Stack>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <Stack gap="xs">
              <Text size="sm" fw={500} c="gray.3" mb="sm">
                Security & Compliance
              </Text>
              <Group gap="sm">
                <IconShield size={16} color="var(--mantine-color-green-4)" />
                <Text size="xs" c="gray.4">
                  Bank-level security & encryption
                </Text>
              </Group>
              <Group gap="sm">
                <IconLock size={16} color="var(--mantine-color-green-4)" />
                <Text size="xs" c="gray.4">
                  Fully licensed & compliant
                </Text>
              </Group>
            </Stack>
          </Grid.Col>
        </Grid>

        {/* Disclaimer */}
        <Box mb="xl" p="md" style={{ backgroundColor: 'rgba(255, 255, 255, 0.03)', borderRadius: '8px' }}>
          <Text size="xs" c="gray.4" lh={1.6}>
            DailyPay is a financial technology company, not a bank. Banking services are provided by Wema Bank and Safe Haven Microfinance Bank, members of the Nigeria Deposit Insurance Corporation (NDIC). The NDIC provides deposit insurance to protect your money in the event of a bank failure. More details about deposit insurance here: https://ndic.gov.ng/deposit-insurance/
          </Text>
        </Box>

        <Divider my="md" color="gray.7" />

        {/* Bottom Section */}
        <Group justify="space-between" className={classes.bottom} wrap="wrap">
          <Text size="sm" c="gray.5">
            © {new Date().getFullYear()} DailyPay by Alerts. All rights reserved.
          </Text>
          <Text size="sm" c="gray.5">
            Licensed financial services provider in Nigeria
          </Text>
        </Group>
      </Container>
    </footer>
  );
}
