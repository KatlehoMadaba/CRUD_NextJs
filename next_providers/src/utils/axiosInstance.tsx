import axios from "axios";

export const getAxiosInstace = () =>
  axios.create({
    // https://api.jsonbin.io/v3/b/67c8c259acd3cb34a8f5a0d0`
    // baseURL: `${import.meta.env.Backend_API_URL}`,
    headers: {
      "Content-Type": "$2a$10$oEW1jrfwvebny1NG23sNu.AdElEtKjkIkD4/4.RqSnJKFU/BGGYxu",//put master key
    },
  });