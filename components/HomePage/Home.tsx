"use client";

import AnimatedSection from "@/layouts/AnimatedSection";
import MainLayout from "@/layouts/MainLayout";
import { fadeIn } from "@/utils/animations";
import CardSection from "./CardSection";
import HeroBanner from "./HeroBanner";
import MentionedOn from "./MentionedOn";
import TwoCardsSections from "./TwoCardsSections";

export default function Home() {
  return (
    <MainLayout className="">
      <AnimatedSection
        variants={fadeIn}
        delay={0.2}
        className="min-h-screen bg-[#E6EFF1] relative"
      >
        <div
          className="relative overflow-hidden rounded-b-[30px] lg:max-w-[90vw] max-w-full mx-auto"
          style={{
            background:
              "linear-gradient(152deg, rgba(189, 208, 213, 0.20) 10.54%, rgba(0, 190, 245, 0.20) 66.35%), #E6EFF1",
          }}
        >
          <svg
            className="absolute -left-40 top-20 pointer-events-none lg:inline-block hidden"
            width="395"
            height="486"
            viewBox="0 0 395 486"
            fill="none"
            style={{ stroke: "rgba(0, 99, 109, 0.25)", strokeWidth: "1.253px" }}
          >
            <path
              d="M371.991 0.00853428C316.813 -0.612146 226.544 32.408 306.893 169.454C322.391 186.212 360.082 215.632 386.866 199.246C401.748 183.729 406.59 150.088 306.893 139.66C253.573 131.592 138.005 133.329 102.295 204.832C89.2749 233.383 95.5987 294.955 225.051 312.83C243.031 312.21 271.923 307.616 243.652 294.21C216.373 285.52 149.167 278.569 98.5769 320.278C67.5779 346.968 4.46386 417.477 0 486"
              stroke="#00636D"
              strokeOpacity="0.25"
              strokeWidth="1.25322"
              strokeLinecap="round"
            />
          </svg>

          <svg
            className="absolute right-0 top-48 pointer-events-none hidden lg:block"
            width="374"
            height="588"
            viewBox="0 0 374 588"
            fill="none"
          >
            <path
              d="M352.214 0.0103254C299.97 -0.740621 214.5 39.2097 290.577 205.019C305.251 225.294 340.939 260.888 366.298 241.063C380.39 222.289 384.974 181.588 290.577 168.972C240.092 159.209 130.668 161.312 96.8561 247.821C84.5287 282.365 90.5163 356.859 213.086 378.486C230.11 377.735 257.467 372.178 230.699 355.957C204.87 345.444 141.237 337.034 93.3361 387.497C63.9851 419.788 4.22654 505.096 0 588"
              stroke="#00636D"
              strokeOpacity="0.5"
              strokeWidth="1.25322"
              strokeLinecap="round"
            />
          </svg>

          <div className="absolute left-1/2 -translate-x-1/2 -top-24 rounded-full bg-[hsla(191,28%,92%,1)] pointer-events-none lg:w-225 lg:h-221.25   opacity-100" />
          <div className="h-20" />
          {/* Hero Text */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6  pb-16 text-center">
            <h1 className="font-onest font-semibold text-4xl sm:text-5xl lg:text-[70px] leading-tight lg:leading-21.5 max-w-206.5 mx-auto pt-20">
              <span className="text-[#00636D] font-onest">Get paid daily.</span>
              <span className="text-[#1E1E1E]">
                {" "}
                Manage smarter. Live better.
              </span>
            </h1>
            <p className="mt-6 text-[#1E1E1E] font-onest font-normal text-base sm:text-lg leading-7.5 max-w-171.75 mx-auto">
              Access your earned salary anytime, lock funds for goals, and take
              control of your financial future with DailyPay.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
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

          <div className="relative lg:max-w-[90vw] z-10  mt-5 lg:mx-auto ">
            <HeroBanner />
          </div>
        </div>

        <MentionedOn />
      </AnimatedSection>
      <section className="lg:max-w-[90vw] max-w-full mx-auto py-14 font-onest">
        <div className="flex flex-col items-center">
          <p className="lg:text-5xl text-3xl font-medium text-center flex items-center gap-2 flex-wrap justify-center">
            Everything you need for
            <span className=" relative inline-flex items-center justify-center px-6 py-3 rounded-full overflow-hidden ">
              <span className="absolute inset-0 bg-[url('/images/stack.png')] bg-[hsla(194,100%,42%,1)] opacity-60" />
              <span className="relative text-[#1E1E1E] ">
                Financial Freedom
              </span>
            </span>
          </p>
          <p className="text-lg max-w-4xl text-center mt-6 font-normal text-[hsla(72, 11%, 9%, 1)]">
            We empower working individuals to access their earned income daily,
            giving them real-time control over their finances, and enabling them
            to live with confidence, stability, and peace of mind.
          </p>
        </div>
      </section>
      <CardSection
        id="features"
        leftColContentTitle="Dailypay Access"
        leftColContentBigTitle="Access your earned salary anytime before payday."
        leftColContentDescription="Activate Dailypay and start getting access to your earned wages as you work, not just on payday. No more waiting till month-end! Bank-level security protects your money and personal data"
        rightColContent={
          <>
            <img
              src="/images/vector-4.png"
              alt="pattern-image"
              className=" right-0 -top-12 absolute bg-contain lg:inline-block hidden"
            />

            <div className="w-full h-full flex  lg:items-end items-start lg:justify-end justify-center lg:mt-0 mt-6 relative ">
              <img
                src="/images/phone-frame.png"
                alt="phone-frame"
                className="  bg-contain"
              />
            </div>
          </>
        }
      />

      <TwoCardsSections
        leftImage="/images/hero-1.png"
        rightColContentTitle="ADVANCE PAY"
        rightColContentBigTitle="Get help when you need it most with advance pay"
        rightColContentDescription="Advance Pay gives you instant access to funds when emergencies happen, helping you stay in control without stress, shame, or complicated processes."
        rightContentImage="/images/cash.png"
      />

      <CardSection
        className="bg-[hsla(191,28%,92%,1)] border border-[hsla(186,100%,21%,0.4)]"
        leftColContentTitle={
          <span className="text-[hsla(186,100%,21%,1)] uppercase">Stash</span>
        }
        leftColContentBigTitle="Stash money for specific goals and get automatic payouts."
        leftColContentDescription="Create a stash to help build financial stability and discipline while achieving a specific goals with automatic payouts. Download Dailypay to start building discipline effortlessly"
        rightColContent={
          <>
            <img
              src="/images/vector-6.png"
              alt="pattern-image"
              className=" right-0 -top-12 absolute bg-contain lg:inline-block hidden"
            />

            <div className="w-full h-full flex  lg:items-end items-start lg:justify-end justify-center lg:mt-0 mt-6 relative ">
              <img
                src="/images/phone-frame-2.png"
                alt="phone-frame"
                className="  bg-contain"
              />
            </div>
          </>
        }
      />

      <TwoCardsSections
        leftImage="/images/hero-2.png"
        rightColContentTitle="BILL PAYMENT"
        rightColContentBigTitle="Pay your everyday bills in seconds with no stress"
        rightColContentDescription="Pay for airtime, data, electricity, cable TV, internet, and more with no delay — all from a single dashboard. "
        rightContentImage="/images/money-stack.png"
        rightContentClassName="border-[hsla(157,72%,42%,0.5)] bg-[hsla(143,68%,95%,1)]"
      />

      <section
        id="how-it-works"
        className="lg:max-w-screen w-full bg-[hsla(186,44%,7%,1)] bg-[url('/images/patterns.png')] bg-cover bg-no-repeat mx-auto py-14 font-onest"
      >
        <div className="flex flex-col gap-4 lg:max-w-[85vw] w-full mx-auto">
          <div className="border-b border-[hsla(0,0%,100%,0.3)] flex pt-10 pb-14 justify-center flex-col items-center">
            <p className="  max-w-6xl flex justify-center items-center lg:text-5xl text-2xl font-medium text-white text-center">
              We're more than just an app. We're your partner in building better
              financial habits and achieving your goals.
            </p>
          </div>
          <div className="flex lg:flex-row flex-col gap-6 items-end mt-14">
            <div className="relative lg:basis-1/3 basis-full rounded-[28px] p-px ">
              <div className=" relative rounded-[27px] backdrop-blur-3xl border border-white/15 px-8 py-10 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="text-[hsla(0,0%,100%,0.2)] lg:text-7xl text-4xl font-bold">
                  1
                </span>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-[hsla(0,0%,100%,1)] text-2xl font-semibold leading-snug mt-4">
                    Get Paid When You Need It
                  </h3>

                  <p className="text-[hsla(0,0%,100%,1)] text-base leading-relaxed max-w-xl">
                    With DailyPay, you can access your earned money daily,
                    weekly, or instantly when emergencies arise. No more
                    borrowing. No more waiting. No more stress.
                  </p>

                  <div className="flex justify-end">
                    <img
                      src="/images/cash-flows.png"
                      alt="phone-frame"
                      className="  bg-contain h-32 object-contain"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="relative lg:basis-1/3 basis-full rounded-[28px] p-px ">
              <div className=" relative rounded-[27px] backdrop-blur-3xl border border-white/15 px-8 py-10 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="text-[hsla(0,0%,100%,0.2)] lg:text-7xl text-4xl font-bold">
                  2
                </span>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-[hsla(0,0%,100%,1)] text-2xl font-semibold leading-snug mt-4">
                    Take Control of Your Finances
                  </h3>

                  <p className="text-[hsla(0,0%,100%,1)] text-base leading-relaxed max-w-xl">
                    DailyPay helps you manage your money smarter with Lock & Pay
                    disciplined savings, Instant bill payment and Seamless
                    transfers
                  </p>
                </div>
              </div>
            </div>
            <div className="relative lg:basis-1/3 basis-full rounded-[28px] p-px ">
              <div className=" relative rounded-[27px] backdrop-blur-3xl border border-white/15 px-8 py-10 overflow-hidden shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                <span className="text-[hsla(0,0%,100%,0.2)] lg:text-7xl text-4xl font-bold">
                  3
                </span>
                <div className="relative z-10 space-y-4">
                  <h3 className="text-[hsla(0,0%,100%,1)] text-2xl font-semibold leading-snug mt-4">
                    Safe, Secure & Fully Compliant
                  </h3>

                  <p className="text-[hsla(0,0%,100%,1)] text-base leading-relaxed max-w-xl">
                    Your trust is our top priority. Your money and data are
                    protected with Bank-grade encryption, Multi-layer security
                    and Full KYC & regulatory compliance.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <TwoCardsSections
        className="gap-0 rounded-none"
        leftImageElement={
          <img
            src="/images/hero-3.png"
            alt="feature-1"
            className=" w-full h-full object-contain lg:block md:hidden sm:block lg:basis-1/3 basis-full lg:mb-0 mb-2 lg:rounded-none rounded-[30px] "
          />
        }
        rightColContent={
          <>
            <p className="lg:text-5xl text-3xl lg:mt-0 mt-5 font-medium max-w-3xl text-[hsla(0,0%,12%,1)]">
              Get Ready to Change How You Get Paid
            </p>
            <p className="max-w-2xl text-lg z-2 text-[hsla(0,0%,12%,1)]">
              <span>
                Get ready to change how you get paid. Imagine receiving your
                salary daily, having total control over your money, and enjoying
                stress-free finances without waiting till month-end
              </span>
              <br />
              <br />
              <span>
                With DailyPay, this becomes your everyday reality — smarter
                access, better control, and a better quality of life, all in one
                powerful app.
              </span>
            </p>
          </>
        }
        rightContentClassName="border-[hsla(0,0%,12%,0.1)] bg-[hsla(0,3%,97%,0.8)] lg:rounded-none rounded-[30px] lg:rounded-tr-[30px] lg:rounded-br-[30px] min-h-0 "
      />

      <CardSection
        className="bg-[hsla(186,100%,21%,1)] border border-[hsla(1hsla(186,100%,21%,.4))] mb-6"
        leftColContent={
          <>
            <p className="lg:text-5xl text-white text-3xl font-medium max-w-3xl mt-10">
              Personal finance, made simple for you. Sign up now.
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
                  alt="Google Play"
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
}
