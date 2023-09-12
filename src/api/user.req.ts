const {VITE_API_URL} = import.meta.env

 const USER_URL = VITE_API_URL + 'user';

export const userPost = async (user: {}, getToken: () => Promise<string> ) => {
const URL_USER = USER_URL
try {
    const token = await getToken();
    const response = await fetch(URL_USER, {
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