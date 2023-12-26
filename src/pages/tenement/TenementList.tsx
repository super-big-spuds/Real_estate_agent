import Table from "../../components/Table";
import { Button } from "antd";
import { useNavigate } from "react-router-dom";
import useTenementList from "../../hooks/useTenementList";
import FilterModule from "../../components/FilterModule";
import { useState } from "react";

export const TenementList = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Tenement/Add");
  };
  const [Popout, setPopout] = useState(false);
  const handlePopout = () => {
    setPopout(!Popout);
  };

  const { data, columns, onRow, isError, isLoading } = useTenementList();

  return (
    <div className="flex flex-col items-center w-4/5 m-10 ">
      <div className="inline-flex items-center mb-10 justify-evenly w-96">
        <p className="text-4xl ">房屋列表</p>
        <Button type="primary" onClick={handleClick} className="bg-blue-600 ">
          新增
        </Button>
        <Button type="primary" onClick={handlePopout} className="bg-blue-600 ">
          篩選
        </Button>
      </div>
      {isLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <p>error...</p>
      ) : (
        <Table data={data} columns={columns} onRow={onRow} />
      )}
      {Popout && <FilterModule handlePopout={handlePopout} />}
    </div>
  );
};
export default TenementList;
