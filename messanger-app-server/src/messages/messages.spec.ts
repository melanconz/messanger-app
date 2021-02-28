import { getUsers } from "./messages";
import fixtureUsers from "./users.fixtures";

test("returns hardcoded user data", () => {
  const users = getUsers();
  expect(users).toEqual(fixtureUsers);
});
