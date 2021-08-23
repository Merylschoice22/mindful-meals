export default (url, options = {}) => {
  const { headers = {} } = options;

  const accessToken = localStorage.getItem("accessToken");
  return fetch(url, {
    ...options,
    headers: {
      ...headers,
      "x-access-token": accessToken,
    },
  });
};
