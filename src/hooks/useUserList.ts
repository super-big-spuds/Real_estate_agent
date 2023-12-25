import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGetUserList } from "./useAPI";
import type { User } from "../type";

const useCollectionList = () => {
  const [data, setData] = useState<User[]>([
    {
      id: "1",
      user_name: "翁先生",
      user_email: "user@gmail.com",
      status: "是",
    },
    {
      id: "2",
      user_name: "李先生",
      user_email: "user2@gmail.com",
      status: "是",
    },
    {
      id: "3",
      user_name: "張先生",
      user_email: "user3@gmail.com",
      status: "是",
    },
    {
      id: "4",
      user_name: "陳先生",
      user_email: "user4@gmail.com",
      status: "否",
    },
  ]);
  type ColumnsType = {
    title: string;
    dataIndex: string;
    width?: string;
    type?: string;
    price?: string;
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
      dataIndex: "user_name",
    },
    {
      title: "使用者信箱",
      dataIndex: "user_email",
    },
    {
      title: "是否啟用",
      dataIndex: "status",
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
      onFilter: (value, record) => record.status.indexOf(value) === 0,
    },
  ];

  const { isLoading, isError, dataUser } = useGetUserList();
  useEffect(() => {
    if (dataUser) {
      //const newdatauser =  datauser map key = id
      const newdatauser = dataUser.map((user) => {
        return {
          id: user.id,
          user_name: user.user_name,
          user_email: user.user_email,
          status: user.status,
          key: user.id,
        };
      });

      setData(newdatauser);
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
