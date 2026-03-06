import { cn } from '@/utils/utils';

export default function TransactionCard({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        `
        relative
        rounded-t-[20px]
        rounded-br-[20px]
        w-[260px] sm:w-[300px]
        shadow-[0_0_0_8px_hsla(0,0%,100%,0.25)]
      `,
        className
      )}
    >
      <div
        className="
          relative
          rounded-t-[20px]
          rounded-br-[20px]
         bg-[hsla(194,100%,94%,1)]
          backdrop-blur-xl
          px-4 py-4
          flex items-center gap-3
        "
      >
        {/* Top subtle glass highlight */}
        <div className="absolute inset-0   rounded-t-[20px] rounded-br-[20px] bg-gradient-to-b from-white/40 to-transparent pointer-events-none" />

        {/* Plus circle */}
        <div className="relative w-11 h-11 rounded-full bg-[hsla(186,100%,21%,1)] flex items-center justify-center flex-shrink-0">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.3125 18.75C10.3125 18.9986 10.4113 19.2371 10.5871 19.4129C10.7629 19.5887 11.0014 19.6875 11.25 19.6875C11.4986 19.6875 11.7371 19.5887 11.9129 19.4129C12.0887 19.2371 12.1875 18.9986 12.1875 18.75V12.1875H18.75C18.9986 12.1875 19.2371 12.0887 19.4129 11.9129C19.5887 11.7371 19.6875 11.4986 19.6875 11.25C19.6875 11.0014 19.5887 10.7629 19.4129 10.5871C19.2371 10.4113 18.9986 10.3125 18.75 10.3125H12.1875V3.75C12.1875 3.50136 12.0887 3.2629 11.9129 3.08709C11.7371 2.91127 11.4986 2.8125 11.25 2.8125C11.0014 2.8125 10.7629 2.91127 10.5871 3.08709C10.4113 3.2629 10.3125 3.50136 10.3125 3.75V10.3125H3.75C3.50136 10.3125 3.2629 10.4113 3.08709 10.5871C2.91127 10.7629 2.8125 11.0014 2.8125 11.25C2.8125 11.4986 2.91127 11.7371 3.08709 11.9129C3.2629 12.0887 3.50136 12.1875 3.75 12.1875H10.3125V18.75Z"
              fill="white"
            />
          </svg>
        </div>

        {/* Info */}
        <div className="relative flex-1 min-w-0">
          <p className="text-[#1E1E1E] font-onest font-[500] text-sm leading-snug">My Dailypay</p>
          <p className="text-[#1E1E1E]/50 font-onest font-normal text-xs">12 Jan 2026, 10:15am</p>
        </div>

        {/* Amount */}
        <div className="relative text-right flex-shrink-0">
          <p className="text-[#1E1E1E] font-onest font-bold text-sm">+₦100,000</p>
          <p className="text-[hsla(150,100%,37%,1)] font-onest font-medium text-xs">Successful</p>
        </div>
      </div>
    </div>
  );
}
