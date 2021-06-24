"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class HelloMessage extends _react.default.Component {
  render() {
    return /*#__PURE__*/_react.default.createElement("div", null, "Hello ", this.props.name);
  }

}

exports.default = HelloMessage;
console.log('hello');