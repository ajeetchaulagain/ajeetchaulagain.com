import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaCoffee,
} from 'react-icons/fa';
import { IconType } from 'react-icons/lib';

export const socialMediaLinks: Record<string, string | IconType>[] = [
  {
    url: 'https://www.facebook.com/chaulagain.ajeet',
    ariaLabel: 'Facebook',
    IconComponent: FaFacebook,
  },
  {
    url: 'https://twitter.com/ajeetsweb',
    ariaLabel: 'Twitter',
    IconComponent: FaTwitter,
  },
  {
    url: 'https://www.linkedin.com/in/ajeet-chaulagain/',
    ariaLabel: 'Linkedin',
    IconComponent: FaLinkedinIn,
  },
  {
    url: 'https://github.com/ajeetchaulagain',
    ariaLabel: 'Github',
    IconComponent: FaGithub,
  },
  {
    url: 'https://www.instagram.com/chaulagainajeet/',
    ariaLabel: 'Instagram',
    IconComponent: FaInstagram,
  },
  {
    url: 'https://ko-fi.com/ajeetchaulagain',
    ariaLabel: 'KoFi',
    IconComponent: FaCoffee,
  },
];
