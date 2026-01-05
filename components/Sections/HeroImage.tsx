'use client';

import { Image } from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';

export default function HeroImage() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  return (
    <div>
      <Image
        src={isMobile ? '/man1.jpg' : '/man2.jpg'}
        alt="POS Interface Preview"
        radius="md"
        // className={classes.heroImage}
        fallbackSrc="https://placehold.co/800x600?text=POS+Interface"
      />
    </div>
  );
}
