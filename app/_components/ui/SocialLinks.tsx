import Link from 'next/link';
import React from 'react';
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
function SocialLinks() {
  return (
    <>
      {socials.map((social) => (
        <li key={social.url}>
          <Link href={social.url} target="_blank">
            <SocialIcon
              as="div"
              network={social.network}
              bgColor="transparent"
              className="invert hover:scale-110 dark:invert-0"
            />
          </Link>
        </li>
      ))}
    </>
  );
}

export default SocialLinks;
