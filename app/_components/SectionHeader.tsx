import { cn } from '@/lib/utils';
import { notoSerif } from '@/utils/fonts';
import React from 'react';

type SectionHeaderType = {
  id: string;
  header: string;
  subtitle?: string;
  className?: string;
};

export default function SectionHeader({
  id,
  header,
  subtitle,
  className,
}: SectionHeaderType) {
  return (
    <header
      id={id}
      className={cn('flex flex-col items-start justify-start gap-4', className)}
    >
      <h2
        className={`${notoSerif.className} self-start text-center text-2xl font-bold text-secondary`}
      >
        {header}
      </h2>
      {subtitle && <p className=" text-3xl font-extrabold">{subtitle}</p>}
    </header>
  );
}
