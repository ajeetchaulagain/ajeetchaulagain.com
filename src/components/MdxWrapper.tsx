import React from 'react';

type MdxWrapperProps = {
  children: React.ElementType;
};
export const MdxWrapper = (props: MdxWrapperProps) => {
  return <div>{props.children}</div>;
};
