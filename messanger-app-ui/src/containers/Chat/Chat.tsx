import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getUserById } from "../../axios/users/users";
import { User } from "../../global.types";
import ChatInputForm from "./ChatInputForm/ChatInputForm";
import ChatView from "./ChatView/ChatView";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  align-items: center;
  padding: 10px;
`;

export const Chat = (): ReactElement => {
  const [user, setUser] = useState<User>();
  const { userId } = useParams<{ userId: string }>();
  const fetchData = useCallback(async () => {
    const userResponse = await getUserById(userId);
    console.log(userResponse);
    setUser(userResponse);
  }, [userId, setUser]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <Wrap>
      <div>{`${user?.firstName} ${user?.lastName}'s Messages`}</div>
      <ChatView />
      <ChatInputForm />
    </Wrap>
  );
};

export default Chat;
