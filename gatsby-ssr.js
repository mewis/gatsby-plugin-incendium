"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;
  setPostBodyComponents([/*#__PURE__*/_react.default.createElement("script", {
    dangerouslySetInnerHTML: {
      __html: ['var head = document.head || document.getElementsByTagName("head")[0];', 'var script = document.createElement("script");', "script.setAttribute(\"src\", \"" + pluginOptions.url + "?no_initial=true" + (pluginOptions.nonInteractive ? "&non_interactive" : "") + "\");", "head.appendChild(script);"].join(process.env.NODE_ENV === "production" ? "" : "\n")
    }
  })]);
};

exports.onRenderBody = onRenderBody;