'use client';

import React, { useEffect, useRef, useState } from 'react';
import MainLayout from '@/layouts/MainLayout';

const PLAY_STORE_LINK =
  'https://play.google.com/store/apps/details?id=com.alerts.dailypay.mobile&hl=en';
const APP_STORE_LINK = 'https://apps.apple.com/ng/app/dailypay/id6751250517';

type DeviceType = 'ios' | 'android' | 'unknown' | 'detecting';

function detectDevice(): DeviceType {
  if (typeof window === 'undefined') return 'detecting';
  const ua = window.navigator.userAgent.toLowerCase();
  if (/iphone|ipad|ipod/.test(ua)) return 'ios';
  if (/android/.test(ua)) return 'android';
  return 'unknown';
}

function StoreButton({
  href,
  imgSrc,
  imgAlt,
  topText,
  bottomText,
}: {
  href: string;
  imgSrc: string;
  imgAlt: string;
  topText: string;
  bottomText: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      className="flex items-center justify-center gap-3 bg-[#191919] rounded-full px-6 h-16 min-w-[200px] max-w-[230px] hover:bg-[#333] transition-colors"
    >
      <img
        src={imgSrc}
        alt={imgAlt}
        width={28}
        height={28}
        className="shrink-0 w-7 h-7 object-contain"
      />
      <div className="flex flex-col items-start min-w-0">
        <span className="text-white font-onest font-normal text-[11px] uppercase opacity-90 leading-4">
          {topText}
        </span>
        <span className="text-white font-onest font-semibold text-lg leading-7 truncate">
          {bottomText}
        </span>
      </div>
    </a>
  );
}

export default function DownloadApp() {
  const [device, setDevice] = useState<DeviceType>('detecting');
  const hasRedirected = useRef(false);

  useEffect(() => {
    const detected = detectDevice();
    setDevice(detected);

    if (detected !== 'unknown' && detected !== 'detecting' && !hasRedirected.current) {
      hasRedirected.current = true;
      const timeoutId = setTimeout(() => {
        if (detected === 'ios') window.location.assign(APP_STORE_LINK);
        else if (detected === 'android') window.location.assign(PLAY_STORE_LINK);
      }, 800);
      return () => clearTimeout(timeoutId);
    }
  }, []);

  const backgroundStyle = {
    background:
      'linear-gradient(152deg, rgba(189, 208, 213, 0.20) 10.54%, rgba(0, 190, 245, 0.20) 66.35%), #E6EFF1',
  };

  return (
    <MainLayout>
      <div
        className="min-h-screen font-onest pt-32 pb-20 px-4"
        style={backgroundStyle}
      >
        <div className="max-w-2xl mx-auto text-center">
          {device === 'detecting' && (
            <section className="animate-pulse" aria-live="polite">
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#00636D]">
                Detecting your device...
              </h1>
              <p className="mt-4 text-lg text-[#1E1E1E]">
                Redirecting you to the appropriate app store...
              </p>
            </section>
          )}

          {device === 'ios' && (
            <section aria-live="polite">
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#00636D]">
                Redirecting to App Store
              </h1>
              <p className="mt-4 text-lg text-[#1E1E1E]">
                Taking you to download DailyPay on the App Store...
              </p>
              <div className="mt-8 flex justify-center">
                <StoreButton
                  href={APP_STORE_LINK}
                  imgSrc="/images/apple-store.png"
                  imgAlt="App Store"
                  topText="Download on the"
                  bottomText="App Store"
                />
              </div>
            </section>
          )}

          {device === 'android' && (
            <section aria-live="polite">
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#00636D]">
                Redirecting to Google Play
              </h1>
              <p className="mt-4 text-lg text-[#1E1E1E]">
                Taking you to download DailyPay on Google Play...
              </p>
              <div className="mt-8 flex justify-center">
                <StoreButton
                  href={PLAY_STORE_LINK}
                  imgSrc="/images/play-store.png"
                  imgAlt="Google Play"
                  topText="Get it on"
                  bottomText="Google Play"
                />
              </div>
            </section>
          )}

          {device === 'unknown' && (
            <section>
              <h1 className="text-3xl sm:text-4xl font-semibold text-[#00636D]">
                Download DailyPay
              </h1>
              <p className="mt-4 text-lg text-[#1E1E1E] mb-12">
                Choose your platform to download the DailyPay app
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <StoreButton
                  href={APP_STORE_LINK}
                  imgSrc="/images/apple-store.png"
                  imgAlt="App Store"
                  topText="Download on the"
                  bottomText="App Store"
                />
                <StoreButton
                  href={PLAY_STORE_LINK}
                  imgSrc="/images/play-store.png"
                  imgAlt="Google Play"
                  topText="Get it on"
                  bottomText="Google Play"
                />
              </div>
            </section>
          )}
        </div>
      </div>
    </MainLayout>
  );
}