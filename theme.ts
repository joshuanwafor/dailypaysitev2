'use client';

import { createTheme } from '@mantine/core';

export const theme = createTheme({
  primaryColor: 'blue',
  primaryShade: 9,
  colors: {
    blue: [
      "#edfafd",
      "#dcf3f6",
      "#b4e6ef",
      "#8ad9e7",
      "#6bcee0",
      "#5ac7dd",
      "#4fc4db",
      "#41adc3",
      "#329aae",
      "#0b4650"
    ],
  },
  fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
  headings: {
    fontFamily: '"Outfit", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    fontWeight: '600',
  },
});
