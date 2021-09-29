export const img = (path) => {
    return path.indexOf('http') > -1 ? path : process.env.REACT_APP_BASE_IMAGE + path;
};
