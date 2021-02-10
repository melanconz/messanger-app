import Router from "@koa/router";

const router = new Router();

router.get("/users", async (ctx, next) => {
  const users = [
    {
      id: 1,
      firstName: "User",
      lastName: "One",
    },
    {
      id: 1,
      firstName: "User",
      lastName: "One",
    },
  ];

  ctx.response.status = 200;
  ctx.body = users;
  await next();
});

export default router;
