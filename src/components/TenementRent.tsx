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
        {isLoading ? (
          <p>loading...</p>
        ) : isError ? (
          <p>error...</p>
        ) : (
          <div>
            <div className="inline-flex flex-col ml-5">
              <p className="text-4xl font-bold whitespace-normal">租房資訊</p>
            </div>
            <div className="flex flex-col flex-wrap w-full h-full gap-10 p-10 overflow-visible ">
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>房號:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>

              {/* 面向 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
              {/* 總坪數 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
                <p>管理費:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 售價 */}
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>售價:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 售價 */}
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
