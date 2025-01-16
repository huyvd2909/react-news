import dayjs from "dayjs";
export const debounce = (func, delay) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
};


export const timeDiff = (date) => {
  const now = dayjs();
  const formatDate = dayjs(date);
  const diffInSec = now.diff(formatDate, "second");
  if (diffInSec < 60) {
    return `now`;
  } else if (diffInSec < 3600) {
    return `${Math.floor(diffInSec / 60)} minutes ago`;
  } else if (diffInSec < 86400) {
    return `${Math.floor(diffInSec / 3600)} hours ago`;
  } else if (diffInSec < 604800) {
    return `${Math.floor(diffInSec / 86400)} days ago`;
  } else if (diffInSec < 2592000) {
    return `${Math.floor(diffInSec / 604800)} weeks ago`;
  } else if (diffInSec < 31536000) {
    return `${Math.floor(diffInSec / 2592000)} months ago`;
  } else {
    return `${Math.floor(diffInSec / 31536000)} years ago`;
  }
}