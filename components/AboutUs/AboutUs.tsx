import React from "react";
import Image from "next/image";
import AnimatedSection from "@/layouts/AnimatedSection";
import MainLayout from "@/layouts/MainLayout";
import { fadeIn } from "@/utils/animations";
import CardSection from "../HomePage/CardSection";
import TwoCardsSections from "../HomePage/TwoCardsSections";

const AboutUs = () => {
  return (
    <MainLayout>
      <AnimatedSection
        variants={fadeIn}
        delay={0.2}
        className="min-h-[80vh] overflow-hidden w-full relative bg-[url(/images/about-banner.png)] bg-no-repeat bg-cover bg-center pt-48 lg:px-44 px-6 flex lg:flex-row flex-col items-center gap-5 overflow-hidden"
      >
        <div className="flex basis-full lg:basis-1/2 flex-col gap-5 font-onest z-10">
          <p className="lg:text-6xl text-4xl lg:text-start text-center font-semibold text-[hsla(0,0%,12%,1)] lg:leading-20">
            Empowering individuals with instant access to their earned income
          </p>
          <p className="font-lg text-[hsla(0,0%,12%,1)] lg:text-start text-center">
            We're your partner in building better financial habits and achieving
            your goals.
          </p>
          <div className="mt-10 flex flex-wrap items-center lg:justify-start justify-center gap-4 lg:mb-8 mb-0">
            <a
              href="https://play.google.com/store/apps/details?id=com.alerts.dailypay.mobile"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-3 bg-[#191919] rounded-full px-6 h-16.5 w-57.5 hover:bg-[#333] transition-colors"
            >
              <img
                src="/images/play-store.png"
                alt="Google Play"
                className="w-7 h-7 object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="text-white font-onest font-normal text-[11px] uppercase opacity-90 leading-4">
                  Get IT ON
                </span>
                <span className="text-white font-onest font-semibold text-lg leading-7">
                  Google Play
                </span>
              </div>
            </a>

            <a
              href="https://apps.apple.com/ng/app/dailypay/id6751250517"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center justify-center gap-3 bg-[#191919] rounded-full px-6 h-16.5 w-57.5 hover:bg-[#333] transition-colors"
            >
              <img
                src="/images/apple-store.png"
                alt="App Store"
                className="w-7 h-7 object-contain"
              />
              <div className="flex flex-col items-start">
                <span className="text-white font-normal text-xs opacity-90 leading-4">
                  Download on the
                </span>
                <span className="text-white font-bold text-lg leading-7">
                  App Store
                </span>
              </div>
            </a>
          </div>
        </div>
        <div className="basis-1/2 ">
          <div className=" lg:w-175 lg:h-180 w-100 h-100  lg:absolute relative -bottom-10 lg:right-[10vw] right-0">
            <Image
              src="/images/about-hero.png"
              alt="About Us Hero"
              width={700}
              height={700}
              className="object-contain w-full h-full"
            />
          </div>
        </div>
      </AnimatedSection>
      <AnimatedSection
        variants={fadeIn}
        delay={0.15}
        className="lg:max-w-[85vw] max-w-full mx-auto py-14 lg:px-0 px-3 font-onest"
      >
        <div className="flex flex-col items-start">
          <p className="lg:text-5xl text-3xl font-medium text-start flex  gap-2 flex-wrap ">
            Learn About Dailypay
          </p>
          <p className="text-lg  text-start mt-6 font-normal text-[hsla(72, 11%, 9%, 1)]">
            DailyPay is a modern African fintech platform built to fundamentally
            transform how people experience, access, and manage their money. We
            believe that financial access, control, and dignity should not be
            limited by outdated payday systems or rigid salary cycles.
            <br />
            <br />
            We empower working individuals to access their earned income daily,
            giving them real-time control over their finances, helping them make
            smarter money decisions, and enabling them to live with confidence,
            stability, and peace of mind. With DailyPay, users no longer have to
            wait till month-end, rely on loans, or struggle through emergencies
            — they gain freedom, flexibility, and control
          </p>
        </div>
        <div className="w-full flex lg:flex-row flex-col gap-6 mt-8 max-w-7xl">
          <div className="bg-[hsla(194,100%,94%,1)] rounded-[30px] border border-[hsla(194,100%,42%,0.5)] flex justify-center items-end basis-1/2 p-8  relative lg:min-h-auto min-h-[420px] overflow-hidden ">
            <Image
              src="/images/phone-frame-4.png"
              alt="phone-feature-4"
              width={400}
              height={450}
              className="object-contain  absolute lg:h-11/12 h-[400px] w-auto  left-1/2 lg:bottom-0 -bottom-10  transform -translate-x-1/2 "
            />
          </div>
          <div className="flex flex-col gap-3 basis-1/2">
            <div className="rounded-[30px] overflow-hidden h-1/2 ">
              <Image
                src="/images/frame-200.png"
                alt="phone-feature-4"
                width={400}
                height={215}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="rounded-[30px] overflow-hidden h-1/2">
              <Image
                src="/images/frame-201.png"
                alt="phone-feature-4"
                width={400}
                height={215}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
        </div>
        <p className=" text-lg  text-start mt-8 font-normal text-[hsla(72, 11%, 9%, 1)]">
          By combining cutting-edge technology, deep user empathy, and secure
          financial infrastructure, DailyPay delivers a seamless, intuitive, and
          secure financial experience. From daily salary access and smart
          wallets to bill payments, disciplined savings, investments, and
          emergency financial support, DailyPay brings together everything users
          need to manage money smarter — all in one beautifully designed
          platform.
          <br />
          <br />
          At its core, DailyPay is more than a financial app. It is a movement
          to restore financial dignity, unlock opportunity, and build healthier
          money habits across Africa — one salary, one decision, and one life at
          a time.
        </p>
      </AnimatedSection>
      <TwoCardsSections
        containerClassName="lg:max-w-[85vw]"
        className="gap-0 rounded-none "
        leftImageElement={
          <img
            src="/images/hero-7.png"
            alt="feature-1"
            className=" w-full h-full  object-contain object-left lg:block md:hidden sm:block lg:basis-1/2 basis-full lg:mb-0 mb-2 lg:rounded-none rounded-[30px] order-2"
          />
        }
        rightColContent={
          <>
            <p className="lg:text-5xl text-3xl lg:mt-0 mt-5 font-medium max-w-3xl text-[hsla(0,0%,12%,1)]">
              Dailypay Mission
            </p>
            <p className="max-w-2xl text-lg z-2 text-[hsla(0,0%,12%,1)]">
              <span>
                To empower Africa’s workforce with instant access to earned
                income, smart financial tools, and meaningful control over their
                money — enabling better financial decisions, reducing financial
                stress, and improving quality of life.
              </span>
              <br />
              <br />
              <span>
                We are committed to building technology-driven solutions that
                promote financial inclusion, discipline, and long-term
                prosperity, while delivering seamless, secure, and
                human-centered financial experiences.
              </span>
            </p>
          </>
        }
        rightContentClassName="border-[hsla(0,0%,12%,0.1)] bg-[hsla(0,3%,97%,0.8)] lg:rounded-none rounded-[30px] lg:rounded-tl-[30px] lg:rounded-bl-[30px] min-h-0 order-1 basis-1/2 justify-center lg:mb-0 mb-5"
      />
      <TwoCardsSections
        className="gap-0 rounded-none "
        leftImageElement={
          <img
            src="/images/hero-88.png"
            alt="feature-1"
            className=" w-full h-full  object-contain object-right lg:block md:hidden sm:block lg:basis-1/2 basis-full lg:mb-0 mb-2 lg:rounded-none rounded-[30px] "
          />
        }
        rightColContent={
          <>
            <p className="lg:text-5xl text-3xl lg:mt-0 mt-5 font-medium max-w-3xl text-[hsla(0,0%,12%,1)]">
              Dailypay Vision
            </p>
            <p className="max-w-2xl text-lg z-2 text-[hsla(0,0%,12%,1)]">
              <span>
                To become Africa’s leading financial empowerment platform —
                redefining how people earn, manage, save, spend, and grow their
                money.
              </span>
              <br />
              <br />
              <span>
                We envision a future where every working individual has complete
                financial control, instant access to their income, and the tools
                needed to build wealth, eliminate financial anxiety, and live
                with dignity.
              </span>
              <br />
              <br />
              <span>
                By shaping the future of salary, payments, and financial
                wellbeing, DailyPay aims to create a more inclusive, resilient,
                and economically empowered Africa.
              </span>
            </p>
          </>
        }
        rightContentClassName="border-[hsla(0,0%,12%,0.1)] bg-[hsla(0,3%,97%,0.8)] lg:rounded-none rounded-[30px] lg:rounded-tr-[30px] lg:rounded-br-[30px] min-h-0 basis-1/2 justify-center lg:mt-0 mt-5"
      />
      <CardSection
        className="bg-[hsla(186,100%,21%,1)] border border-[hsla(186,100%,21%,.4)] mb-6"
        leftColContent={
          <>
            <p className="lg:text-5xl text-white text-3xl font-medium max-w-3xl mt-10">
              The Future of Pay Starts Here - Sign up now
            </p>
            <p className="max-w-2xl text-white font-bold text-lg">
              Ready to Take Control of Your Finances?
            </p>

            <p className="max-w-xl text-white text-lg">
              join thousands of employees who are already enjoying financial
              freedom with DailyPay.
            </p>
            <div className="flex  flex-wrap gap-6">
              <a
                href="https://play.google.com/store/apps/details?id=com.alerts.dailypay.mobile"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-3 bg-[hsla(0,0%,100%,1)] rounded-full px-6 h-16.5 w-57.5 hover:bg-[#fff] transition-colors"
              >
                <img
                  src="/images/play-store.png"
                  alt="Google Play"
                  className="w-7 h-7 object-contain"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[hsla(0,0%,12%,1)] font-onest font-normal text-[11px] uppercase opacity-90 leading-4">
                    Get IT ON
                  </span>
                  <span className="text-[hsla(0,0%,12%,1)] font-onest font-semibold text-lg leading-7">
                    Google Play
                  </span>
                </div>
              </a>

              <a
                href="https://apps.apple.com/ng/app/dailypay/id6751250517"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center justify-center gap-3 bg-[hsla(0,0%,100%,1)] rounded-full px-6 h-16.5 w-57.5 hover:bg-[#fff] transition-colors"
              >
                <img
                  src="/images/app-store-2.png"
                  alt="App Store"
                  className="w-7 h-7 object-contain"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[hsla(0,0%,12%,1)] font-normal text-xs opacity-90 leading-4">
                    Download on the
                  </span>
                  <span className="text-[hsla(0,0%,12%,1)] font-bold text-lg leading-7">
                    App Store
                  </span>
                </div>
              </a>
            </div>
          </>
        }
        rightColContent={
          <>
            <img
              src="/images/vector-6.png"
              alt="pattern-image"
              className=" right-0 -top-12 absolute bg-contain lg:inline-block hidden"
            />

            <div className="w-full h-full flex  lg:items-end items-start lg:justify-end justify-center lg:mt-0 mt-6 relative pr-12">
              <img
                src="/images/phone-frame-3.png"
                alt="phone-frame"
                className="  bg-contain"
              />
            </div>
          </>
        }
      />
    </MainLayout>
  );
};

export default AboutUs;
