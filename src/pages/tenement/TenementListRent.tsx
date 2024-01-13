import Table from "../../components/Table";
import { Breadcrumb, Button, Form, Input } from "antd";
import useTenementListRent from "../../hooks/useTenementListRent";
import FilterModule from "../../components/FilterModule";
import {  useState } from "react";
import { RuleObject } from 'rc-field-form/lib/interface';

export const TenementListRent = () => {
  const [Popout, setPopout] = useState(false);
  const handlePopout = () => {
    setPopout(!Popout);
  };
  const [breadcrumbItems, setBreadcrumbItems] = useState<{ [x: string]: unknown; }[]>([
    { title: "全部房屋", value: "房屋列表" },
  ]);

   const switchTitletoChinese = (title:string) => {
    switch (title) {
      case "tenement_address":
        return "地址";
      case "tenement_product_type":
        return "產品類別";
      case "tenement_face":
        return "面向";
      case "rent_price_min":
        return "租金 min";
      case "rent_price_max":
        return "租金 max";
      case "total_rating_min":
        return "權狀坪數 min";
      case "total_rating_max":
        return "權狀坪數 max";
      case "inside_rating_min":
        return "室內面積 min";
      case "inside_rating_max":
        return "室內面積 max";
      case "public_building_min":
        return "公設面積 min";
      case "public_building_max":
        return "公設面積 max";
      case "management_fee_min":
        return "管理費 min";
      case "management_fee_max":
        return "管理費 max";
      case "tenement_status":
        return "物件狀態";
      case "floor_min":
        return "樓層 min";
      case "floor_max":
        return "樓層 max";

    }
  }
  type item = {
    title: string;
    value: string;
  };

  const handleSelect = (data:[]) => {
    console.log("Received values of form: ", data);
    const filterData = Object.fromEntries(Object.entries(data).filter(([_, v]) => v !== undefined && v !== ""));
    const filterDataTitle = Object.entries(filterData).map(([k, v]) => ({ title: k, value: v }));
    filterDataTitle.forEach((item:item) => {
      const newTitle = switchTitletoChinese(item.title);
      if (newTitle !== undefined) {
        item.title = newTitle;
      }
    });
    
    setBreadcrumbItems(filterDataTitle);
  }
  const handleReset = () => {
    setBreadcrumbItems([{ title: "全部房屋", value: "房屋列表" }]);
    form.resetFields();
  }
  

  const { data, columns, onRow, isError, isLoading } = useTenementListRent();
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
        <p className="text-4xl ">出租列表</p>
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
      {Popout && <FilterModule handlePopout={handlePopout} handleSelect={handleSelect}  form={form} validateMax={validateMax} type={"出租"}>
      
          <div className="inline-flex gap-6">
            <Form.Item
              name="rent_price_min"
              label="租金"
              rules={[{ message: "請輸入租金 min" }]}
            >
              <Input type="number" placeholder="mix" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item name="rent_price_max" rules={[{ message: "請輸入租金 max" }, { validator: validateMax("rent_price_min", "rent_price_max") }]}>
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 權狀坪數 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="total_rating_min"
              label="權狀坪數"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="total_rating_max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("total_rating_min", "total_rating_max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 室內面積 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="inside_rating_min"
              label="室內面積"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="inside_rating_max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("inside_rating_min", "inside_rating_max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 公設面積 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="public_building_min"
              label="公設面積"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="public_building_max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("public_building_min", "public_building_max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 管理費 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="management_fee_min"
              label="管理費"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="management_fee_max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateMax("management_fee_min", "management_fee_max") },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          
        </FilterModule>}

    </div>
  );
};
export default TenementListRent;
