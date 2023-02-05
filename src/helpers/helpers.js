export const config = (token) => {
  return {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token.access_token}`,
    },
  };
};

export const headers = {
  headers: { "Content-Type": "application/json" },
};

export const formattedDates = () => {
  const options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  return new Date().toLocaleDateString("ko-KR", options);
};
