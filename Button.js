"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background: ", ";\n    border: none;\n    border-radius: 3px;\n    box-shadow: ", ";\n    color: white;\n    padding: 8px 32px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Button = _styledComponents.default.button(_templateObject(), function (_ref) {
  var bgColor = _ref.bgColor;
  return bgColor === 'red' ? 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)' : 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)';
}, function (_ref2) {
  var bgColor = _ref2.bgColor;
  return bgColor === 'red' ? '0 3px 5px 2px rgba(255, 105, 135, .3)' : '0 3px 5px 2px rgba(33, 203, 243, .3)';
});

var _default = Button;
exports.default = _default;