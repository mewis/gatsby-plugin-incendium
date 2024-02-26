"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.onRenderBody = void 0;

var _taggedTemplateLiteralLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteralLoose"));

var _react = _interopRequireDefault(require("react"));

var _commonTags = require("common-tags");

var _templateObject, _templateObject2, _templateObject3;

var generateIncendiumScript = function generateIncendiumScript(pluginOptions, namespace) {
  return (0, _commonTags.stripIndent)(_templateObject || (_templateObject = (0, _taggedTemplateLiteralLoose2.default)(["\n(function(w,d,s){\n  var f=d.getElementsByTagName(s)[0];\n  j=d.createElement(s);\n  j.async=true;\n  j.src='", "?no_initial=true", "", "", "';\n  f.parentNode.insertBefore(j,f);\n})(window,document,'script');"])), pluginOptions.url, pluginOptions.cookieless ? "&cookieless" : "", pluginOptions.debug ? "&debug" : "", namespace ? "&namespace=" + namespace : "");
};

var onRenderBody = function onRenderBody(_ref, pluginOptions) {
  var setHeadComponents = _ref.setHeadComponents;
  var inlineScripts = [];

  if (pluginOptions.namespaced && Object.keys(pluginOptions.namespaced).length > 0) {
    Object.keys(pluginOptions.namespaced).forEach(function (namespace) {
      var key = "incendium=" + namespace;
      var option = pluginOptions.namespaced[namespace];
      inlineScripts.push( /*#__PURE__*/_react.default.createElement("script", {
        key: key,
        dangerouslySetInnerHTML: {
          __html: (0, _commonTags.oneLine)(_templateObject2 || (_templateObject2 = (0, _taggedTemplateLiteralLoose2.default)(["\n              ", ""])), generateIncendiumScript(option, namespace))
        }
      }));
    });
  } else {
    inlineScripts.push( /*#__PURE__*/_react.default.createElement("script", {
      key: "incendium",
      dangerouslySetInnerHTML: {
        __html: (0, _commonTags.oneLine)(_templateObject3 || (_templateObject3 = (0, _taggedTemplateLiteralLoose2.default)(["\n          ", ""])), generateIncendiumScript(pluginOptions, pluginOptions.namespace))
      }
    }));
  }

  setHeadComponents(inlineScripts);
};

exports.onRenderBody = onRenderBody;