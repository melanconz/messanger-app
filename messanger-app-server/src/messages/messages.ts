import { v4 as uuidv4 } from "uuid";

interface MessageBody {
  userId: string;
  message: string;
  timestamp: Date;
}
interface Message extends MessageBody {
  id: string;
}

const messagesData: Message[] = [];

export const getMessages = () => {
  return messagesData;
};

export const postMessage = (body: MessageBody) => {
  const messageData: Message = {
    id: uuidv4(),
    ...body,
  };
  messagesData.push(messageData);
};
