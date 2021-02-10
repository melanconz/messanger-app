import Koa from "koa";
import cors from "@koa/cors";
import router from "./router";
import http from "http";
import * as socketio from "socket.io";

const app = new Koa();

app.use(router.routes()).use(router.allowedMethods());
app.use(cors());

const server = http.createServer(app.callback());
const io = require("socket.io")(server);

io.on("connection", (socket) => {
  console.log("connected");
  socket.on("message", (message: any) => {
    console.log(message);
  });
});

app.listen(8080, () => {
  console.log("listening on *:8080");
});
