import { Input, Select, Button } from "antd";
import { useNavigate } from "react-router-dom";

export default function CollectionMange(props: any) {
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/User/List");
  };

  const {
    formData,
    handleChange,
    handleSave,
    handleReset,
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
              <p className="text-4xl whitespace-normal">使用者管理</p>
            </div>
            <div className="flex flex-col flex-wrap w-full h-full gap-10 p-10 overflow-visible ">
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>使用者名稱:</p>
                <Input
                  placeholder="請輸入內容"
                  value={formData.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>使用者信箱:</p>
                <Input
                  placeholder="請輸入內容"
                  value={formData.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap w-96 ">
                <p>使用者密碼:</p>
                <Input
                  placeholder="請輸入內容"
                  value={formData.password}
                  onChange={(e) => handleChange("password", e.target.value)}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap">
                <p>&nbsp;&nbsp;&nbsp;</p>
                <p>是否啟用:</p>
                <Select
                  defaultValue="是"
                  style={{ width: 120 }}
                  options={[{ value: "是" }, { value: "否" }]}
                  onChange={(value) => handleChange("isactive", value)}
                  value={formData.isactive}
                />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="flex justify-end gap-5 m-10 ">
        <Button className="bg-blue-600 " type="primary" onClick={handleSave}>
          儲存
        </Button>
        <Button danger onClick={() => handleReset()}>
          回復預設
        </Button>
      </div>
    </div>
  );
}
