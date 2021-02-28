import axios from "axios";

export const url = "http://localhost:8080/users";
export const getUsers = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (err) {
    console.error("Failed to get users", err);
  }
};

export const getUserById = async (id: string) => {
  try {
    const response = await axios.get(`${url}/${id}`);
    return response.data;
  } catch (err) {
    console.error(`Failed to get user by id: ${id}`, err);
  }
};
