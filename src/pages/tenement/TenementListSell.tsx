import Table from "../../components/Table";
import { Breadcrumb, Button, Form, Input } from "antd";
import useTenementListSell from "../../hooks/useTenementListSell";
import FilterModule from "../../components/FilterModule";
import {  useState } from "react";
import { RuleObject } from 'rc-field-form/lib/interface';


export const TenementListSell = () => {
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
        return "產品類別";
      case "tenement_type":
        return "物件類型";
      case "tenement_face":
        return "面向";
      case "selling_price-min":
        return "售價 min";
      case "selling_price-max":
        return "售價 max";
      case "Total_rating-min":
        return "權狀坪數 min";
      case "Total_rating-max":
        return "權狀坪數 max";
      case "inside_rating-min":
        return "室內面積 min";
      case "inside_rating-max":
        return "室內面積 max";
      case "public_buliding-min":
        return "公設面積 min";
      case "public_buliding-max":
        return "公設面積 max";
      case "management_fee-min":
        return "管理費 min";
      case "management_fee-max":
        return "管理費 max";
      case "tenement_status":
        return "物件狀態";
      case "floor-min":
        return "樓層 min";
      case "floor-max":
        return "樓層 max";

    }
  }

  const handleSelect = (data:[]) => {
    console.log("Received values of form: ", data);
    const filterData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== undefined && v !== ""));
    const filterDataTitle = Object.entries(filterData).map(([k, v]) => ({ title: k, value: v }));
    filterDataTitle.forEach((item:any) => {
      item.title = switchTitletoChinese(item.title);
    });
    
    setBreadcrumbItems(filterDataTitle);
  }
  const handleReset = () => {
    setBreadcrumbItems([{ title: "全部房屋", value: "房屋列表" }]);
    form.resetFields();
  }
  

  

  const { data, columns, onRow, isError, isLoading } = useTenementListSell();
  const [form] = Form.useForm();
  const validateMax = (minKey: string, maxKey: string) => {
    return async (_: RuleObject, value: string) => {
      const minValue = form.getFieldValue(minKey);
      if (parseInt(value) < parseInt(minValue)) {
        throw new Error(`${maxKey} 不可小於 ${minKey}`);
      }
    };
  };

  return (
    <div className="flex flex-col items-center w-4/5 m-10 ">
      <div className="inline-flex items-center mb-10 justify-evenly w-96">
        <p className="text-4xl ">出售列表</p>
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
      {Popout && <FilterModule  handlePopout={handlePopout} handleSelect={handleSelect} validateMax={validateMax} form={form} type={"出售"}>
       
      <div className="inline-flex gap-6">
            <Form.Item
              name="selling_price-min"
              label="售價"
              rules={[{ message: "請輸入售價 min" }]}
            >
              <Input type="number" placeholder="mix" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item name="selling_price-max" rules={[{ message: "請輸入售價 max" }, { validator: validateMax("selling_price-min", "selling_price-max") }]}>
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 權狀坪數 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="Total_rating-min"
              label="權狀坪數"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="Total_rating-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("Total_rating-min", "Total_rating-max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 室內面積 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="inside_rating-min"
              label="室內面積"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="inside_rating-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("inside_rating-min", "inside_rating-max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 公設面積 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="public_buliding-min"
              label="公設面積"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="public_buliding-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("public_buliding-min", "public_buliding-max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 管理費 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="management_fee-min"
              label="管理費"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="management_fee-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("management_fee-min", "management_fee-max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          
       
        </FilterModule>}
    </div>
  );
};
export default TenementListSell;
