
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};


export const truncate = (str, limit = 100) => {
  if (!str || str.length <= limit) return str;
  return str.slice(0, limit) + "...";
};