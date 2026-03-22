declare module '*.jpg';
declare module '*.png';
declare module '*.md' {
  import React from 'react';
  const MDXComponent: React.ComponentType;
  export default MDXComponent;
}
declare module '*.svg' {
  const content: any;
  export default content;
}
