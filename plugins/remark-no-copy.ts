import type { Root } from 'mdast';

// Remark plugin: inserts a hidden marker span before code blocks that have
// `noCopy` in their language string (e.g. ```jsx:noCopy or ```jsx:title=Foo&noCopy).
// useCopyCode detects this marker and skips adding a copy button to that block.
const remarkNoCopy = () => (tree: Root) => {
  const visit = (node: any, index: number | null, parent: any) => {
    if (node.type === 'code' && (node.lang ?? '').includes('noCopy')) {
      node.lang = (node.lang as string)
        .replace(/&noCopy=[^&]*/g, '')
        .replace(/noCopy=[^&]*/g, '')
        .replace(/&noCopy/g, '')
        .replace(/noCopy/g, '')
        .replace(/:$/, '');

      if (parent && index !== null) {
        parent.children.splice(index, 0, {
          type: 'html',
          value: '<span class="no-copy-marker" hidden></span>',
        });
      }
    }
    if (node.children) {
      for (let i = node.children.length - 1; i >= 0; i--) {
        visit(node.children[i], i, node);
      }
    }
  };
  visit(tree, null, null);
};

export default remarkNoCopy;
