
import type { ColumnsType } from 'antd/es/table';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import getColumnSearchProps from '../components/getColumnSearchProps';
type DataType = {
  key: React.Key;
  name: string;
  houseid: string;
  type: string;
  amount: string;
  id: string;
}
type ColumnTypes = {
  title: string;
  dataIndex: string;
  key: string;
  width?: string;
  type: string;
  amount: string;
}
const useCollist = () => {
  const [data, setData] = useState<DataType[]>([
    {
      key: '1',
      name: '代收1',
      type: '代收',
      houseid: '1',
      amount: '1000',
      id: '1',
    },
    {
      key: '2',
      name: '代付1',
      houseid: '2',
      type: '代付',
      amount: '2000',
      id: '2',
    },
    {
      key: '3',
      name: '代收2',
      houseid: '3',
      type: '代收',
      amount: '3000',
      id: '3',
    },
    {
      key: '4',
      name: '代付2',
      houseid: '4',
      type: '代付',
      amount: '4000',
      id: '4',
    },
  ]);
  type ColumnsType = {
    title: string;
    dataIndex: string;
    key?: string;
    width?: string;
    type?: string;
    amount?: string;
    filters?: any;
    onFilter?: any;
    sorter?: any;
  }

  type columnsarray = ColumnsType[];


  const columns:columnsarray = [
    {
      title: '編號',
      dataIndex: 'id',
    },
    {
      title: '房屋編號',
      dataIndex: 'houseid',
      key: 'houseid',
      width: '30%',
      ...getColumnSearchProps('houseid'),
    },
    {
      title: '費用名稱',
      dataIndex: 'name'
    },
    {
      title: '費用類型',
      dataIndex: 'type',
      filters: [
        {
          text: '代收',
          value: '代收',
        },
        {
          text: '代付',
          value: '代付',
        },
      ],
      onFilter: (value:string, record:any) => record.type.includes(value as string),
    },
    {
      title: '費用金額',
      dataIndex: 'amount',
      sorter: (a:string, b:string) => parseInt(a) - parseInt(b),

    }
  ];

  const getListdata = async () => {
    const response = await fetch('http://localhost:5173/api/colelist');
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const data = await response.json();
    setData(data.data);
  }
  useEffect(() => {
    getListdata();
  }, []);
  const navigate = useNavigate();
  const onRow = (record: any) => {
    return {
      onClick: () => {
        navigate(`/Collection/Edit/${record.id}`)
      },
    };
  };
  return {
    data,
    columns,
    onRow
  };
}

export default useCollist;