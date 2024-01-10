import Table from "../../components/Table";
import { Breadcrumb, Button } from "antd";
import { useNavigate } from "react-router-dom";
import useTenementListRent from "../../hooks/useTenementListRent";
import FilterModule from "../../components/FilterModule";
import {  useState } from "react";

export const TenementListRent = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/Tenement/Add");
  };
  const [Popout, setPopout] = useState(false);
  const handlePopout = () => {
    setPopout(!Popout);
  };
  const [breadcrumbItems, setBreadcrumbItems] = useState<{ [x: string]: unknown; }[]>([
    { title: "全部房屋", value: "房屋列表" },
  ]);

   const switchTitletoChinese = (title:string) => {
    switch (title) {
      case "tenement_no":
        return "地址";
      case "product_type":
        return "產品類型";
      case "tenement_type":
        return "物件類型";
      case "tenement_face":
        return "面向";
      case "tenement_status":
        return "物件狀態";
      case "budget-min":
        return "售價 min";
      case "budget-max":
        return "售價 max";
      case "rent-min":
        return "租金 min";
      case "rent-max":
        return "租金 max";

    }
  }

  const handleSelect = (data:any) => {
    console.log("Received values of form: ", data);

    const filterData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== undefined));
    const filterDataTitle = Object.entries(filterData).map(([k, v]) => ({ title: k, value: v }));
    filterDataTitle.forEach((item:any) => {
      item.title = switchTitletoChinese(item.title);
    });
    setBreadcrumbItems(filterDataTitle);
  }
  const handleReset = () => {
    setBreadcrumbItems([{ title: "全部房屋", value: "房屋列表" }]);
  }
  

  const { data, columns, onRow, isError, isLoading } = useTenementListRent();

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
        <Button type="primary" className="bg-blue-600 " onClick={handleReset}>
          重置
        </Button>
      </div>
      {/* breadcrumb */}
      <span>篩選條件</span><Breadcrumb className="mb-5" items={breadcrumbItems} />
  
      {isLoading ? (
        <p>loading...</p>
      ) : isError ? (
        <p>error...</p>
      ) : (
        <Table data={data} columns={columns} onRow={onRow} />
      )}
      {Popout && <FilterModule handlePopout={handlePopout} handleSelect={handleSelect} 
      >
       

        </FilterModule>}

    </div>
  );
};
export default TenementListRent;
