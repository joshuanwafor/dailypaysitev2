'use client';

import { useEffect, useState } from 'react';
import { Box, Container, Stack, Text, Title, Button, Group } from '@mantine/core';
import { IconArrowRight, IconBrandApple, IconBrandGooglePlay } from '@tabler/icons-react';
import { rem } from '@mantine/core';

const playstoreLink = 'https://play.google.com/store/apps/details?id=com.alerts.dailypay.mobile&hl=en';
const appstoreLink = 'https://apps.apple.com/ng/app/dailypay/id6751250517';

export default function DownloadAppPage() {
  const [device, setDevice] = useState<'ios' | 'android' | 'unknown' | 'detecting'>('detecting');
  const [redirected, setRedirected] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const userAgent = window.navigator.userAgent.toLowerCase();
    let detectedDevice: 'ios' | 'android' | 'unknown' = 'unknown';

    if (/iphone|ipad|ipod/.test(userAgent)) {
      detectedDevice = 'ios';
    } else if (/android/.test(userAgent)) {
      detectedDevice = 'android';
    }

    setDevice(detectedDevice);

    // Auto-redirect after a brief moment
    if (detectedDevice !== 'unknown' && !redirected) {
      setRedirected(true);
      setTimeout(() => {
        if (detectedDevice === 'ios') {
          window.location.href = appstoreLink;
        } else if (detectedDevice === 'android') {
          window.location.href = playstoreLink;
        }
      }, 500);
    }
  }, [redirected]);

  const handleManualRedirect = (store: 'ios' | 'android') => {
    if (store === 'ios') {
      window.location.href = appstoreLink;
    } else {
      window.location.href = playstoreLink;
    }
  };

  return (
    <Box py={120} bg="gray.0" style={{ minHeight: '100vh' }}>
      <Container size="sm">
        <Stack align="center" gap="xl" ta="center">
          {device === 'detecting' && (
            <>
              <Title order={1} size={rem(36)} fw={400} c="#0b4650">
                Detecting your device...
              </Title>
              <Text size="lg" c="gray.7">
                Redirecting you to the appropriate app store...
              </Text>
            </>
          )}

          {device === 'ios' && (
            <>
              <Title order={1} size={rem(36)} fw={400} c="#0b4650">
                Redirecting to App Store
              </Title>
              <Text size="lg" c="gray.7">
                Taking you to download DailyPay on the App Store...
              </Text>
              <Button
                size="xl"
                bg="#0b4650"
                rightSection={<IconBrandApple size={20} />}
                radius="xl"
                fw={600}
                px="xl"
                h={56}
                onClick={() => handleManualRedirect('ios')}
                mt="md"
              >
                Open App Store
              </Button>
            </>
          )}

          {device === 'android' && (
            <>
              <Title order={1} size={rem(36)} fw={400} c="#0b4650">
                Redirecting to Google Play
              </Title>
              <Text size="lg" c="gray.7">
                Taking you to download DailyPay on Google Play...
              </Text>
              <Button
                size="xl"
                bg="#0b4650"
                rightSection={<IconBrandGooglePlay size={20} />}
                radius="xl"
                fw={600}
                px="xl"
                h={56}
                onClick={() => handleManualRedirect('android')}
                mt="md"
              >
                Open Google Play
              </Button>
            </>
          )}

          {device === 'unknown' && (
            <>
              <Title order={1} size={rem(36)} fw={400} c="#0b4650">
                Download DailyPay
              </Title>
              <Text size="lg" c="gray.7" mb="xl">
                Choose your platform to download the DailyPay app
              </Text>
              <Group gap="md" justify="center" mt="lg">
                <Button
                  size="xl"
                  bg="#0b4650"
                  leftSection={<IconBrandApple size={20} />}
                  rightSection={<IconArrowRight size={18} />}
                  radius="xl"
                  fw={600}
                  px="xl"
                  h={56}
                  onClick={() => handleManualRedirect('ios')}
                >
                  App Store
                </Button>
                <Button
                  size="xl"
                  bg="#0b4650"
                  leftSection={<IconBrandGooglePlay size={20} />}
                  rightSection={<IconArrowRight size={18} />}
                  radius="xl"
                  fw={600}
                  px="xl"
                  h={56}
                  onClick={() => handleManualRedirect('android')}
                >
                  Google Play
                </Button>
              </Group>
            </>
          )}
        </Stack>
      </Container>
    </Box>
  );
}

