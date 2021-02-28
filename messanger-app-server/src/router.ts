import Router from "@koa/router";
import { getUserById, getUsers } from "./users/user";
import { getMessages, postMessage } from "./messages/messages";

const router = new Router();

router.get("/users", async (ctx, next) => {
  const users = getUsers();

  ctx.response.status = 200;
  ctx.body = users;
  await next();
});

router.get("/users/:id", async (ctx, next) => {
  const user = getUserById(ctx.params.id);

  ctx.response.status = 200;
  ctx.body = user;
  await next();
});

router.get("/messages", async (ctx, next) => {
  const message = getMessages();

  ctx.response.status = 200;
  ctx.body = message;
  await next();
});

router.post("/messages", async (ctx, next) => {
  const user = postMessage(ctx.body);

  ctx.response.status = 200;
  await next();
});

export default router;
