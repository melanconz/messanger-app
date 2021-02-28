import React, { ReactElement, useState, useCallback, useEffect } from "react";
import styled from "styled-components";
import { getUsers } from "../../../axios/users/users";
import UserListItem from "../UserListItem/UserList";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  width: 200px;
  height: 200px;
`;

const Title = styled.div`
  font-size: large;
  padding: 10px;
`;

export const UserSelection = (): ReactElement => {
  const [users, setUsers] = useState<any>([]);
  const fetchData = useCallback(async () => {
    const usersResponse = await getUsers();
    setUsers(usersResponse);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <Wrap>
      <Title>Choose a user</Title>
      {users?.map((user: any) => (
        <UserListItem user={user} />
      ))}
    </Wrap>
  );
};

export default UserSelection;
