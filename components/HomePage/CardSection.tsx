import React from 'react';
import AnimatedSection from '@/layouts/AnimatedSection';
import { fadeInUp } from '@/utils/animations';
import { cn } from '@/utils/utils';

interface CardSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  containerClassName?: string;
  leftColContent?: React.ReactNode;
  leftColContentTitle?: React.ReactNode | string;
  leftColContentBigTitle?: React.ReactNode | string;
  leftColContentDescription?: React.ReactNode;
  rightColContent?: React.ReactNode;
}

const CardSection = ({
  className,
  containerClassName,
  leftColContent,
  leftColContentTitle,
  leftColContentBigTitle,
  leftColContentDescription,
  rightColContent,
  ...props
}: CardSectionProps) => {
  return (
    <AnimatedSection
      variants={fadeInUp}
      delay={0.2}
      className={cn('lg:max-w-[90vw]  w-full flex justify-center mx-auto ', containerClassName)}
    >
      <div
        className={cn(
          'w-full lg:h-147.5 overflow-hidden bg-[hsla(194,100%,94%,1)] rounded-[30px] pt-14 pl-14 flex justify-between lg:flex-row flex-col border border-[hsla(194,100%,42%,0.5)]',
          className
        )}
        {...props}
      >
        <div className="lg:basis-1/2 basis-full flex flex-col gap-10">
          {!leftColContent && (
            <>
              <p className="text-[hsla(194,100%,45%,1)]  text-xl font-semibold uppercase mt-8">
                {leftColContentTitle || ''}
              </p>
              <p className="lg:text-5xl text-[hsla(0,0%,12%,1)] text-3xl font-medium max-w-3xl">
                {leftColContentBigTitle || ''}
              </p>
              <p className="max-w-2xl text-[hsla(0,0%,12%,1)]">{leftColContentDescription || ''}</p>
            </>
          )}
          {leftColContent}
        </div>
        <div className=" bg-contain relative lg:basis-1/2 basis-full mt-0">{rightColContent}</div>
      </div>
    </AnimatedSection>
  );
};

export default CardSection;
