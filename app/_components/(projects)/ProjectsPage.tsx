import { cn } from '@/lib/utils';
import { notoSerif } from '@/utils/fonts';
import { RectangleVertical } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { BentoGrid, BentoGridItem } from '../ui/BentoGrid';
import { projects } from './ProjectsBentoBoxes';

function ProjectsPage() {
  return (
    <section
      id="projects"
      className=" my-8 flex flex-col items-center justify-center gap-8"
    >
      <h2 className={`${notoSerif.className} animate-fade-down text-6xl`}>
        My projects.
      </h2>

      {/* <ProjectsBentoBoxes /> */}
      <BentoGrid>
        {projects.map((project) => (
          <BentoGridItem
            key={project.id}
            title={project.title}
            icon={<RectangleVertical />}
            className={cn(project.className, 'relative')}
            header={
              <Link href={`/${project.id}`} className="">
                <Image
                  src={project.links.imageUrl}
                  alt={project.imageAltText}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'cover' }}
                  className="absolute rounded-3xl p-2"
                />
              </Link>
            }
          />
        ))}
      </BentoGrid>
    </section>
  );
}

export default ProjectsPage;
