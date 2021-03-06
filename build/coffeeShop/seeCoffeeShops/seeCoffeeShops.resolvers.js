"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _client = _interopRequireDefault(require("../../client"));

var _default = {
  Query: {
    seeCoffeeShops: function seeCoffeeShops(_, _ref) {
      var offset = _ref.offset;
      return _client["default"].coffeeShop.findMany({
        take: 2,
        skip: offset
      });
    }
  }
};
exports["default"] = _default;