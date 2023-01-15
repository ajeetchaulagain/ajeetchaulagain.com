import React from 'react';
import { IconType } from 'react-icons';
import { BiLinkExternal } from 'react-icons/bi';
import {
  FaGithub,
  FaArrowRight,
  FaTelegramPlane,
  FaCoffee,
  FaInfoCircle,
} from 'react-icons/fa';

export type IconName =
  | 'ExternalLink'
  | 'Github'
  | 'ArrowRight'
  | 'Plane'
  | 'Coffee'
  | 'InfoCircle';

const IconMap: Record<IconName, IconType> = {
  ExternalLink: BiLinkExternal,
  Github: FaGithub,
  ArrowRight: FaArrowRight,
  Plane: FaTelegramPlane,
  Coffee: FaCoffee,
  InfoCircle: FaInfoCircle,
};

export const Icon = ({ iconName }: { iconName: IconName }) => {
  if (!iconName) {
    return null;
  }
  const IconComponent = iconName && IconMap[iconName];
  return <IconComponent />;
};
