import React from 'react';

import { Badge } from '@/components/ui/badge';

type BadgeListProps = {
  technologies: string[];
};

function BadgeList({ technologies }: BadgeListProps) {
  return (
    <div className="flex gap-4">
      {technologies.map((technology) => {
        return (
          <Badge className="h-8" variant={'outline'} key={technology}>
            {technology}
          </Badge>
        );
      })}
    </div>
  );
}

export default BadgeList;
