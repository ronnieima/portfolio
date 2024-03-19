import { icons } from '@/config/content';
import React from 'react';
import IconLogo from './IconLogo';

type Props = {
  system: 'front_end' | 'back_end';
};

export default function SkillCard({ system }: Props) {
  const systemWithSpaces = system.replace('_', ' ');
  return (
    <div className="rounded-lg bg-neutral-200 px-8 py-4 shadow-md lg:w-1/2">
      <h3 className="py-4 text-3xl font-semibold capitalize">
        {systemWithSpaces}
      </h3>
      <div className="flex flex-wrap items-center justify-center gap-4">
        {icons[system].map((icon) => (
          <IconLogo key={icon.label} className={icon.icon} label={icon.label} />
        ))}
      </div>
    </div>
  );
}
