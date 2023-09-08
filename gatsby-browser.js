"use strict";

exports.__esModule = true;
exports.onRouteUpdate = void 0;

var onRouteUpdate = function onRouteUpdate() {
  var checkForScript = function checkForScript() {
    if (typeof window.inc !== "undefined") {
      window.inc("send_pageview_meta");
      window.inc("run", false);
    } else {
      // Script not loaded yet, check again after a short delay
      setTimeout(checkForScript, 100);
    }
  }; // Start checking for incendium script


  checkForScript();
};

exports.onRouteUpdate = onRouteUpdate;