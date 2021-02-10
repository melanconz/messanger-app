"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUsers = void 0;
const users_fixtures_1 = __importDefault(require("./users.fixtures"));
const getUsers = () => {
    return users_fixtures_1.default;
};
exports.getUsers = getUsers;
