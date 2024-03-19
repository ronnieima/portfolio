import { cn } from '@/lib/utils';
import React from 'react';
type Props = {
  className: string;
  label: string;
};
export default function IconLogo({ className, label }: Props) {
  return (
    <div className="space-y-2 py-2">
      <i className={cn('text-[7.5rem]', className)}></i>
      <p className="text-center text-sm font-semibold">{label}</p>
    </div>
  );
}
