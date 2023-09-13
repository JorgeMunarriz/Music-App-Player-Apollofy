import { urlUser } from "../global";

export const userPost = async (user: {}, getToken: () => Promise<string>) => {

  try {
    const token = await getToken();
    const response = await fetch(`${urlUser}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(user),
    });
    if (response.ok) {
      const data = await response.json();
      return data;
    } else {
      console.error('Error updating user:', response.statusText);
    }
  } catch (error) {
    console.error('Error updating user:', error);
  }
};

export const UserPut = async (userUpdate: {}, userId: string, getToken: () => Promise<string> ) => {
  try {
    const token = await getToken();
    const response = await fetch(`${urlUser}/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(userUpdate),
    });
    if (!response.ok) {
      const errorMessage = `Error updating user: ${response.statusText}`;
      console.error(errorMessage);
      throw new Error(errorMessage);
    }
    const data = await response.json();
    return data;

  }catch (error) {
    console.error('Error updating user:', error);
    throw error;
  }
};
