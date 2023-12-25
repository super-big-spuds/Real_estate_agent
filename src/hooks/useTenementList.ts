import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getColumnSearchProps from "../components/getColumnSearchProps";
import { useGetTenementList } from "./useAPI";
import type { TenementList } from "../type";

const useTenementList = () => {
  const [data, setData] = useState<TenementList[]>([
    {
      tenement_no: 54321,
      tenement_face: "a",
      tenement_status: "a",
      tenement_type: "a",
      tenement_style: "a",
      management_fee_bottom: 100,
      management_floor_bottom: 7,
    },
    {
      tenement_no: 54322,
      tenement_face: "b",
      tenement_status: "b",
      tenement_type: "b",
      tenement_style: "b",
      management_fee_bottom: 120,
      management_floor_bottom: 11,
    },
    {
      tenement_no: 54323,
      tenement_face: "c",
      tenement_status: "c",
      tenement_type: "c",
      tenement_style: "c",
      management_fee_bottom: 150,
      management_floor_bottom: 3,
    },
    {
      tenement_no: 54323,
      tenement_face: "d",
      tenement_status: "d",
      tenement_type: "d",
      tenement_style: "d",
      management_fee_bottom: 150,
      management_floor_bottom: 3,
    },
  ]);
  type ColumnsType = {
    title: string;
    dataIndex: string;
    key?: string;
    width?: string;
    collection_type?: string;
    price?: string;
    filters?: {
      text: string;
      value: string;
    }[];
    onFilter?: (value: string, record: TenementList) => boolean;
    sorter?: (a: TenementList, b: TenementList) => number;
  };

  const columns: ColumnsType[] = [
    {
      title: "編號",
      dataIndex: "tenement_no",
      key: "tenement_no",
      width: "10%",
      ...getColumnSearchProps("tenement_no"),
    },
    {
      title: "面向",
      dataIndex: "tenement_face",
      key: "tenement_face",
      width: "10%",
      // 海景 中庭 三多路 自強路 市景風洞 海景風洞
      filters: [
        {
          text: "海景",
          value: "海景",
        },
        {
          text: "中庭",
          value: "中庭",
        },
        {
          text: "三多路",
          value: "三多路",
        },
        {
          text: "自強路",
          value: "自強路",
        },
        {
          text: "市景風洞",
          value: "市景風洞",
        },
        {
          text: "海景風洞",
          value: "海景風洞",
        },
      ],
      onFilter: (value, record) => record.tenement_face.includes(value),
    },
    {
      title: "狀態",
      dataIndex: "tenement_status",
      key: "tenement_status",
      width: "10%",
      // 未成交、已成交、已退租下架、過戶完成下架
      filters: [
        {
          text: "未成交",
          value: "未成交",
        },
        {
          text: "已成交",
          value: "已成交",
        },
        {
          text: "已退租下架",
          value: "已退租下架",
        },
        {
          text: "過戶完成下架",
          value: "過戶完成下架",
        },
      ],
      onFilter: (value, record) => record.tenement_status.includes(value),
    },
    {
      title: "類型",
      dataIndex: "tenement_type",
      key: "tenement_type",
      width: "10%",
      filters: [
        {
          text: "可租",
          value: "可租",
        },
        {
          text: "可售",
          value: "可售",
        },
        {
          text: "開發追蹤",
          value: "開發追蹤",
        },
        {
          text: "行銷追蹤",
          value: "行銷追蹤",
        },
      ],
      onFilter: (value, record) => record.tenement_type.includes(value),
    },
    {
      title: "型式",
      dataIndex: "tenement_style",
      key: "tenement_style",
      width: "10%",
      filters: [
        {
          text: "面海",
          value: "面海",
        },
        {
          text: "辦公室",
          value: "辦公室",
        },
        {
          text: "店面",
          value: "店面",
        },
      ],
      onFilter: (value, record) => record.tenement_style.includes(value),
    },
    {
      title: "管理費底價",
      dataIndex: "management_fee_bottom",
      key: "management_fee_bottom",
      width: "10%",
      sorter: (a, b) => a.management_fee_bottom - b.management_fee_bottom,
    },
    {
      title: "管理樓層",
      dataIndex: "management_floor_bottom",
      key: "management_floor_bottom",
      width: "10%",
      sorter: (a, b) => a.management_floor_bottom - b.management_floor_bottom,
    },
  ];

  const { isLoading, isError, dataTenement } = useGetTenementList();
  useEffect(() => {
    if (dataTenement) {
      const data = dataTenement.map((item) => {
        return {
          tenement_no: item.tenement_no,
          tenement_face: item.tenement_face,
          tenement_status: item.tenement_status,
          tenement_type: item.tenement_type,
          tenement_style: item.tenement_style,
          management_fee_bottom: item.management_fee_bottom,
          management_floor_bottom: item.management_floor_bottom,
          key: item.tenement_no,
        };
      });
      setData(data);
    }
  }, [dataTenement]);

  const navigate = useNavigate();
  const onRow = (record: TenementList) => {
    return {
      onClick: () => {
        navigate(`/Tenement/${record.tenement_no}`);
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

export default useTenementList;
