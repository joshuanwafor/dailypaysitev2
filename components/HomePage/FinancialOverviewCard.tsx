export default function FinancialOverviewCard() {
  return (
    <div className="bg-[rgba(15,15,15,0.20)] backdrop-blur-sm rounded-[24px] p-5 sm:w-[320px] lg:w-[360px] flex flex-col gap-5">
      <h3 className="text-white font-onest font-semibold text-base">Financial Overview</h3>

      {/* Total Income */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-white/80 font-onest font-normal text-sm">Total Income</span>
          <span className="text-white font-onest font-semibold text-base">₦315,000.00</span>
        </div>
        <div className="h-2 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full w-full rounded-full bg-[hsla(157,54%,61%,1)]" />
        </div>
      </div>

      {/* Total Expenses */}
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <span className="text-white/80 font-onest font-normal text-sm">Total Expenses</span>
          <span className="text-white font-onest font-semibold text-base">₦112,000.00</span>
        </div>
        <div className="h-2 rounded-full bg-white/20 overflow-hidden">
          <div className="h-full w-[36%] rounded-full bg-[hsla(38,100%,50%,1)]" />
        </div>
      </div>

      {/* Net Balance */}
      <div className="flex justify-between items-center pt-1 border-t border-white/10">
        <span className="text-white/80 font-onest font-normal text-sm">Net Balance</span>
        <span className="text-white font-onest font-semibold text-base">₦203,000.00</span>
      </div>
    </div>
  );
}
