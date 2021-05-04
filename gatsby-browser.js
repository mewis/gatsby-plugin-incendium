"use strict";

exports.__esModule = true;
exports.onRouteUpdate = void 0;

var onRouteUpdate = function onRouteUpdate(_ref) {
  var prevLocation = _ref.prevLocation;

  // there does not seem to be a way in gatsby to run "before page change"
  if (prevLocation) {
    if (typeof window.inc == "function") {
      window.inc("send_pageview_meta");
    }

    if (typeof window.inc == "function") {
      window.inc("run");
    }
  }
};

exports.onRouteUpdate = onRouteUpdate;