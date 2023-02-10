export const onRouteUpdate = () => {
  // there does not seem to be a way in gatsby to run "before page change"
  const t = 16;
  if (typeof window.inc == "function") {
    if (`requestAnimationFrame` in window) {
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.inc("send_pageview_meta");
          setTimeout(() => window.inc("run", false), t * 2);
        });
      });
    } else {
      // Delay by 32ms to simulate 2 requestOnAnimationFrame calls
      setTimeout(() => {
        window.inc("send_pageview_meta");
      }, t * 2);
      setTimeout(() => {
        window.inc("run", false);
      }, t * 4);
    }
  }
};
