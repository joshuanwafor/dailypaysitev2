import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Download DailyPay App | Get Paid Every Day',
  description:
    'Download the DailyPay app on iOS or Android. Get paid every day you work with zero interest on claimed funds.',
};

export default function DownloadAppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
