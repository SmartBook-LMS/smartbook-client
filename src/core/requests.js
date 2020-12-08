import { baseURL } from "./constants";

const endpoints = {
  userInfo: "user-info/",
  loginUser: "login-user/",
  createUser: "create-user/",
  book: "get-books/",
  music: "get-music/",
  movie: "get-movies/",
  createMedia: "create-media/",
  fines: "fines/",
  checkouts: "checkouts/",
  returns: "return-items/",
  getCustomers: "get-customers/",
  getCheckouts: "get-checkoutList/",
  dashboard: "dashboard/",
};

const errors = {
  unauthorized: new Error("Unauthorized"),
  notexist: Error("Not Exsit"),
};

const convertSQLDate = (date) => {
  date = new Date(date);
  date.setDate(date.getDate() + 1);
  return date;
};

export const convertSQLAccount = (sqlAccount) => {
  return { ...sqlAccount, birthdate: convertSQLDate(sqlAccount.birthdate) };
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

export const GetBooks = async (tags) => {
  const headers = {
    // Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.book}`, {
      method: "POST",
      headers,
      body: JSON.stringify(tags),
    });
    const dataResponseJson = await dataResponse.json();
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};
export const GetMusic = async (tags) => {
  const headers = {
    // Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.music}`, {
      method: "POST",
      headers,
      body: JSON.stringify(tags),
    });
    const dataResponseJson = await dataResponse.json();
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};

export const GetMovies = async (tags) => {
  const headers = {
    // Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.movie}`, {
      method: "POST",
      headers,
      body: JSON.stringify(tags),
    });
    const dataResponseJson = await dataResponse.json();
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
    const dataResponseJson = await dataResponse.json();

    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};

export const GetFines = async (token) => {
  const tokenHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.fines}`, {
      method: "GET",
      headers: tokenHeader,
    });
    const dataResponseJson = await dataResponse.json();
    return dataResponseJson.fines.map((item) => ({
      ...item,
      returnDate: convertSQLDate(item.returnDate),
      checkoutDate: convertSQLDate(item.checkoutDate),
    }));
  } catch (e) {
    throw e;
  }
};

export const PayFines = async (token) => {
  const tokenHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.fines}`, {
      method: "POST",
      headers: tokenHeader,
    });
    const dataResponseJson = await dataResponse.json();
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};

export const GetCheckouts = async (token) => {
  const tokenHeader = {
    Authorization: `Token ${token}`,
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.checkouts}`, {
      method: "GET",
      headers: tokenHeader,
    });
    const dataResponseJson = await dataResponse.json();
    dataResponseJson.checkouts = dataResponseJson.checkouts.map((item) => ({
      ...item,
      returnDate: convertSQLDate(item.returnDate),
    }));
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};
export const PostCheckouts = async (token, media) => {
  const tokenHeader = {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.checkouts}`, {
      method: "POST",
      body: JSON.stringify({ media }),
      headers: tokenHeader,
    });
    const dataResponseJson = await dataResponse.json();

    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};
export const ReturnItems = async (token, items) => {
  const tokenHeader = {
    Authorization: `Token ${token}`,
    "Content-Type": "application/json",
  };

  const returns = {
    copies: [...new Set(items.map(({ copyID }) => copyID))],
    checkouts: [...new Set(items.map(({ checkoutID }) => checkoutID))],
  };

  console.log(returns);
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.returns}`, {
      method: "POST",
      body: JSON.stringify(returns),
      headers: tokenHeader,
    });
    const dataResponseJson = await dataResponse.json();
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};

export const GetCustomers = async (token) => {
  // const headers = {
  //   Authorization: `Token ${token}`,
  // };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.getCustomers}`, {});
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

export const GetDashboard = async (token) => {
  const headers = {
    Authorization: `Token ${token}`,
  };
  try {
    const dataResponse = await fetch(`${baseURL}${endpoints.dashboard}`, {
      method: "GET",
      headers: headers,
    });
    const dataResponseJson = await dataResponse.json();
    dataResponseJson.info.recentReturns = dataResponseJson.info.recentReturns.map(
      (item) => ({ ...item, returnDate: convertSQLDate(item.returnDate) })
    );
    dataResponseJson.info.recentCheckouts = dataResponseJson.info.recentCheckouts.map(
      (item) => ({ ...item, checkoutDate: convertSQLDate(item.checkoutDate) })
    );
    // if (dataResponseJson.status === "success") {
    //   return convertSQLAccount(dataResponseJson.account);
    // }
    return dataResponseJson;
  } catch (e) {
    throw e;
  }
};
