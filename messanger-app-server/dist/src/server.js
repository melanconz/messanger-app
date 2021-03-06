"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const koa_1 = __importDefault(require("koa"));
const cors_1 = __importDefault(require("@koa/cors"));
const router_1 = __importDefault(require("./router"));
const http_1 = __importDefault(require("http"));
const app = new koa_1.default();
app.use(router_1.default.routes()).use(router_1.default.allowedMethods());
app.use(cors_1.default());
const server = http_1.default.createServer(app.callback());
const io = require("socket.io")(server);
io.on("connection", (socket) => {
    console.log("connected");
    socket.on("message", (message) => {
        console.log(message);
    });
});
app.listen(8080, () => {
    console.log("listening on *:8080");
});
