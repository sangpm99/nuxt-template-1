export const getDateNow = () => {
  const now = new Date();
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  return `${day} - ${month} - ${year}`;
};

export const getTimeNow = (format?: string): number => {
  if (format === "seconds") {
    return Math.floor(new Date().getTime() / 1000);
  }
  return new Date().getTime();
};

export const formatTimeStamp = (time: number): string => {
  const now = new Date(time);
  const day = now.getDate().toString().padStart(2, "0");
  const month = (now.getMonth() + 1).toString().padStart(2, "0");
  const year = now.getFullYear();
  return `${day} - ${month} - ${year}`;
};
