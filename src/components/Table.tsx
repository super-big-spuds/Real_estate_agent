import React from 'react';
import { Table } from 'antd';
import { Link } from 'react-router-dom'; // React Router中的Link
import type { ColumnsType} from 'antd/es/table';
import type { TableRowSelection } from 'antd/es/table/interface';
import { useNavigate } from 'react-router-dom';
interface DataType {
  key: React.Key;
  name: string;
  type: string;
  amount: string;
  id: string;
}
const columns: ColumnsType<DataType> = [
  {
    title: '編號',
    dataIndex: 'id',
  },
  {
    title: '費用名稱',
    dataIndex: 'name',
    render: (text, record) => <Link to={`/edit/${record.id}`}>{text}</Link>,
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
  }
];
const data = [
  {
    key: '1',
    id: '1',
    name: 'John Brown',
    type: '代收',
    amount: '1000',
  },
  {
    key: '2',
    id: '2',
    name: 'Jim Green',
    type: '代收',
    amount: '2000',
  },
  {
    key: '3',
    id: '3',
    name: 'Joe Black',
    type: '代收',
    amount: '3000',
  },
  {
    key: '4',
    id: '4',
    name: 'Jim Red',
    type: '代收',
    amount: '4000',
  },
];
const App=() => {
  const navigate = useNavigate();
  const rowSelection: TableRowSelection<DataType> = {
    onSelect: (record:any) => {
      console.log('Selected row:', record);
      navigate(`/Collection/Edit/${record.id}`)
    },
  };
  return (
    <Table
      columns={columns}
      dataSource={data}
      size='large'
      rowSelection={rowSelection}
    />
  );
};
export default App;

