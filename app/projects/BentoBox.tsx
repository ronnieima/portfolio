import { ReactNode } from 'react';

type BentoBoxProps = {
  children?: ReactNode;
  className?: string;
};

function BentoBox({ children, className }: BentoBoxProps) {
  return (
    <div
      className={` rounded-3xl bg-[#1E1E1E] p-8 text-foreground ${className}`}
    >
      {children}
    </div>
  );
}

export default BentoBox;
