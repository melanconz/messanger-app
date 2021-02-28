export interface MessageBody {
  userId: string;
  message: string;
  timestamp: Date;
}

export interface Message extends MessageBody {
  id: string;
}

export interface User {
  id: number;
  firstName: string;
  lastName: string;
}
