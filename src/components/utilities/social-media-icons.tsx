import React from 'react';
import * as socialMediaIconsStyles from './social-media-icons.module.scss';
import {
  FaFacebook,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaInstagram,
  FaCoffee,
} from 'react-icons/fa';

const SocialMediaIcons = () => {
  return (
    <div className={socialMediaIconsStyles.wrapper}>
      <ul className={socialMediaIconsStyles.socialMediaLists}>
        <li>
          <a
            href="https://www.facebook.com/chaulagain.ajeet"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/ajeetsweb"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ajeet-chaulagain/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/ajeetchaulagain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/chaulagainajeet/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            href="https://ko-fi.com/ajeetchaulagain"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaCoffee />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaIcons;
