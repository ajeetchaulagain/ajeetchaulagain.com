declare module '@mdx-js/react' {
  import { ComponentType, StyleHTMLAttributes } from 'react';
  type MDXProps = {
    children: React.ReactNode;
    components: { wrapper?: React.ReactNode; ContactForm: ?React.ElementType };
  };
  export class MDXProvider extends React.Component<MDXProps> {}
}
