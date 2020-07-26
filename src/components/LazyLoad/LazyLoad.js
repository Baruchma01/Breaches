import React, { useEffect, useRef, useState } from "react";
// import { debounce } from '../../utils/utils';

const LazyLoad = (props) => {
  const lazyElem = useRef();
  useEffect(() => {
    let observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          const { isIntersecting } = entry;
          if (isIntersecting) {
            setShouldRenderChild(true);
            observer = observer.disconnect();
          }
        });
      },
    );
    if (lazyElem.current) {
      observer.observe(lazyElem.current)
    }
  }, []);

  const [shouldRenderChild, setShouldRenderChild] = useState(false)
  return (
    <div ref={lazyElem}>
      {
        shouldRenderChild ? props.children : null
      }
    </div>
  )
};

export default LazyLoad;
