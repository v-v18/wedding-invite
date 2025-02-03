import React, { useState } from 'react';
import StickyView from '../common/StickyView';
import ScrollContext from '../common/ScrollContext';
import './Home.css';

export default function Home(props) {
  const [scrollingElement, setScrollingElement] = useState(null);

  function scrollingElRef(ref) {
    setScrollingElement(ref);
  }

  return (
    <ScrollContext.Provider value={{ scrollingElement }}>
      <div className="scrolling-view" ref={scrollingElRef}>
        <StickyView height={3240}>
          {(proportion) => (
            <div className="home-sticky-content">
              <h1>Wedding Invitation</h1>
              <h2>Park & Park</h2>
              <p>June 21, 2025</p>
              <p>Secret Location</p>
            </div>
          )}
        </StickyView>
        <StickyView height={3240}>
          {(proportion) => (
            <div className="home-sticky-content sticky-content-2">
              <h3>Scroll to reveal more...</h3>
              <p>We're excited to celebrate with you!</p>
            </div>
          )}
        </StickyView>
        <StickyView height={3240}>
          {(proportion) => (
            <div className="home-sticky-content sticky-content-3">
              <h1>Details coming soon!</h1>
            </div>
          )}
        </StickyView>
      </div>
    </ScrollContext.Provider>
  );
}
