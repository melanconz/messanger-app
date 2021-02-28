"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = exports.getUsers = void 0;
const users_fixtures_1 = __importDefault(require("./users.fixtures"));
const getUsers = () => {
    return users_fixtures_1.default;
};
exports.getUsers = getUsers;
const getUserById = (id) => {
    const user = users_fixtures_1.default.find((user) => {
        console.log(user);
        console.log(id);
        console.log(user.id === id);
        return user.id === parseInt(id);
    });
    console.log(`Fetching user ${user}`);
    return user;
};
exports.getUserById = getUserById;
