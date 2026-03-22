import { useState, useEffect } from 'react';

export type TocHeading = { id: string; text: string; level: 2 | 3 };

const useTableOfContents = () => {
  const [headings, setHeadings] = useState<TocHeading[]>([]);
  const [activeId, setActiveId] = useState('');
  const [tocTop, setTocTop] = useState(320);

  useEffect(() => {
    const els = Array.from(
      document.querySelectorAll<HTMLElement>('h2[id], h3[id]')
    );

    setHeadings(
      els.map((el) => ({
        id: el.id,
        text: el.textContent ?? '',
        level: el.tagName === 'H2' ? 2 : 3,
      }))
    );

    const INITIAL_TOP = 320; // 20rem
    const MIN_TOP = 128; // 8rem

    const onScroll = () => {
      const scrollY = window.scrollY;
      setTocTop(Math.max(MIN_TOP, INITIAL_TOP - scrollY));

      // Re-query live elements each scroll — theme switches unmount/remount
      // headings, making the captured `els` reference stale detached nodes
      // whose getBoundingClientRect() returns all zeros.
      const liveEls = Array.from(
        document.querySelectorAll<HTMLElement>('h2[id], h3[id]')
      );
      let currentId = liveEls[0]?.id ?? '';
      for (const el of liveEls) {
        if (el.getBoundingClientRect().top <= 120) currentId = el.id;
      }
      setActiveId(currentId);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return { headings, activeId, tocTop };
};

export default useTableOfContents;
