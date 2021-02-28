import React, { ReactElement } from "react";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 80vh;
  align-items: center;
  padding: 10px;
  border: 1px solid black;
  border-radius: 5px;
  background-color: lightgrey;
`;

export const ChatView = (): ReactElement => {
  // const [user, setUser] = useState<User>();
  // const { userId } = useParams<{ userId: string }>();
  // const fetchData = useCallback(async () => {
  //   const userResponse = await getMessages();
  //   console.log(userResponse);
  //   setUser(userResponse);
  // }, [userId, setUser]);

  // useEffect(() => {
  //   fetchData();
  // }, [fetchData]);
  return <Wrap></Wrap>;
};

export default ChatView;
