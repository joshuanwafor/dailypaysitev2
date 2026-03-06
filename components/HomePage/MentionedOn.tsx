export default function MentionedOn() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 py-8 px-4">
      <span className="text-[#1E1E1E]/80 font-onest font-normal text-base sm:text-xl uppercase tracking-wide">
        As Mentioned On:
      </span>
      <div className="flex items-center gap-6 sm:gap-8">
        <img
          src="/images/tech-point.png"
          alt="Techpoint"
          className="h-8 sm:h-10 w-auto object-contain"
        />
        <img
          src="/images/tech-circle.png"
          alt="Techcircle"
          className="h-9 sm:h-11 w-auto object-contain"
        />
      </div>
    </div>
  );
}
