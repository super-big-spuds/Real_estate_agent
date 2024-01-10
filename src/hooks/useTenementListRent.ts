import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import getColumnSearchProps from "../components/getColumnSearchProps";
import { useGetTenementListRent } from "./useAPI";
import type { TenementList } from "../type";

const useTenementListRent = () => {
  const [data, setData] = useState<TenementList[]>([
    {
      tenement_no: 54321,
      tenement_face: "海景",
      tenement_status: "未成交",
      tenement_type: "出售",
      tenement_style: "辦公室",
      management_fee_bottom: 100,
      management_floor_bottom: 7,
      rent: 100,
      Total_rating: 100,
      inside_rating: 100,
      public_buliding: 100,
      tenement_floor: 100,
    },
    {
      tenement_no: 54322,
      tenement_face: "中庭",
      tenement_status: "已成交",
      tenement_type: "出租",
      tenement_style: "店面",
      management_fee_bottom: 120,
      management_floor_bottom: 11,
      rent: 120,
      Total_rating: 120,
      inside_rating: 120,
      public_buliding: 120,
      tenement_floor: 120,
    },
    {
      tenement_no: 54323,
      tenement_face: "三多路",
      tenement_status: "已退租下架",
      tenement_type: "開發追蹤",
      tenement_style: "套房",
      management_fee_bottom: 150,
      management_floor_bottom: 3,
      rent: 150,
      Total_rating: 150,
      inside_rating: 150,
      public_buliding: 150,
      tenement_floor: 150,
    },
    {
      tenement_no: 54323,
      tenement_face: "三多路",
      tenement_status: "過戶完成下架",
      tenement_type: "行銷追蹤",
      tenement_style: "套房",
      management_fee_bottom: 150,
      management_floor_bottom: 3,
      rent: 150,
      Total_rating: 150,
      inside_rating: 150,
      public_buliding: 150,
      tenement_floor: 150,
    }
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
      dataIndex: "rent",
      key: "rent",
      width: "10%",
      sorter: (a, b) => (a.rent || 0) - (b.rent || 0),
    },
    {
      title: "權狀坪數",
      dataIndex: "Total_rating",
      key: "Total_rating",
      width: "10%",
      sorter: (a, b) => (a.Total_rating || 0) - (b.Total_rating || 0),
    },
    {
      title: "室內面積",
      dataIndex: "inside_rating",
      key: "inside_rating",
      width: "10%",
      sorter: (a, b) => (a.inside_rating || 0) - (b.inside_rating || 0),
    },
    {
      title: "公設面積",
      dataIndex: "public_buliding",
      key: "public_buliding",
      width: "10%",
      sorter: (a, b) => (a.public_buliding || 0) - (b.public_buliding || 0),
    },
    {
      title: "總樓層",
      dataIndex: "tenement_floor",
      key: "tenement_floor",
      width: "10%",
      sorter: (a, b) => (a.tenement_floor || 0) - (b.tenement_floor || 0),
    },
  ];

  const { isLoading, isError, dataTenement } = useGetTenementListRent();
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
          rent: item.rent,
          Total_rating: item.Total_rating,
          inside_rating: item.inside_rating,
          public_buliding: item.public_buliding,
          tenement_floor: item.tenement_floor,
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
