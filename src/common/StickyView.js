import React, { useState, useEffect, useRef, useContext } from "react";
import ScrollContext from "./ScrollContext";
import "./stickyView.scss";

const StickyView = ({ height, children }) => {
  const [proportion, setProportion] = useState(0);
  const { scrollingElement } = useContext(ScrollContext);
  const elRef = useRef();

  const onScroll = () => {
    const containerRect = scrollingElement.getBoundingClientRect();
    const selfRect = elRef.current.getBoundingClientRect();
    const offTop = containerRect.top - selfRect.top;

    setProportion(Math.max(0, Math.min(1, -offTop / (containerRect.height - selfRect.height))));
  };

  useEffect(() => {
    if (scrollingElement) {
      scrollingElement.addEventListener("scroll", onScroll);
      return () => scrollingElement.removeEventListener("scroll", onScroll);
    }
  }, [scrollingElement]);

  return (
    <div className="sticky-view" ref={elRef} style={{ height }}>
      <div className="sticky-view-content">{children(proportion)}</div>
    </div>
  );
};

export default StickyView;
