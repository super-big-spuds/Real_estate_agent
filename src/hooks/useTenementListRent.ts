import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getColumnSearchProps from "../components/getColumnSearchProps";
import { useGetTenementList } from "./useAPI";
import type { TenementList } from "../type";

const useTenementListRent = () => {
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
      title: "地址",
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
        {
          text:"其他",
          value:"其他"
        }
      ],
      onFilter: (value, record) => record.tenement_face.includes(value),
    },
    {
      title: "產品類別",
      dataIndex: "tenement_style",
      key: "tenement_style",
      width: "10%",
      filters: [
        {
          text: "套房",
          value: "套房",
        },
        {
          text: "辦公室",
          value: "辦公室",
        },
        {
          text: "店面",
          value: "店面",
        },
        {
          text: "其他",
          value: "其他",
        },
      ],
      onFilter: (value, record) => record.tenement_style.includes(value),
    },
    {
      title: "租金",
      dataIndex: "management_floor_bottom",
      key: "management_floor_bottom",
      width: "10%",
      sorter: (a, b) => a.management_floor_bottom - b.management_floor_bottom,
    },
    {
      title: "權狀坪數",
      dataIndex: "management_floor_bottom",
      key: "management_floor_bottom",
      width: "10%",
      sorter: (a, b) => a.management_floor_bottom - b.management_floor_bottom,
    },
    {
      title: "室內面積",
      dataIndex: "management_floor_bottom",
      key: "management_floor_bottom",
      width: "10%",
      sorter: (a, b) => a.management_floor_bottom - b.management_floor_bottom,
    },
    {
      title: "公設面積",
      dataIndex: "management_floor_bottom",
      key: "management_floor_bottom",
      width: "10%",
      sorter: (a, b) => a.management_floor_bottom - b.management_floor_bottom,
    },
    {
      title: "管理費",
      dataIndex: "management_fee_bottom",
      key: "management_fee_bottom",
      width: "10%",
      sorter: (a, b) => a.management_fee_bottom - b.management_fee_bottom,
    },
    {
      title:"樓層",
      dataIndex:"management_floor_bottom",
      key:"management_floor_bottom",
      width: "10%",
      sorter: (a,b)=> a.management_fee_bottom - b.management_fee_bottom,
    }
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
  const switchType = (type: string) => {
    switch (type) {
      case "出租":
        return "rent";
      case "出售":
        return "sell";
      case "開發追蹤":
        return "develop";
      case "行銷追蹤":
        return "market";
      default:
        return "rent";
    }
  };
  const onRow = (record: TenementList) => {
    return {
      onClick: () => {
        navigate(
          `/Tenement/${record.tenement_no}/${switchType(record.tenement_type)}`
        );
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

export default useTenementListRent;
