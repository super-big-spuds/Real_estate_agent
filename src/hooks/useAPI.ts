import { useEffect, useState } from "react";

const APIBaseURL = process.env.BASE_URL;

const getFetch = (url: string, token: string) => {
  return fetch(`${APIBaseURL}/api${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

// const multateFetch = <T>(
//   url: string,
//   method: string,
//   token: string,
//   body: T
// ) => {
//   return fetch(`${APIBaseURL}/api${url}`, {
//     method: method,
//     headers: {
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify(body),
//   });
// };

export function useToken() {
  const [token, setToken] = useState<string>("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setToken(token);
    }
  }, []);

  return token;
}

type Collection = {
  data(data: any): unknown;
  name: string;
  description: string;
};
export function useGetCollectionList() {
  const token = useToken();
  const [datasa, setData] = useState<Collection>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getFetch("/collection/list", token);
        const newData = await res.json();
        setData(newData);
      } catch (error) {
        console.error(error);
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    })();
  }, []);

  return {
    isLoading,
    isError,
    datasa,
  };
}
