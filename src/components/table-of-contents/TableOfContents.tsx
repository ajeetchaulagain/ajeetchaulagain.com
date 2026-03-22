import React from 'react';
import useTableOfContents from 'hooks/useTableOfContents';
import { TocWrapper, TocTitle, TocList, TocItem } from './styles';

export const TableOfContents = () => {
  const { headings, activeId, tocTop } = useTableOfContents();

  if (headings.length < 2) return null;

  return (
    <TocWrapper style={{ top: tocTop }}>
      <TocTitle>On this page</TocTitle>
      <TocList>
        {headings.map(({ id, text, level }) => (
          <TocItem key={id} isActive={activeId === id} level={level}>
            <a
              href={`#${id}`}
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById(id)
                  ?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              {text}
            </a>
          </TocItem>
        ))}
      </TocList>
    </TocWrapper>
  );
};
