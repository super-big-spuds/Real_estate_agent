import { Input, Select, Button, DatePicker } from "antd";
import Notice from "./Notice";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "./InputWithErrorMessage";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

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
  const dateFormat = "YYYY-MM-DD";
  const collection_date = dayjs(formData.collection_date, dateFormat);
  if (!formData.remittance_bank) {
    formData.remittance_bank = "";
    formData.remittance_account = "";
    formData.cus_remittance_bank = "";
    formData.cus_remittance_account = "";
  }

  return (
    <div className="flex flex-col w-full h-full ">
      <div className="flex flex-col h-full px-10 py-20 mx-10 mt-12 mb-10 ml-12 bg-white shadow-2xl w-8/9 rounded-xl">
        <button className="flex w-12 h-20" onClick={handleback}>
          {"< 返回"}
        </button>
        {isLoading ? (
          <p className="col-span-1 pt-5">loading...</p>
        ) : isError ? (
          <p className="col-span-1 pt-5">error...</p>
        ) : (
          <div>
            <div className="inline-flex flex-col mb-3 ml-5">
              <p className="text-4xl font-bold whitespace-normal">代收付管理</p>
            </div>
            <p className="ml-5 border-b-2 border-gray-300 "></p>
            <div className="flex flex-row justify-between ">
              <div className="flex flex-col flex-wrap w-1/3 h-full gap-5 px-10 overflow-visible">
                <div className="grid grid-cols-3 gap-1 text-right">
                  <p className="col-span-1 pt-5">房號:</p>
                  <InputWithErrorMessage
                    value={formData.tenement_no}
                    onChange={(e) =>
                      handleChange("tenement_no", e.target.value)
                    }
                    isError={formData.tenement_no.length <= 2}
                    errorMessage={"至少兩個字"}
                  />
                </div>
                <div className="grid grid-cols-3 gap-1 text-right">
                  <p>契約日期:</p>
                  <DatePicker
                    onChange={(_, dateString) =>
                      handleChange("collection_date", dateString)
                    }
                    format={"YYYY-MM-DD"}
                    defaultValue={collection_date}
                  />
                </div>

                <div className="grid grid-cols-3 gap-1 ">
                  <p className="col-span-1 text-right">費用類型:</p>
                  <Select
                    defaultValue="代收"
                    style={{ width: 120 }}
                    options={[{ value: "代收" }, { value: "代付" }]}
                    onChange={(value) => handleChange("collection_type", value)}
                    value={formData.collection_type}
                  />
                </div>

                <div className="grid grid-cols-3 gap-1 ">
                  <p className="col-span-1 text-right">費用名稱:</p>
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
                <div className="grid grid-cols-3 gap-1 text-right">
                  <p className="col-span-1 pt-5 ">費用金額:</p>
                  <InputWithErrorMessage
                    value={formData.price}
                    onChange={(e) => handleChange("price", e.target.value)}
                    isError={formData.price.length <= 2}
                    errorMessage={"至少兩個字"}
                  />
                </div>
                <div className="grid grid-cols-3 gap-1 ">
                  <p className="col-span-1 text-right">繳納方式:</p>
                  <Select
                    value={formData.payment}
                    style={{ width: 120 }}
                    options={[{ value: "現金" }, { value: "匯款" }]}
                    onChange={(value) => handleChange("payment", value)}
                  />
                </div>

                {formData.payment === "匯款" && (
                  <>
                    <div className="grid grid-cols-3 gap-1 text-right">
                      <p className="col-span-1 pt-5">匯款銀行:</p>
                      <InputWithErrorMessage
                        value={formData.remittance_bank}
                        onChange={(e) =>
                          handleChange("remittance_bank", e.target.value)
                        }
                        isError={formData.remittance_bank.length <= 2}
                        errorMessage={"請輸入內容"}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-right">
                      <p className="col-span-1 pt-5">匯款帳號:</p>
                      <InputWithErrorMessage
                        value={formData.remittance_account}
                        onChange={(e) =>
                          handleChange("remittance_account", e.target.value)
                        }
                        isError={formData.remittance_account.length <= 2}
                        errorMessage={"請輸入內容"}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-right">
                      <p className="col-span-1 pt-5">客戶匯款銀行:</p>
                      <InputWithErrorMessage
                        value={formData.cus_remittance_bank}
                        onChange={(e) =>
                          handleChange("cus_remittance_bank", e.target.value)
                        }
                        isError={formData.cus_remittance_bank.length <= 2}
                        errorMessage={"請輸入內容"}
                      />
                    </div>
                    <div className="grid grid-cols-3 gap-1 text-right">
                      <p className="col-span-1 pt-5">客戶匯款銀行:</p>
                      <InputWithErrorMessage
                        value={formData.cus_remittance_account}
                        onChange={(e) =>
                          handleChange("cus_remittance_account", e.target.value)
                        }
                        isError={formData.cus_remittance_account.length <= 2}
                        errorMessage={"請輸入內容"}
                      />
                    </div>
                  </>
                )}
              </div>
              <div className="inline-flex w-2/5 mt-5 whitespace-nowrap ">
                <p className="col-span-1">備註:</p>
                <TextArea
                  placeholder="請輸入內容"
                  rows={10}
                  className="h-48 w-96"
                  value={formData.collection_remark}
                  onChange={(e) =>
                    handleChange("collection_remark", e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        )}

        <div className="flex flex-col p-5">
          <div className="inline-flex flex-row gap-5 mb-5 ">
            <p className="text-4xl font-bold whitespace-normal">提醒設定</p>

            <Button
              type="primary"
              className="mt-1 bg-blue-600"
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
        <div className="flex justify-end gap-5 m-10 mr-48 ">
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
