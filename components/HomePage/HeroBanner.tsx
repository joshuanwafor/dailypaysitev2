import FinancialOverviewCard from './FinancialOverviewCard';
import TransactionCard from './TransactionCard';
import TrustCard from './TrustCard';

export default function HeroBanner() {
  return (
    <div className=" lg:px-0">
      {/* Outer container with overflow visible so person image can stick up */}
      <div className="relative">
        {/* Teal banner */}
        <div
          className="relative rounded-[30px] overflow-hidden px-0 sm:px-6 bg-[#0F8C99] min-h-137.5"
        >
          {/* World map background */}
          <img
            src="/images/world-map-1.png"
            alt=""
            className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-multiply pointer-events-none"
            style={{ imageRendering: 'crisp-edges' }}
          />

          {/* Desktop layout */}
          <div className="hidden lg:grid lg:grid-cols-[360px_1fr_320px] h-full min-h-[480px] relative z-10">
            {/* Left col: Financial Overview */}
            <div className="flex items-end pb-10 pl-6">
              <FinancialOverviewCard />
            </div>

            {/* Center col: empty — person image placed absolutely */}
            <div />

            {/* Right col: Transaction + Trust cards */}
            <div className="flex flex-col justify-between pt-10 pr-6 gap-6">
              <TransactionCard className=" translate-y-[5vh] -translate-x-[8vw]" />

              <TrustCard classname="relative -bottom-[5vh]" />
            </div>
          </div>

          {/* Mobile layout */}
          <div className="lg:hidden flex flex-col gap-4 px-4 pb-80 pt-6 relative z-10">
            <FinancialOverviewCard />
            <div className="flex flex-col sm:flex-row gap-4">
              {/* <TransactionCard /> */}
              <TrustCard />
            </div>
            <div>
              <div className="lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none z-20 w-[300px] sm:w-[340px]">
                <img
                  src="/images/hero-phone.png"
                  alt="DailyPay user holding phone"
                  className="w-full object-contain object-top"
                  style={{ maxHeight: '340px' }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Person image — overlaps upward on desktop */}
        <div className="hidden lg:block absolute left-1/2 -translate-x-1/2 bottom-0 pointer-events-none z-20">
          <img
            src="/images/hero-phone.png"
            alt="DailyPay user holding phone"
            className="w-125 xl:w-145 object-contain object-bottom drop-shadow-2xl"
            style={{ maxHeight: '720px' }}
          />
        </div>
      </div>
    </div>
  );
}
