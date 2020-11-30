import { baseURL } from "./constants";

const endpoints = {
  userInfo: "user-info/",
  loginUser: "login-user/",
  createUser: "create-user/",
  getBook: "get-books/",
  createMedia: "create-media/",
  payFines: "pay-fines/"
};

const errors = {
  unauthorized: new Error("Unauthorized"),
  notexist: Error("Not Exsit"),
};

export const convertSQLAccount = (sqlAccount) => {
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

export const CreateUser = async (user) => {
  const tokenHeader = {
    "Content-Type": "application/json",
  };

  const tokenResponse = await fetch(`${baseURL}${endpoints.createUser}`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: tokenHeader,
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

export const GetBookInfo = async (token) => {
  // const headers = {
  //   Authorization: `Token ${token}`,
  // };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.getBook}`, {});
    // if (dataResponse.status === 401) {
    //   throw errors.unauthorized;
    // }
    const dataResponseJson = await dataResponse.json();
    // if (dataResponseJson.status === "success") {
    //   return convertSQLAccount(dataResponseJson.account);
    // }
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};

export const CreateMedia = async (token, mediaData) => {
  const tokenHeader = {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.createMedia}`, {
      method: "POST",
      body: JSON.stringify(mediaData),
      headers: tokenHeader,
    });
    // if (dataResponse.status === 401) {
    //   throw errors.unauthorized;
    // }
    const dataResponseJson = await dataResponse.json();

    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};

export const PayFines = async (token, username) => {
  const tokenHeader = {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.payFines}`, {
      method: "POST",
      body: JSON.stringify({ token, username }),
      headers: tokenHeader,
    });
    const dataResponseJson = await dataResponse.json();
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};
