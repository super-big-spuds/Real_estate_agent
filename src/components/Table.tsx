import React from 'react';
import { Table } from 'antd';
import type { ColumnsType, TableProps } from 'antd/es/table';

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
    onFilter: (value, record) => record.name.includes(value as string),
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

const onChange: TableProps<DataType>['onChange'] = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App: React.FC = () => <Table columns={columns} dataSource={data} size='large' onChange={onChange} />;

export default App;