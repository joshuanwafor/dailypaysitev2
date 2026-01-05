'use client';

import { Container, Title, Text, Stack, Badge, Box, rem } from '@mantine/core';
import classes from './PageHeaderSection.module.css';

interface PageHeaderSectionProps {
  title: string;
  caption?: string;
  badge?: string;
}

export default function PageHeaderSection({ title, caption, badge }: PageHeaderSectionProps) {
  return (
    <div className={classes.header}>
      <Container size="lg">
        <Stack align="center" py={120} gap="lg">
          {badge && (
            <Badge 
              variant="light" 
              size="lg" 
              className={classes.badge}
              color="#0b4650"
              radius="md"
            >
              {badge}
            </Badge>
          )}
          <Box className={classes.titleContainer}>
            <Title className={classes.title} ta="center">
              {title}
            </Title>
            <div className={classes.titleUnderline} />
          </Box>
          {caption && (
            <Text 
              ta="center" 
              maw={600} 
              size="lg" 
              className={classes.caption}
              lh={1.6}
              fw={300}
            >
              {caption}
            </Text>
          )}
        </Stack>
      </Container>
    </div>
  );
}
