import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import type { GatsbyLinkProps } from 'gatsby';

const isExternalLink = (path: string) =>
  path?.startsWith(`http://`) ||
  path?.startsWith(`https://`) ||
  path?.startsWith(`//`);

export function Link<TState>({
  children,
  ...props
}: React.PropsWithoutRef<GatsbyLinkProps<TState>>) {
  if (props.target === '_blank') {
    return (
      <a {...props} href={props.to} rel="noopener noreferrer" target="_blank">
        {children}
      </a>
    );
  }

  if (isExternalLink(props.to)) {
    return (
      <a {...props} href={props.to} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  return <GatsbyLink<TState> {...props}>{children}</GatsbyLink>;
}
