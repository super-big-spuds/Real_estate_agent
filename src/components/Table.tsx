import { Table } from "antd";
const ColTable = (props: any) => {
  const { columns, data, onRow } = props;
  return (
    <Table
      columns={columns}
      dataSource={data}
      onRow={onRow}
      size="large"
      className="w-4/5 "
      rowClassName={"cursor-pointer"}
      // TODO: 這裡要加上分頁、排序、搜尋等功能串接後端API
      //onChange={(pagination, filter, sort) => {
      //  console.log(pagination, filter, sort);
      //  console.log("change");
      //}}
    />
  );
};
export default ColTable;
