"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _default = incConversion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(target) {
    var conversion, key;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            if (!(!window.FIREFLY || !window.FIREFLY.conversion_configs)) {
              _context.next = 2;
              break;
            }

            return _context.abrupt("return", null);

          case 2:
            conversion = window.FIREFLY.conversion_configs.find(function (c) {
              return c.target === target;
            });

            if (conversion) {
              _context.next = 5;
              break;
            }

            return _context.abrupt("return");

          case 5:
            window.inc("add_conversion", conversion.key);
            _context.next = 8;
            return window.inc("go");

          case 8:
            key = _context.sent;
            return _context.abrupt("return", key);

          case 10:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function incConversion(_x) {
    return _ref.apply(this, arguments);
  };
}();

exports.default = _default;