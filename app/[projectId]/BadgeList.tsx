import React from 'react';

import { Badge } from '@/components/ui/badge';

type BadgeListProps = {
  technologies: string[];
};

function BadgeList({ technologies }: BadgeListProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
      {technologies.map((technology) => {
        return (
          <Badge
            className="h-8 text-black hover:bg-yellow-200/90"
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
