import { Table } from 'antd';
const ColTable=(props:any) => {
  const { columns, data, rowSelection } = props;
  return (
    <Table
      columns={columns}
      dataSource={data}
      size='large'
      rowSelection={rowSelection}
      className='w-4/5 '
    />
  );
};
export default ColTable;

