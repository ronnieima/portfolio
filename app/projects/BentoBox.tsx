import { ReactNode } from 'react';

type BentoBoxProps = {
  children?: ReactNode;
  className?: string;
  key: string;
};

function BentoBox({ children, className, key }: BentoBoxProps) {
  return (
    <div
      key={key}
      className={` rounded-3xl bg-muted p-8 text-foreground ${className}`}
    >
      {children}
    </div>
  );
}

export default BentoBox;
