import React from 'react';

import { Badge } from '@/components/ui/badge';

type BadgeListProps = {
  technologies: string[];
};

function BadgeList({ technologies }: BadgeListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 sm:justify-start">
      {technologies.map((technology) => {
        return (
          <Badge
            className="transition' -all h-8 text-white hover:bg-yellow-200/90
            hover:text-black"
            variant={'secondary'}
            key={technology}
          >
            {technology}
          </Badge>
        );
      })}
    </div>
  );
}

export default BadgeList;
