export const objectToQueryString = (obj) =>
  Object.keys(obj)
    .map((key) => `${key}=${obj[key]}`)
    .join('&');
