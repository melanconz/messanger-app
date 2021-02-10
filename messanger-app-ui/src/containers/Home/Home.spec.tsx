import { render, screen } from "../../test-utils";
import Home from "./Home";
import * as users from "../../axios/users";

jest.mock("../../axios/users");

test("renders all components", () => {
  render(<Home />);
  const UsersDiv = screen.getByTestId("users-div");
  expect(UsersDiv).toBeDefined();
});
