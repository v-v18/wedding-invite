import React, { useContext, useEffect, useRef, useState } from 'react';
import ScrollContext from './ScrollContext';
import './StickyView.css';

export default function StickyView({ height, children }) {
  const elRef = useRef();
  const { scrollingElement } = useContext(ScrollContext);
  const [proportion, setProportion] = useState(0);

  const onScroll = (container) => {
    const containerRect = container.getBoundingClientRect();
    const selfRect = elRef.current.getBoundingClientRect();
    const offTop = containerRect.y - selfRect.y;
    const viewHeight = containerRect.height;
    const result = offTop < 0 ? offTop / viewHeight : offTop / viewHeight + 1;
    setProportion(result);
  };

  useEffect(() => {
    if (scrollingElement) {
      scrollingElement.addEventListener('scroll', (e) => onScroll(e.target));
      onScroll(scrollingElement);
    }
    return () => scrollingElement?.removeEventListener('scroll', onScroll);
  }, [scrollingElement]);

  return (
    <div className="sticky-view" ref={elRef} style={{ height }}>
      <div className="sticky-view-sticky" style={{ height: scrollingElement?.clientHeight }}>
        {children(proportion)}
      </div>
    </div>
  );
}
