import { useEffect } from 'react';

const COPY_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`;
const CHECK_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 12 4 10"/></svg>`;

const useCopyCode = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll<HTMLElement>('.gatsby-highlight');
    const buttons: HTMLButtonElement[] = [];

    // Build a set of .gatsby-highlight blocks that should have no copy button.
    // Search forward from each marker to its associated .gatsby-highlight,
    // skipping over any intervening elements (e.g. a code title wrapper).
    const noCopyBlocks = new Set<Element>();
    document.querySelectorAll('.no-copy-marker').forEach((marker) => {
      // In MDX v5 the marker is the only child of a wrapper span, so its own
      // nextElementSibling is null. Fall back to the wrapper's next sibling.
      let sibling =
        marker.nextElementSibling ??
        marker.parentElement?.nextElementSibling ??
        null;
      while (sibling) {
        const highlight = sibling.classList.contains('gatsby-highlight')
          ? sibling
          : sibling.querySelector('.gatsby-highlight');
        if (highlight) {
          noCopyBlocks.add(highlight);
          break;
        }
        sibling = sibling.nextElementSibling;
      }
    });

    blocks.forEach((block) => {
      if (noCopyBlocks.has(block)) return;

      // Find associated title wrapper (direct sibling or MDX v5 span-wrapped)
      let titleWrapper: Element | null =
        block.previousElementSibling?.classList.contains(
          'gatsby-remark-code-title-wrapper'
        )
          ? block.previousElementSibling
          : null;

      if (!titleWrapper) {
        const parentSpan = block.closest('span');
        if (parentSpan) {
          titleWrapper =
            parentSpan.previousElementSibling?.querySelector(
              '.gatsby-remark-code-title-wrapper'
            ) ?? null;
        }
      }

      const button = document.createElement('button');
      button.className = titleWrapper
        ? 'copy-code-button copy-code-button--in-title'
        : 'copy-code-button';
      button.setAttribute('aria-label', 'Copy code to clipboard');
      button.innerHTML = COPY_ICON;
      (titleWrapper ?? block).appendChild(button);
      buttons.push(button);

      button.addEventListener('click', async () => {
        const code = block.querySelector('pre code');
        if (!code) return;
        try {
          await navigator.clipboard.writeText(code.textContent ?? '');
          button.innerHTML = CHECK_ICON;
          button.classList.add('copied');
          setTimeout(() => {
            button.innerHTML = COPY_ICON;
            button.classList.remove('copied');
          }, 2000);
        } catch (err) {
          console.error('Failed to copy code:clipboard API not available', err);
        }
      });
    });

    return () => {
      buttons.forEach((b) => b.remove());
    };
  }, []);
};

export default useCopyCode;
