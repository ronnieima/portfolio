import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

const MaxWidthWrapper = ({
  className,
  children,
  id,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      id={id}
      className={cn('mx-auto w-full max-w-[80rem] px-2.5 md:px-20', className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
