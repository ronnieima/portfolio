import React, {
  PropsWithChildren,
  ReactNode,
  createContext,
  useContext,
} from "react";

type BentoBoxProps = {
  children: ReactNode;
  className?: string;
};

function BentoBox({ children, className }: BentoBoxProps) {
  return (
    <div
      className={`bg-neutral-900 text-white rounded-3xl p-8 col-span-full ${className}`}
    >
      {children}
    </div>
  );
}

export default BentoBox;
