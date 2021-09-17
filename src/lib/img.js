export const img = (path) => path.indexOf('http') > -1 ? path : process.env.REACT_APP_BASE_IMAGE + path;
