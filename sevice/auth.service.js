import http from "@/api/index";
import { saveAccessToken } from "@/helper/auth.helper";

export const login = async (data) => {
  try {
    const response = await http.post("/login", data);
    if (response.status === 200) {
      saveAccessToken(response.data.access_token);
    }
    return response;
  } catch (error) {
    console.log(error);
  }
};