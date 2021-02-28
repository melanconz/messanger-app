import React, { ReactElement } from "react";
import styled from "styled-components";
import UserSelection from "./UserSelection/UserSelection";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Home = (): ReactElement => {
  return (
    <Wrap>
      <UserSelection />
    </Wrap>
  );
};

export default Home;
