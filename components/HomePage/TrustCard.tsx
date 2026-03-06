import { cn } from '@/utils/utils';

export default function TrustCard({ classname }: { classname?: string }) {
  return (
    <div
      className={cn(
        'rounded-[20px] bg-white overflow-hidden sm:w-66.5 shadow-lg flex flex-col items-center justify-center',
        classname
      )}
    >
      {/* Top image area */}
      <div className="flex justify-center w-full">
        <div className="h-21 w-full mx-2 mt-2 py-2 px-2  bg-[url('/images/frame-build.png')] bg-contain  bg-no-repeat relative flex items-end ">
          <p className="text-white font-onest font-semibold text-base leading-snug relative z-10 max-w-32 pb-2">
            Enjoy financial freedom
          </p>
        </div>
      </div>

      {/* Bottom trust area */}
      <div className="bg-white px-3 py-3 pb-7 flex items-center gap-3">
        {/* Avatar stack */}
        <div className="flex -space-x-3 shrink-0">
          <img src="/images/group-avatar.png" alt="User" className=" h-12.5 object-cover" />
        </div>
        <p className="text-[#00636D] font-onest font-medium text-sm leading-snug">
          Trusted by 10k+ Employees
        </p>
      </div>
    </div>
  );
}
