export const onRouteUpdate = ({ prevLocation }) => {
  const checkForScript = () => {
    if (typeof window.inc !== "undefined") {
      window.inc("send_pageview_meta");
      // second param is ignore referer which we do if there is a previous pageview
      // this is becouse naviagting via gatsby, no page refresh happens so document.referrer persists
      window.inc("run", !!prevLocation);
    } else {
      // Script not loaded yet, check again after a short delay
      setTimeout(checkForScript, 100);
    }
  };

  // Start checking for incendium script
  checkForScript();
};
