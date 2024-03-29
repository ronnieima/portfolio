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
      className={cn(
        'mx-auto flex w-full max-w-[70rem] flex-col px-4 sm:px-8',
        className,
      )}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
