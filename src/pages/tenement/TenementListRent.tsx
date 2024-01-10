import Table from "../../components/Table";
import { Breadcrumb, Button, Form, Input } from "antd";
import useTenementListRent from "../../hooks/useTenementListRent";
import FilterModule from "../../components/FilterModule";
import {  useState, useEffect } from "react";

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
  const [form] = Form.useForm();
  // 驗證 budget-max 不可小於 budget-
  const validateBudgetMax = async (_: any, value: any) => {
    const budgetMin = form.getFieldValue("budget-");
    if (value < budgetMin) {
      throw new Error("max 不可小於 min");
    }
  };

  // 驗證 floor-max 不可小於 floor-min
  const validateFloorMax = async (_: any, value: any) => {
    const floorMin = form.getFieldValue("floor-min");
    if (value < floorMin) {
      throw new Error("max 不可小於 min");
    }
  };

  useEffect(() => {
    form.setFields([
      {
        name: ["budget-max"],
        value: form.getFieldValue("budget-max"),
        errors: ["max 不可小於 min"],
      },
      {
        name: ["floor-max"],
        value: form.getFieldValue("floor-max"),
        errors: ["max 不可小於 min"],
      },
      {
        name:["rent-max"],
        value: form.getFieldValue("rent-max"),
        errors: ["max 不可小於 min"],
      }
    ]);
  }, [form.getFieldValue("budget-"), form.getFieldValue("floor-min"), form.getFieldValue("rent-min")]);


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
      {Popout && <FilterModule handlePopout={handlePopout} handleSelect={handleSelect}  form={form} validateBudgetMax={validateBudgetMax} validateFloorMax={validateFloorMax} type={"出租"}>
      
          <div className="inline-flex gap-6">
            <Form.Item
              name="rent-min"
              label="租金"
              rules={[{ message: "請輸入租金 min" }]}
            >
              <Input type="number" placeholder="mix" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item name="rent-max" rules={[{ message: "請輸入租金 max" }, { validator: validateBudgetMax }]}>
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 權狀坪數 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="floor-min"
              label="權狀坪數"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="floor-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateFloorMax },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 室內面積 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="floor-min"
              label="室內面積"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="floor-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateFloorMax },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 公設面積 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="floor-min"
              label="公設面積"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="floor-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateFloorMax },
              ]}
            >
              <Input type="number" placeholder="max" />
            </Form.Item>
          </div>
          {/* 管理費 */}
          <div className="inline-flex gap-6">
            <Form.Item
              name="floor-min"
              label="管理費"
              rules={[{ message: "請輸入樓層 min" }]}
            >
              <Input type="number" placeholder="min" />
            </Form.Item>
            <p className="mt-1">~</p>
            <Form.Item
              name="floor-max"
              rules={[
                { message: "請輸入樓層 max" },
                { validator: validateFloorMax },
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
