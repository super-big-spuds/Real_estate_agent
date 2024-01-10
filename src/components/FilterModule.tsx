import { Form, Input, Button, Radio } from "antd";
import { useEffect } from "react";

const FilterModule = (props: any) => {
  const { handlePopout, handleSelect, form, validateFloorMax, children, type } = props;
  

  const onFinish = (values: any) => {
    handleSelect(values);
    handlePopout();
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
  }, [form.getFieldValue("budget-max"), form.getFieldValue("floor-min"), form.getFieldValue("rent-min")]);

  
  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center bg-black bg-opacity-50"
      onClick={handlePopout}
    >
      <Form
        form={form}
        name="house_information"
        onFinish={onFinish}
        className="w-2/3 p-10 my-5 bg-white rounded-md h-5/6 overflow-y-auto "
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between px-10 mb-10">
          <p className="text-3xl font-bold">{type}篩選</p>
          <p className="text-xl cursor-pointer" onClick={handlePopout}>
            X
          </p>
        </div>
        <div className=" flex flex-col px-16 mb-10 h-5/6 ">
          <Form.Item name="tenement_no" label="地址" className="w-48 ">
            <Input />
          </Form.Item>
          <Form.Item name="product_type" label="產品類別">
            <Radio.Group>
              <Radio value="套房">套房</Radio>
              <Radio value="辦公室">辦公室</Radio>
              <Radio value="店面">店面</Radio>
              <Radio value="其他">其他</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="tenement_status" label="物件狀態">
            <Radio.Group>
              <Radio value="未成交">未成交</Radio>
              <Radio value="已成交">已成交</Radio>
              <Radio value="已成交下架">已成交下架</Radio>
              <Radio value="過戶完成下架">過戶完成下架</Radio>
            </Radio.Group>
          </Form.Item>
          <Form.Item name="tenement_face" label="面向">
            <Radio.Group>
              <Radio value="海景">海景</Radio>
              <Radio value="中庭">中庭</Radio>
              <Radio value="三多路">三多路</Radio>
              <Radio value="自強路">自強路</Radio>
              <Radio value="市景風洞">市景風洞</Radio>
              <Radio value="海景風洞">海景風洞</Radio>
              <Radio value="其他">其他</Radio>
            </Radio.Group>
          </Form.Item>
          
         
          {children}

          <div className="flex gap-6">
            <Form.Item
              name="floor-min"
              label="樓層"
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
          <Form.Item className=" mb-10">
            <Button type="primary" htmlType="submit" className="bg-blue-600">
              搜尋
            </Button>
          </Form.Item>
          <Form.Item className=" mb-10">
            
          </Form.Item>
        </div>
      </Form>
    </div>
  );
};

export default FilterModule;
