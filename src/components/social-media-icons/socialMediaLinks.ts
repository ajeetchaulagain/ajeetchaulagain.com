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
    IconComponent: FaFacebook,
  },
  {
    url: 'https://twitter.com/ajeetsweb',
    IconComponent: FaTwitter,
  },
  {
    url: 'https://www.linkedin.com/in/ajeet-chaulagain/',
    IconComponent: FaLinkedinIn,
  },
  {
    url: 'https://github.com/ajeetchaulagain',
    IconComponent: FaGithub,
  },
  {
    url: 'https://www.instagram.com/chaulagainajeet/',
    IconComponent: FaInstagram,
  },
  {
    url: 'https://ko-fi.com/ajeetchaulagain',
    IconComponent: FaCoffee,
  },
];
