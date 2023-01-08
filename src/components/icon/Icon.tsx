import React from 'react';
import { IconType } from 'react-icons';
import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub, FaArrowRight, FaTelegramPlane } from 'react-icons/fa';

export type IconName = 'ExternalLink' | 'Github' | 'ArrowRight' | 'Plane';

const IconMap: Record<IconName, IconType> = {
  ExternalLink: BiLinkExternal,
  Github: FaGithub,
  ArrowRight: FaArrowRight,
  Plane: FaTelegramPlane,
};

export const Icon = ({ iconName }: { iconName: IconName }) => {
  if (!iconName) {
    return null;
  }
  const IconComponent = iconName && IconMap[iconName];
  return <IconComponent />;
};
