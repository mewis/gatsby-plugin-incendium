"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.incConversion = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var incConversion = /*#__PURE__*/function () {
  var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(target) {
    var key;
    return _regenerator.default.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            window.inc("add_conversion", target);
            _context.next = 3;
            return window.inc("go");

          case 3:
            key = _context.sent;
            return _context.abrupt("return", key);

          case 5:
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

exports.incConversion = incConversion;