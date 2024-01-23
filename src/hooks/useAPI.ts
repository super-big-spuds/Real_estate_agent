import { useEffect, useState } from "react";
import type {
  Calender,
  Collection,
  FormData,
  NoticeData,
  User,
  TenementList,
  TenementSell,
  TenementDevelop,
  TenementRent,
  TenementMarket,
} from "../type";

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

const mutableFetch = <T>(
  url: string,
  method: string,
  token: string,
  body: T
) => {
  return fetch(`${APIBaseURL}/api${url}`, {
    method: method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(body),
  });
};

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
export function useGetCollectionList() {
  const token = "";
  const [datasa, setData] = useState<Collection[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    (async () => {
      if (token) return;
      try {
        const res = await getFetch("/collections", token);
        const newData = await res.json();
        setData(newData.data);
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

export function usePostCollectionAdd() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveColumn = async (formDatas: FormData) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch("/collections", "POST", token, formDatas);
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveNotice = async (notices: NoticeData[]) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        "/collection/notices",
        "POST",
        token,
        notices
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    handleSaveColumn,
    handleSaveNotice,
  };
}

export const useGetCollectionEdit = () => {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataEdit, setData] = useState<FormData>();

  const getCollectionEdit = async (id: string) => {
    try {
      const res = await getFetch(`/collection/${id}`, token);
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    getCollectionEdit,
    dataEdit,
  };
};
export function usePostCollectionEdit() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveColumn = async (formDatas: FormData) => {
    setIsLoading(true);

    try {
      const res = await mutableFetch(
        `/collection/${formDatas.collection_id}`,
        "PUT",
        token,
        formDatas
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveNotice = async (notices: NoticeData[]) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        "/collection/notices",
        "POST",
        token,
        notices
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeleteNoticeFetch = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        `/notices/${id}/collection`,
        "DELETE",
        token,
        id
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
      console.log(res);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleDeleteCollectionFetch = async (id: string) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(`/collection/${id}`, "DELETE", token, id);
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    handleSaveColumn,
    handleSaveNotice,
    handleDeleteNoticeFetch,
    handleDeleteCollectionFetch,
  };
}

export function useGetUserList() {
  const token = "";
  const [dataUser, setDataUser] = useState<User[]>();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const getUserList = async () => {
    try {
      const res = await getFetch("/users", token);
      const newData = await res.json();
      setDataUser(newData.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getUserList();
  }, []);

  return {
    isLoading,
    isError,
    dataUser,
  };
}

export function usePostUserAdd() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveUser = async (formDatas: User) => {
    setIsLoading(true);

    try {
      const res = await mutableFetch("/user", "POST", token, formDatas);
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    handleSaveUser,
  };
}

export function usePostUserEdit() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveUser = async (formDatas: User) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        `/user/${formDatas.user_id}`,
        "PUT",
        token,
        formDatas
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  const handleDeleteUserFetch = async (user_id: string) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        `/user/${user_id}`,
        "DELETE",
        token,
        user_id
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    handleSaveUser,
    handleDeleteUserFetch,
  };
}

export function useGetUserEdit() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataEdit, setData] = useState<User>();

  const getUserEdit = async (user_id: string) => {
    try {
      const res = await getFetch(`/user/${user_id}`, token);
      const data = await res.json();

      setData(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    getUserEdit,
    dataEdit,
  };
}

export function usePostCalender() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dataCalender, setDataCalender] = useState<Calender[]>([]);

  const handleGetCalender = async (formDatas: {
    year: number;
    month: number;
  }) => {
    setIsLoading(true);
    try {
      const res = await getFetch(
        `/calender/${formDatas.year}/${formDatas.month}`,
        token
      );
      const data = await res.json();
      setDataCalender(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleGetCalender,
    dataCalender,
  };
}

export function usePostCalenderCollection() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [dataCalender, setDataCalender] = useState<Calender[]>([]);

  const handleGetCalender = async (formDatas: {
    year: number;
    month: number;
  }) => {
    setIsLoading(true);
    try {
      const res = await getFetch(
        `/calender/collection/${formDatas.year}/${formDatas.month}`,
        token
      );
      const data = await res.json();
      setDataCalender(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleGetCalender,
    dataCalender,
  };
}

export function useDeleteNotice() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleDeleteNoticeApi = async (id: string, type: string) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        `/notices/${id}/${type}`,
        "DELETE",
        token,
        id
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleDeleteNoticeApi,
  };
}

export function useGetTenementList() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataTenement, setDataTenement] = useState<TenementList[]>([]);

  const handleGetTenement = async (
    query: { [s: string]: string } | ArrayLike<string> | undefined
  ) => {
    setIsLoading(true);
    // drop undefined
    const querys = Object.fromEntries(
      Object.entries(query || {}).filter(([, value]) => value !== undefined)
    );
    const queryString = Object.keys(querys)
      .map((key) => `${key}=${querys[key]}`)
      .join("&");
    try {
      const res = await getFetch(`/tenements?${queryString}`, token);
      const data = await res.json();
      setDataTenement(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    dataTenement,
    handleGetTenement,
  };
}

export function useGetTenementListSell() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataTenement, setDataTenement] = useState<TenementList[]>([]);

  const handleGetTenement = async (
    query: { [s: string]: string } | ArrayLike<string> | undefined
  ) => {
    setIsLoading(true);
    // drop undefined
    const querys = Object.fromEntries(
      Object.entries(query || {}).filter(([, value]) => value !== undefined)
    );
    const queryString = Object.keys(querys)
      .map((key) => `${key}=${querys[key]}`)
      .join("&");
    try {
      const res = await getFetch(`/tenements/sell?${queryString}`, token);
      const data = await res.json();
      setDataTenement(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    dataTenement,
    handleGetTenement,
  };
}

export function useGetTenementListRent() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataTenement, setDataTenement] = useState<TenementList[]>([]);

  const handleGetTenement = async (
    query: { [s: string]: string } | ArrayLike<string> | undefined
  ) => {
    setIsLoading(true);
    // drop undefined
    const querys = Object.fromEntries(
      Object.entries(query || {}).filter(([, value]) => value !== undefined)
    );
    const queryString = Object.keys(querys)
      .map((key) => `${key}=${querys[key]}`)
      .join("&");
    try {
      const res = await getFetch(`/tenements/rent?${queryString}`, token);
      const data = await res.json();
      setDataTenement(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    isError,
    dataTenement,
    handleGetTenement,
  };
}

export function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLogin, setIsLogin] = useState(false);

  const handleLogin = async (formDatas: {
    user_email: string;
    user_password: string;
  }) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch("/user/login", "POST", "", formDatas);
      const data = await res.json();
      if (data.token) {
        localStorage.setItem("token", data.token);
        setIsLogin(true);
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleLogin,
    isLogin,
  };
}

export function useGetSellEdit() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataEdit, setData] = useState<TenementSell>();

  const getSellEdit = async (id: string) => {
    try {
      const res = await getFetch(`/tenement/edit/sell/${id}`, token);
      const data = await res.json();
      console.log(data);

      setData(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    getSellEdit,
    dataEdit,
  };
}

export function usePostSellEdit() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveColumn = async (formDatas: TenementSell) => {
    setIsLoading(true);

    try {
      const res = await mutableFetch(
        `/tenement/edit/sell/${formDatas.tenement_id}`,
        "POST",
        token,
        formDatas
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleSaveColumn,
  };
}

export function useGetDevelopEdit() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataEdit, setData] = useState<TenementDevelop>();

  const getDevelopEdit = async (id: string) => {
    try {
      const res = await getFetch(`/tenement/edit/develop/${id}`, token);
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    getDevelopEdit,
    dataEdit,
  };
}

export function usePostDevelopEdit() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveColumn = async (formDatas: TenementDevelop) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        `/tenement/edit/develop/${formDatas.tenement_id}`,
        "POST",
        token,
        formDatas
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleSaveColumn,
  };
}
export function useGetRentEdit() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataEdit, setData] = useState<TenementRent>();

  const getRentEdit = async (id: string) => {
    try {
      const res = await getFetch(`/tenement/edit/rent/${id}`, token);
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    getRentEdit,
    dataEdit,
  };
}
export function usePostRentEdit() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveColumn = async (formDatas: TenementRent) => {
    setIsLoading(true);
    try {
      const res = await mutableFetch(
        `/tenement/edit/rent/${formDatas.tenement_address}`,
        "POST",
        token,
        formDatas
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleSaveColumn,
  };
}

export function useGetMarketEdit() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataEdit, setData] = useState<TenementMarket>();

  const getMarketEdit = async (id: string) => {
    try {
      const res = await getFetch(`/tenement/edit/market/${id}`, token);
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    getMarketEdit,
    dataEdit,
  };
}

export function usePostMarketEdit() {
  const token = useToken();
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleSaveColumn = async (formDatas: TenementMarket) => {
    setIsLoading(true);

    try {
      const res = await mutableFetch(
        `/tenement/edit/market/${formDatas.tenement_id}`,
        "POST",
        token,
        formDatas
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    handleSaveColumn,
  };
}

export function useGetNotice() {
  const token = "";
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [dataNotice, setData] = useState<NoticeData[]>([]);

  const getNotice = async (id: string, type: string) => {
    try {
      const res = await getFetch(`/notices/${id}/${type}`, token);
      const data = await res.json();
      setData(data.data);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    getNotice,
    dataNotice,
  };
}

export function usePostAddNotice() {
  const token = useToken();
  const [isDone, setIsDone] = useState(false);
  const [newNotices, setNotices] = useState<NoticeData[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handlePostAddNotice = async (type: string, notices: NoticeData[]) => {
    setIsLoading(true);
    setIsDone(false);

    try {
      const res = await mutableFetch(
        `/notices/${type}`,
        "POST",
        token,
        notices
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
      const data = await res.json();
      setNotices(data.data);
      setIsDone(true);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    isDone,
    handlePostAddNotice,
    newNotices,
  };
}

export function usePutNotice() {
  const token = useToken();
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handlePutNotice = async (type: string, notices: NoticeData[]) => {
    setIsLoading(true);
    setIsDone(false);

    try {
      const res = await mutableFetch(`/notices/${type}`, "PUT", token, notices);
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
      setIsDone(true);
      console.log(res);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    isDone,
    handlePutNotice,
  };
}

export function usePostAddTenement() {
  const token = useToken();
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handlePostAddTenement = async (
    type: string,
    tenement: TenementSell | TenementRent | TenementMarket | TenementDevelop
  ) => {
    setIsLoading(true);
    setIsDone(false);

    try {
      const res = await mutableFetch(
        `/tenement/add/${type}`,
        "POST",
        token,
        tenement
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
      setIsDone(true);
      console.log(res);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    isDone,
    handlePostAddTenement,
  };
}

export function useDeleteTenement() {
  const token = useToken();
  const [isDone, setIsDone] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const handleDeleteTenement = async (tenement_id: string) => {
    setIsLoading(true);
    setIsDone(false);

    try {
      const res = await mutableFetch(
        `/delete/tenement/${tenement_id}`,
        "DELETE",
        token,
        null
      );
      if (!res.ok) {
        throw new Error(res.statusText);
        alert("操作失敗");
      }
      setIsDone(true);
      console.log(res);
    } catch (error) {
      console.error(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  return {
    isLoading,
    isError,
    isDone,
    handleDeleteTenement,
  };
}
