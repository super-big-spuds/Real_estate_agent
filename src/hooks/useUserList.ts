import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getColumnSearchProps from "../components/getColumnSearchProps";
import { useGetUserList } from "./useAPI";
import type { User } from "../type";

const useCollectionList = () => {
  const [data, setData] = useState<User[]>([
    {
      key: "1",
      id: "1",
      name: "翁先生",
      email: "user@gmail.com",
      isactive: "是",
    },
    {
      key: "2",
      id: "2",
      name: "李先生",
      email: "user2@gmail.com",
      isactive: "是",
    },
    {
      key: "3",
      id: "3",
      name: "張先生",
      email: "user3@gmail.com",
      isactive: "是",
    },
    {
      key: "4",
      id: "4",
      name: "陳先生",
      email: "user4@gmail.com",
      isactive: "否",
    },
  ]);
  type ColumnsType = {
    title: string;
    dataIndex: string;
    key?: string;
    width?: string;
    type?: string;
    amount?: string;
    filters?: {
      text: string;
      value: string;
    }[];
    onFilter?: (value: string, record: User) => boolean;
    sorter?: (a: User, b: User) => number;
  };

  const columns: ColumnsType[] = [
    {
      title: "編號",
      dataIndex: "id",
    },
    {
      title: "使用者名稱",
      dataIndex: "name",
      ...getColumnSearchProps("name"),
    },
    {
      title: "使用者信箱",
      dataIndex: "email",
    },
    {
      title: "是否啟用",
      dataIndex: "isactive",
      filters: [
        {
          text: "是",
          value: "是",
        },
        {
          text: "否",
          value: "否",
        },
      ],
      onFilter: (value, record) => record.isactive.indexOf(value) === 0,
    },
  ];

  const { isLoading, isError, dataUser } = useGetUserList();
  useEffect(() => {
    if (dataUser) {
      setData(dataUser);
    }
  }, [dataUser]);

  const navigate = useNavigate();
  const onRow = (record: User) => {
    return {
      onClick: () => {
        navigate(`/User/${record.id}`);
      },
    };
  };
  return {
    data,
    columns,
    onRow,
    isLoading,
    isError,
  };
};

export default useCollectionList;
