import axios from "axios";
import { Message, MessageBody } from "../../global.types";

export const url = "http://localhost:8080/messages";

export const getMessages = async (): Promise<Message[] | undefined> => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Failed to get messages", err);
  }
};

export const postMessage = async (body: MessageBody) => {
  try {
    const response = await axios.post(`${url}`, body);
    return response.data;
  } catch (err) {
    console.error(`Failed to set message`, err);
  }
};
