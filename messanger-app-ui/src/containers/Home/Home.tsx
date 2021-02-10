import React, { ReactElement, useState, useCallback, useEffect } from "react";
// import styled from "styled-components/macro";
import { getUsers } from "../../axios/users";

// const Wrap = styled.div``;

export const Home = (): ReactElement => {
  const [users, setUsers] = useState<any>([]);
  const fetchData = useCallback(async () => {
    const usersResponse = await getUsers();
    setUsers(usersResponse);
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div>
      <div>Pick User</div>
      {users?.map((user: any) => (
        <div>`user.firstName user.lastName`</div>
      ))}
    </div>
  );
};

export default Home;
