import fixtureUsers from "./users.fixtures";

export const getUsers = () => {
  return fixtureUsers;
};

export const getUserById = (id) => {
  return fixtureUsers.find((user) => user.id === parseInt(id));
};
