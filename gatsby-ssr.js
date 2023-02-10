"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _react = _interopRequireDefault(require("react"));

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setPostBodyComponents = _ref.setPostBodyComponents;

  if (pluginOptions.namespaced && Object.keys(pluginOptions.namespaced).length > 0) {
    setPostBodyComponents(Object.keys(pluginOptions.namespaced).map(function (namespace) {
      var option = pluginOptions.namespaced[namespace];
      return /*#__PURE__*/_react.default.createElement("script", {
        dangerouslySetInnerHTML: {
          __html: ['var head = document.head || document.getElementsByTagName("head")[0];', 'var script = document.createElement("script");', "script.setAttribute(\"src\", \"" + option.url + "?no_initial=true" + (option.nonInteractive ? "&non_interactive" : "") + (namespace !== "" ? "&namespace=" + namespace : "") + "\");", "head.appendChild(script);"].join(process.env.NODE_ENV === "production" ? "" : "\n")
        }
      });
    }));
  } else {
    setPostBodyComponents([/*#__PURE__*/_react.default.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: ['var head = document.head || document.getElementsByTagName("head")[0];', 'var script = document.createElement("script");', "script.setAttribute(\"src\", \"" + pluginOptions.url + "?no_initial=true" + (pluginOptions.nonInteractive ? "&non_interactive" : "") + (pluginOptions.namespace ? "&namespace=" + pluginOptions.namespace : "") + "\");", "head.appendChild(script);"].join(process.env.NODE_ENV === "production" ? "" : "\n")
      }
    })]);
  }
};

exports.onRenderBody = onRenderBody;