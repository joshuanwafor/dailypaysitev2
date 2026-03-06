import React from 'react';
import Image from 'next/image';
import { fadeInUp } from '@/utils/animations';
import { cn } from '@/utils/utils';
import AnimatedSection from '../../layouts/AnimatedSection';

interface TwoCardsSectionsProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  containerClassName?: string;
  leftImage?: string;
  leftImageElement?: React.ReactNode;
  rightColContent?: React.ReactNode;
  rightColContentTitle?: React.ReactNode | string;
  rightColContentBigTitle?: React.ReactNode | string;
  rightColContentDescription?: React.ReactNode | string;
  rightContentImage?: string | React.ReactNode;
  rightContentClassName?: string;
}

const TwoCardsSections = ({
  className,
  containerClassName,
  leftImage,
  leftImageElement,
  rightColContent,
  rightColContentTitle,
  rightColContentBigTitle,
  rightColContentDescription,
  rightContentImage,
  rightContentClassName,
  ...props
}: TwoCardsSectionsProps) => {
  return (
    <AnimatedSection
      variants={fadeInUp}
      delay={0.2}
      className={cn('lg:max-w-[90vw] w-full mx-auto py-14 font-onest', containerClassName)}
    >
      <div
        className={cn('w-full relative flex lg:flex-row flex-col gap-8 items-stretch ', className)}
        {...props}
      >
        {!leftImageElement && (
          <Image
            src={leftImage || '/images/hero-1.png'}
            alt="feature-1"
            width={500}
            height={580}
            className=" object-contain lg:h-145 lg:w-125 lg:block md:hidden sm:block lg:basis-1/3 basis-full lg:rounded-none rounded-[30px]  "
          />
        )}
        {leftImageElement}
        <div
          className={cn(
            'min-h-145 flex flex-col gap-10 lg:pt-8 pb-14 px-14  basis-full bg-[hsla(45,100%,97%,1)] rounded-[30px] border border-[hsla(38,90%,62%,0.3)]',
            rightContentClassName
          )}
        >
          {!rightColContent && (
            <>
              {' '}
              <p className="text-[hsla(23,91%,25%,1)] text-xl font-semibold uppercase mt-8">
                {rightColContentTitle}{' '}
              </p>
              <p className="lg:text-5xl text-3xl font-medium max-w-3xl text-[hsla(0,0%,12%,1)]">
                {rightColContentBigTitle}
              </p>
              <p className="max-w-2xl text-lg z-2 text-[hsla(0,0%,12%,1)]">
                {rightColContentDescription}
              </p>
            </>
          )}
          {!rightColContent && typeof rightContentImage === 'string' && (
            <img
              src={rightContentImage || '/images/cash.png'}
              alt="cash"
              className="absolute bottom-0 right-0 h-[35vh] object-contain rounded-[30px]"
            />
          )}
          {typeof rightContentImage !== 'string' && rightContentImage}
          {rightColContent}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default TwoCardsSections;
