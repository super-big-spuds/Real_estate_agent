import { Button, Radio, Select } from "antd";
import Notice from "../Notice";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "../InputWithErrorMessage";
import RenterInfo from "./RenterInfo";
import Uploadfile from "./Uploadfile";
import SellerInfo from "./SellerInfo";
import { useState } from "react";

export default function TenementInfo(props: any) {
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/tenements");
  };
  const formData = {
    tenement_no: "",
    tenement_type: "可租",
    collection_name: "",
    price: "",
    payment: "",
    collection_remark: "",
    remittance_bank: "",
    remittance_account: "",
    notices: [],
  };
  const notices = [
    {
      id: "1",
      visitDate: "2023-01-01",
      record: "看房子",
      remindDate: "2023-02-01",
      remind: "提醒",
    },
    {
      id: "2",
      visitDate: "2023-01-01",
      record: "繳水電",
      remindDate: "2023-02-01",
      remind: "繳房租",
    },
  ];
  const {
    handleChange,
    handleNoticeChange,
    handleSave,
    handleReset,
    handleAddNotice,
    handleDeleteNotice,
    handleDeleteCollection,
    isLoading,
    isError,
  } = props;

  const [tenement_type, setTenement_type] = useState("可租");

  const handletypeChange = (e: any) => {
    setTenement_type(e.target.value);
  };

  const swtitchExtraInfo = (tenement_type: string) => {
    switch (tenement_type) {
      case "可租":
        return (
          <div>
            {/* 租金 */}
            <div className="inline-flex items-center whitespace-nowrap w-96">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>租金:</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
            </div>
            {/* 押金 */}
            <div className="inline-flex items-center whitespace-nowrap w-96">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>押金:</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
            </div>
          </div>
        );

      case "可售":
        return (
          <div>
            {/* 售價 */}
            <div className="inline-flex items-center whitespace-nowrap w-96">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp;&nbsp;
              </p>
              <p>售價:</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
            </div>
          </div>
        );
      case "開發追蹤":
        return (
          <div>
            {/* 售價 */}
            <div className="inline-flex items-center w-48 whitespace-nowrap">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; &nbsp;
              </p>
              <p>售價:</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
            </div>
            {/* 租金 */}
            <div className="inline-flex items-center w-48 whitespace-nowrap">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>租金:</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
            </div>
            {/* 押金 */}
            <div className="inline-flex items-center w-48 whitespace-nowrap">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              </p>
              <p>押金:</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
            </div>
          </div>
        );
      case "行銷追蹤":
        return (
          <div>
            {/* 要租要買 select  */}
            <div className="inline-flex items-center whitespace-nowrap w-96">
              <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
              <p>要租要買:</p>
              <Select defaultValue="租房" style={{ width: 120 }}>
                <Select.Option value="租房">租房</Select.Option>
                <Select.Option value="買房">買房</Select.Option>
              </Select>
            </div>
            {/* 預算 最大值 最小值 */}
            <div className="inline-flex items-center whitespace-nowrap w-96">
              <p>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                &nbsp; &nbsp;
              </p>
              <p>預算:</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
              <p>~</p>
              <InputWithErrorMessage
                value={formData.tenement_no}
                onChange={(e) => handleChange("tenement_no", e.target.value)}
                isError={formData.tenement_no.length <= 2}
                errorMessage={"至少兩個字"}
              />
            </div>
          </div>
        );
      default:
        return "";
    }
  };
  const switchTenementType = (tenement_type: string) => {
    switch (tenement_type) {
      case "可租":
        return <RenterInfo />;
      case "可售":
        return <SellerInfo />;
      case "開發追蹤":
        return "";
      case "行銷追蹤":
        return "";
      default:
        return "";
    }
  };

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex flex-col w-full h-full pb-12 pr-16 mt-12 mb-10 ml-20 bg-white shadow-2xl rounded-xl ">
        <button className="flex w-12 h-20 mt-10 ml-5" onClick={handleback}>
          {"< 返回"}
        </button>
        <div className="inline-flex flex-col mb-5 ml-8">
          <p className="text-4xl font-bold whitespace-normal">
            {tenement_type}資料
          </p>
        </div>
        {/* line */}
        <p className="mb-3 ml-5 border-b-2 border-gray-300"></p>
        {isLoading ? (
          <p>loading...</p>
        ) : isError ? (
          <p>error...</p>
        ) : (
          <div className="flex flex-row ">
            <div className="flex flex-col flex-wrap w-1/2 h-full gap-4 px-16 overflow-visible ">
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p>房號:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>

              {/* 面向 */}
              <div className="inline-flex flex-row items-center w-96 ">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp; &nbsp;
                </p>
                <p className=" whitespace-nowrap">面向:</p>
                <Radio.Group>
                  <Radio value="海景">海景</Radio>
                  <Radio value="中庭">中庭</Radio>
                  <Radio value="三多路">三多路</Radio>
                  <Radio value="自強路">自強路</Radio>
                  <Radio value="市景風洞">市景風洞</Radio>
                  <Radio value="海景風洞">海景風洞</Radio>
                </Radio.Group>
              </div>
              {/* 案件狀態 */}
              <div className="inline-flex flex-row items-center w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className=" whitespace-nowrap">案件狀態:</p>
                <Radio.Group>
                  <Radio value="未成交">未成交</Radio>
                  <Radio value="已成交">已成交</Radio>
                  <Radio value="已成交下架">已成交下架</Radio>
                  <Radio value="過戶完成下架">過戶完成下架</Radio>
                </Radio.Group>
              </div>
              {/* 案件型態 */}
              <div className="inline-flex items-center w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p className=" whitespace-nowrap">案件型態:</p>
                <Radio.Group onChange={handletypeChange} value={tenement_type}>
                  <Radio value="可租">可租</Radio>
                  <Radio value="可售">可售</Radio>
                  <Radio value="開發追蹤">開發追蹤</Radio>
                  <Radio value="行銷追蹤">行銷追蹤</Radio>
                </Radio.Group>
              </div>
              {/* 總坪數 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p>總坪數:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 主建物坪數 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;</p>
                <p>主建物坪數:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 附屬建物坪數 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>附屬建物坪數:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 公共設施坪數 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>公共設施坪數:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 管理費 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                <p>管理費:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {swtitchExtraInfo(tenement_type)}
            </div>
            <div className="flex flex-col w-1/2 h-full ">
              {/* 房屋照片 */}
              <div className="inline-flex flex-col mb-10 ">
                <p className="mt-2 mb-3 text-3xl font-bold whitespace-normal">
                  房屋照片
                </p>
                <Uploadfile />
              </div>
              <p className="mt-2 mb-3 text-3xl font-bold whitespace-normal">
                屋主資訊
              </p>
              {/* 屋主姓名 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>

                <p>屋主姓名:</p>
                <InputWithErrorMessage
                  value={formData.collection_name}
                  onChange={(e) =>
                    handleChange("collection_name", e.target.value)
                  }
                  isError={formData.collection_name.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 行動電話 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>行動電話:</p>
                <InputWithErrorMessage
                  value={formData.collection_name}
                  onChange={(e) =>
                    handleChange("collection_name", e.target.value)
                  }
                  isError={formData.collection_name.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 電話 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;
                </p>
                <p>電話:</p>
                <InputWithErrorMessage
                  value={formData.collection_name}
                  onChange={(e) =>
                    handleChange("collection_name", e.target.value)
                  }
                  isError={formData.collection_name.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* Line */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp;&nbsp; &nbsp;
                </p>
                <p>Line:</p>
                <InputWithErrorMessage
                  value={formData.collection_name}
                  onChange={(e) =>
                    handleChange("collection_name", e.target.value)
                  }
                  isError={formData.collection_name.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 屋主匯款資訊 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;</p>
                <p>屋主匯款資訊:</p>
                <InputWithErrorMessage
                  value={formData.collection_name}
                  onChange={(e) =>
                    handleChange("collection_name", e.target.value)
                  }
                  isError={formData.collection_name.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
            </div>
          </div>
        )}

        <div>{switchTenementType(tenement_type)}</div>
        <div className="flex flex-col p-5">
          <div className="inline-flex flex-row justify-between pl-10 mb-5 mr-5">
            <p className="text-4xl font-bold whitespace-normal">提醒設定</p>

            <Button
              type="primary"
              className="bg-blue-600 "
              onClick={handleAddNotice}
            >
              新增提醒
            </Button>
          </div>
          <p className="mb-3 ml-5 border-b-2 border-gray-300"></p>
          <div className="flex flex-col gap-5">
            {notices.map((notice: any, index: number) => (
              <Notice
                key={index}
                keya={index}
                notice={notice}
                handleNoticeChange={handleNoticeChange}
                handleDeleteNotice={handleDeleteNotice}
              />
            ))}
          </div>
        </div>
        <div className="flex justify-end gap-5 m-10 ">
          <Button className="bg-blue-600 " type="primary" onClick={handleSave}>
            儲存
          </Button>
          <Button type="default" onClick={() => handleReset()}>
            回復預設
          </Button>
          <Button onClick={() => handleDeleteCollection()} danger>
            刪除
          </Button>
        </div>
      </div>
    </div>
  );
}
