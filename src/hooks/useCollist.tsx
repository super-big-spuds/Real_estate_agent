import React from 'react';
import { Link } from 'react-router-dom'; // React Router中的Link
import type { ColumnsType} from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
interface DataType {
  key: React.Key;
  name: string;
  type: string;
  amount: string;
  id: string;
}
const useCollist=() => {
const columns: ColumnsType<DataType> = [
  {
    title: '編號',
    dataIndex: 'id',
  },
  {
    title: '費用名稱',
    dataIndex: 'name',
    render: (text, record) => <Link to={`/Collection/edit/${record.id}`}>{text}</Link>,
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
    onFilter: (value, record) => record.type.includes(value as string),
  },
  {
    title: '費用金額',
    dataIndex: 'amount',
    sorter: (a, b) => parseInt(a.amount) - parseInt(b.amount), 

  }
];
const [data, setData] = useState<DataType[]>([
  {
    key: '1',
    name: '代收1',
    type: '代收',
    amount: '1000',
    id: '1',
  },
  {
    key: '2',
    name: '代付1',
    type: '代付',
    amount: '2000',
    id: '2',
  },
  {
    key: '3',
    name: '代收2',
    type: '代收',
    amount: '3000',
    id: '3',
  },
  {
    key: '4',
    name: '代付2',
    type: '代付',
    amount: '4000',
    id: '4',
  },
]);

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
const rowSelection: TableRowSelection<DataType> = {
  onSelect: (record:any) => {
    navigate(`/Collection/Edit/${record.id}`)
  },
};
  return {
    data,
    columns,
    rowSelection
  };
}

export default useCollist;