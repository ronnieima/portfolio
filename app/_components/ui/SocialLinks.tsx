import { cn } from '@/lib/utils';
import Link from 'next/link';
import { SocialIcon } from 'react-social-icons/component';
import 'react-social-icons/github';
import 'react-social-icons/linkedin';
import 'react-social-icons/x';
type SocialType = {
  network: string;
  url: string;
};

const socials: SocialType[] = [
  {
    network: 'linkedin',
    url: 'https://www.linkedin.com/in/ronnie-kaito-imagawa/',
  },
  {
    network: 'x',
    url: 'https://twitter.com/imagawaDev',
  },
  {
    network: 'github',
    url: 'https://github.com/ronnieima',
  },
];
function SocialLinks({ className }: { className?: string }) {
  return (
    <ul
      className={cn(
        'flex list-none items-center justify-center gap-4',
        className,
      )}
    >
      {socials.map((social) => (
        <li key={social.url}>
          <Link href={social.url} target="_blank">
            <SocialIcon
              as="div"
              network={social.network}
              className="transition-all hover:scale-110"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
