import React, { ReactElement, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { postMessage } from "../../../axios/messages/messages";
import { Button } from "../../../components/Button/Button.style";

const Wrap = styled.div`
  display: flex;
  width: 70vw;
  justify-content: center;
  align-items: center;
`;
const Input = styled.input`
  height: 30px;
  width: 500px;
  margin: 10px;
`;

export const ChatInputForm = (): ReactElement => {
  const [message, setMessage] = useState("");
  const { userId } = useParams<{ userId: string }>();

  const handleSendMessage = () => {
    console.log(message);
    postMessage({
      userId,
      message,
      timestamp: new Date(),
    });
    setMessage("");
  };

  return (
    <Wrap>
      <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      <Button height="40px" onClick={() => handleSendMessage()} width="150px">
        Send Message
      </Button>
    </Wrap>
  );
};

export default ChatInputForm;
