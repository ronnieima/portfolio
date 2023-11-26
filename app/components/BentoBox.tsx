import { ReactNode } from "react";

type BentoBoxProps = {
  children: ReactNode;
  className?: string;
};

function BentoBox({ children, className }: BentoBoxProps) {
  return (
    <div
      className={`bg-neutral-900 text-white rounded-3xl p-8 col-span-full shadow-sm shadow-zinc-800  ${className}`}
    >
      {children}
    </div>
  );
}

export default BentoBox;
