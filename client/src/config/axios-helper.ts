import axios from "axios";

export const getAuthToken = () => {
  const tokenCookie = document.cookie
    .split(";")
    .find((cookie) => cookie.trim().startsWith("token="));
  if (tokenCookie) {
    return tokenCookie.split("=")[1];
  }
  return null;
};

export const setJwtToken = (token: string) => {
  if (!token) {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  } else {
    document.cookie = `token=${token}; expires=${new Date(
      Date.now() + 7 * 24 * 60 * 60 * 1000
    ).toUTCString()}; path=/`;
  }
};

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const request = (method: string, url: string, data?: unknown) => {
  let headers = {};
  if (getAuthToken() !== null) {
    headers = { Authorization: `Bearer ${getAuthToken()}` };
  }
  return axios({
    method: method,
    url: url,
    headers: headers,
    data: data,
  });
};

export const persistentLogin = () => {
  if (!getAuthToken()) throw new Error("No Auth token");

  return request("get", "/auth/jwtLogin");
};
