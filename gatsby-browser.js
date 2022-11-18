"use strict";

exports.__esModule = true;
exports.onRouteUpdate = void 0;

var onRouteUpdate = function onRouteUpdate(_ref) {
  var prevLocation = _ref.prevLocation;

  // there does not seem to be a way in gatsby to run "before page change"
  if (prevLocation) {
    var t = 16;

    if (typeof window.inc == "function") {
      if ("requestAnimationFrame" in window) {
        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            window.inc("send_pageview_meta");
            setTimeout(function () {
              return window.inc("run", true);
            }, t * 2);
          });
        });
      } else {
        // Delay by 32ms to simulate 2 requestOnAnimationFrame calls
        setTimeout(function () {
          window.inc("send_pageview_meta");
        }, t * 2);
        setTimeout(function () {
          window.inc("run", true);
        }, t * 4);
      }
    }
  }
};

exports.onRouteUpdate = onRouteUpdate;