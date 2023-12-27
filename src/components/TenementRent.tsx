import { Input, Select, Button, Radio } from "antd";
import Notice from "./Notice";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "./InputWithErrorMessage";

export default function CollectionMange(props: any) {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/collections");
  };
  const formData = {
    tenement_no: "",
    collection_type: "",
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
      notice_type: "",
      notice_date: "",
      notice_remark: "",
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

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex flex-col w-full h-full pt-12 pl-12 pr-16">
        <button className="flex w-12 h-20" onClick={handleback}>
          {"< 返回"}
        </button>
        <div className="inline-flex flex-col ml-5">
          <p className="text-4xl font-bold whitespace-normal">租房資訊</p>
        </div>
        {isLoading ? (
          <p>loading...</p>
        ) : isError ? (
          <p>error...</p>
        ) : (
          <div className="flex flex-row ">
            <div className="flex flex-col flex-wrap w-1/2 h-full gap-10 px-16 overflow-visible ">
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
              <div className="inline-flex items-center w-48 whitespace-nowrap">
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  &nbsp; &nbsp;
                </p>
                <p>面向:</p>
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
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>案件狀態:</p>
                <Radio.Group>
                  <Radio value="已出租">已出租</Radio>
                  <Radio value="未出租">未出租</Radio>
                </Radio.Group>
              </div>
              {/* 案件型態 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>案件型態:</p>
                <Radio.Group>
                  <Radio value="出租">出租</Radio>
                  <Radio value="出售">出售</Radio>
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
            <div className="flex flex-col w-1/2 h-full ">
              {/* 房屋照片 */}
              <div className="inline-flex flex-col ml-5">
                <p className="mt-2 text-3xl font-bold whitespace-normal">
                  房屋照片
                </p>
              </div>
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
      </div>
      <div className="flex flex-col p-5">
        <div className="inline-flex flex-row justify-between pl-10 mb-5 mr-48">
          <p className="text-2xl whitespace-normal">提醒設定</p>
          <Button
            type="primary"
            className="bg-blue-600 "
            onClick={handleAddNotice}
          >
            新增提醒
          </Button>
        </div>
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
  );
}
