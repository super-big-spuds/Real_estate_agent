import { Form, Input, Button, Radio } from "antd";
import { useEffect } from "react";

const HouseInformationForm = (props: any) => {
  const { handlePopout } = props;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
    handlePopout();
  };

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
    ]);
  }, [form.getFieldValue("budget-"), form.getFieldValue("floor-min")]);

  return (
    <div
      className="fixed top-0 bottom-0 left-0 right-0 z-50 flex justify-center bg-black bg-opacity-50"
      onClick={handlePopout}
    >
      <Form
        form={form}
        name="house_information"
        onFinish={onFinish}
        className="w-1/2 p-10 mt-20 bg-white rounded-md h-3/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between px-10 mb-8">
          <p className="text-3xl font-bold">房屋資訊</p>
          <p className="text-xl cursor-pointer" onClick={handlePopout}>
            X
          </p>
        </div>
        <Form.Item name="source" label="房號" className="w-48 ">
          <Input />
        </Form.Item>
        <Form.Item name="caseType" label="案件型態">
          <Radio.Group>
            <Radio value="出租">出租</Radio>
            <Radio value="出售">出售</Radio>
            <Radio value="開發追蹤">開發追蹤</Radio>
            <Radio value="行銷追蹤">行銷追蹤</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="caseStatus" label="案件狀態">
          <Radio.Group>
            <Radio value="過戶完成下架">過戶完成下架</Radio>
            <Radio value="已開發">已開發</Radio>
            <Radio value="已成交">已成交</Radio>
            <Radio value="已退租下架">已退租下架</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="orientation" label="面相">
          <Radio.Group>
            <Radio value="海景">海景</Radio>
            <Radio value="中庭">中庭</Radio>
            <Radio value="三多路">三多路</Radio>
            <Radio value="自強路">自強路</Radio>
            <Radio value="市景風洞">市景風洞</Radio>
            <Radio value="海景風洞">海景風洞</Radio>
          </Radio.Group>
        </Form.Item>
        <Form.Item name="houseType" label="房型">
          <Radio.Group>
            <Radio value="面海">面海</Radio>
            <Radio value="辦公室">辦公室</Radio>
            <Radio value="店面">店面</Radio>
          </Radio.Group>
        </Form.Item>
        <div className="inline-flex gap-6">
          <Form.Item
            name="budget-min"
            label="資金"
            rules={[{ message: "請輸入資金 min" }]}
          >
            <Input type="number" placeholder="mix" />
          </Form.Item>
          <p className="mt-1">~</p>
          <Form.Item
            name="budget-max"
            rules={[
              { message: "請輸入資金 max" },
              { validator: validateBudgetMax },
            ]}
          >
            <Input type="number" placeholder="max" />
          </Form.Item>
        </div>
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
        <Form.Item>
          <Button type="primary" htmlType="submit" className="bg-blue-600">
            搜尋
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HouseInformationForm;

//房號: string input
// 案件型態: string (出租/出售/開發追蹤/行銷追蹤) radio
// 案件狀態: string (過戶完成下架/已開發/已成交/已退租下架) radio
// 面相: string (海景/中庭/三多路/自強路/市景風洞/海景風洞) radio
// 房型: string (面海/辦公室/店面) radio
// 資金: number (預算) input
//樓層: number (樓層) input
