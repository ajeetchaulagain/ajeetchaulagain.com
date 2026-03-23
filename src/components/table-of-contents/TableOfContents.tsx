import React, { useRef } from 'react';
import useTableOfContents from 'hooks/useTableOfContents';
import {
  TocWrapper,
  TocTitle,
  TocList,
  TocItem,
  MobileTocWrapper,
  MobileTocDetails,
} from './styles';

const TocItems = ({
  headings,
  activeId,
  onClickItem,
}: {
  headings: ReturnType<typeof useTableOfContents>['headings'];
  activeId: string;
  onClickItem?: () => void;
}) => (
  <TocList>
    {headings.map(({ id, text, level }) => (
      <TocItem key={id} isActive={activeId === id} level={level}>
        <a
          href={`#${id}`}
          onClick={(e) => {
            e.preventDefault();
            onClickItem?.();
            document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          {text}
        </a>
      </TocItem>
    ))}
  </TocList>
);

export const TableOfContents = () => {
  const { headings, activeId, tocTop } = useTableOfContents();
  const detailsRef = useRef<HTMLDetailsElement>(null);

  if (headings.length < 2) return null;

  const collapseDetails = () => {
    if (detailsRef.current) detailsRef.current.open = false;
  };

  const tocTitle = 'Contents';
  return (
    <>
      {/* Mobile: sticky collapsible bar, hidden at ≥1380px */}
      <MobileTocWrapper>
        <MobileTocDetails ref={detailsRef}>
          <summary>{tocTitle}</summary>
          <TocItems
            headings={headings}
            activeId={activeId}
            onClickItem={collapseDetails}
          />
        </MobileTocDetails>
      </MobileTocWrapper>

      {/* Desktop: fixed sidebar, hidden below 1380px */}
      <TocWrapper style={{ top: tocTop }}>
        <TocTitle>{tocTitle}</TocTitle>
        <TocItems headings={headings} activeId={activeId} />
      </TocWrapper>
    </>
  );
};
