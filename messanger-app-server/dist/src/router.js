"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("@koa/router"));
const user_1 = require("./users/user");
const router = new router_1.default();
router.get("/users", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const users = user_1.getUsers();
    ctx.response.status = 200;
    ctx.body = users;
    yield next();
}));
router.get("/users/:id", (ctx, next) => __awaiter(void 0, void 0, void 0, function* () {
    const user = user_1.getUserById(ctx.params.id);
    ctx.response.status = 200;
    ctx.body = user;
    yield next();
}));
exports.default = router;
