"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _taggedTemplateLiteral2 = _interopRequireDefault(require("@babel/runtime/helpers/taggedTemplateLiteral"));

var _apolloServerExpress = require("apollo-server-express");

var _graphqlUpload = require("graphql-upload");

var _templateObject;

var _default = (0, _apolloServerExpress.gql)(_templateObject || (_templateObject = (0, _taggedTemplateLiteral2["default"])(["\n  scalar Upload\n\n  type EditProfileResult {\n    ok: Boolean!\n    error: String\n  }\n  type Mutation {\n    editProfile(\n      username: String\n      email: String\n      name: String\n      location: String\n      password: String\n      avatarUrl: Upload\n      githubUsername: String\n    ): EditProfileResult!\n  }\n"])));

exports["default"] = _default;