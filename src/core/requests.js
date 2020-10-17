import { baseURL } from "./constants";

const endpoints = {
  userInfo: "user-info/",
  loginUser: "login-user/",
};

const errors = {
  unauthorized: new Error("Unauthorized"),
};

const convertSQLAccount = (sqlAccount) => {
  const birthdate = new Date(sqlAccount.birthdate);
  birthdate.setDate(birthdate.getDate() + 1);
  return { ...sqlAccount, birthdate };
};

export const LoginUser = async (credentials) => {
  const header = {
    "Content-Type": "application/json",
  };

  const tokenResponse = await fetch(`${baseURL}${endpoints.loginUser}`, {
    method: "POST",
    body: JSON.stringify(credentials),
    headers: header,
  });

  return await tokenResponse.json();
};

export const GetUserInfo = async (token) => {
  const headers = {
    Authorization: `Token ${token}`,
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.userInfo}`, {
      headers: headers,
    });
    if (dataResponse.status === 401) {
      throw errors.unauthorized;
    }
    const dataResponseJson = await dataResponse.json();
    if (dataResponseJson.status === "success") {
      return convertSQLAccount(dataResponseJson.account);
    }
  } catch (e) {
    throw e;
  }
};
