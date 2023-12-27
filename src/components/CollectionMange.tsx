import { Input, Select, Button } from "antd";
import Notice from "./Notice";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "./InputWithErrorMessage";

export default function CollectionMange(props: any) {
  const { TextArea } = Input;
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/collections");
  };
  const {
    formData,
    notices,
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
              <p className="text-4xl font-bold whitespace-normal">代收付管理</p>
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

              <div className="inline-flex items-center whitespace-nowrap">
                <p>費用類型:</p>
                <Select
                  defaultValue="代收"
                  style={{ width: 120 }}
                  options={[{ value: "代收" }, { value: "代付" }]}
                  onChange={(value) => handleChange("expenseType", value)}
                  value={formData.collection_type}
                />
              </div>

              <div className="inline-flex items-center whitespace-nowrap">
                <p>費用名稱:</p>
                <Select
                  defaultValue="管理費"
                  style={{ width: 120 }}
                  options={[
                    { value: "水電空調費" },
                    { value: "第四台" },
                    { value: "管理費" },
                    { value: "其他" },
                  ]}
                  onChange={(value) => handleChange("collection_name", value)}
                  value={formData.collection_name}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>費用金額:</p>
                <InputWithErrorMessage
                  value={formData.price}
                  onChange={(e) => handleChange("price", e.target.value)}
                  isError={formData.price.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              <div className="inline-flex whitespace-nowrap ">
                <p>繳納方式:</p>
                <Select
                  defaultValue="現金"
                  style={{ width: 120 }}
                  options={[{ value: "現金" }, { value: "匯款" }]}
                  onChange={(value) => handleChange("payment", value)}
                />
              </div>
              <div className="inline-flex whitespace-nowrap ">
                <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                <p>備註:</p>
                <TextArea
                  placeholder="請輸入內容"
                  rows={10}
                  className="h-48 w-72"
                  value={formData.collection_remark}
                  onChange={(e) =>
                    handleChange("collection_remark", e.target.value)
                  }
                />
              </div>
              {formData.payment === "匯款" && (
                <>
                  <div className="inline-flex items-center whitespace-nowrap w-96">
                    <p>匯款銀行:</p>
                    <InputWithErrorMessage
                      value={formData.remittance_bank}
                      onChange={(e) =>
                        handleChange("remittance_bank", e.target.value)
                      }
                      isError={formData.remittance_bank.length <= 2}
                      errorMessage={"請輸入內容"}
                    />
                  </div>
                  <div className="inline-flex items-center whitespace-nowrap w-96">
                    <p>匯款帳號:</p>
                    <InputWithErrorMessage
                      value={formData.remittance_account}
                      onChange={(e) =>
                        handleChange("remittance_account", e.target.value)
                      }
                      isError={formData.remittance_account.length <= 2}
                      errorMessage={"請輸入內容"}
                    />
                  </div>
                </>
              )}
            </div>
          </div>
        )}
      </div>
      <div className="flex flex-col p-5">
        <div className="inline-flex flex-row justify-between pl-10 mb-5 pr-80">
          <p className="text-4xl font-bold whitespace-normal">提醒設定</p>
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
