import { url, getUsers } from "./users";
import mockAxios from "jest-mock-axios";

afterEach(() => {
  mockAxios.reset();
});

describe("getUsers", () => {
  test("calls axios get with the corrrect params", () => {
    getUsers();
    expect(mockAxios.get).toHaveBeenCalledWith(url);
  });
});
