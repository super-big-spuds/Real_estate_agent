import { Table } from 'antd';
const ColTable=(props:any) => {
  const { columns, data, onRow } = props;
  return (
    <Table
      columns={columns}
      dataSource={data}
      onRow={onRow}
      size='large'
      className='w-4/5 '
      rowClassName={"cursor-pointer"}
    />
  );
};
export default ColTable;

