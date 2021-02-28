import React, { ReactElement } from "react";
import { User } from "../../../global.types";
import { Button } from "../../../components/Button/Button.style";
import { useHistory } from "react-router-dom";

interface UserListItemProps {
  user: User;
}

export const UserListItem = ({ user }: UserListItemProps): ReactElement => {
  const history = useHistory();
  const handleSelect = () => [history.push(`chat/${user.id}`)];
  return (
    <Button height="50px" onClick={() => handleSelect()} width="150px">
      {user.firstName} {user.lastName}
    </Button>
  );
};

export default UserListItem;
