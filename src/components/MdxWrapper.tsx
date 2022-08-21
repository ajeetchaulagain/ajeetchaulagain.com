import React, { ReactNode } from 'react';

type MdxWrapperProps = {
  children: ReactNode;
};
export const MdxWrapper = (props: MdxWrapperProps) => {
  return <div>{props.children}</div>;
};
