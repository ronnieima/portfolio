import { ReactNode } from 'react';

type BentoBoxProps = {
  children: ReactNode;
  className?: string;
};

function BentoBox({ children, className }: BentoBoxProps) {
  return (
    <div
      className={`col-span-full rounded-3xl bg-neutral-900 p-8 text-white shadow-sm shadow-zinc-800  ${className}`}
    >
      {children}
    </div>
  );
}

export default BentoBox;
