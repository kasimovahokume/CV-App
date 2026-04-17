/**
 * Mətnin ilk hərfini böyük edir
 */
export const capitalize = (str) => {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Çox uzun olan mətnləri müəyyən nöqtədən kəsir və sonuna "..." əlavə edir
 */
export const truncate = (str, limit = 100) => {
  if (!str || str.length <= limit) return str;
  return str.slice(0, limit) + "...";
};