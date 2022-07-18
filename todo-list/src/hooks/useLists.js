import axios from "axios";
import { useQuery } from "react-query";

const fetchLists = () => {
  return axios.get("http://localhost:3006/lists");
};

export const useLists = () => {
  return useQuery("lists", fetchLists, {
    staleTime: 30000,
    cacheTime: 20000,
  });
};
