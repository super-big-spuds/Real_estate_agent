import { Select, Button } from "antd";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "./InputWithErrorMessage";

export default function CollectionMange(props: any) {
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/users");
  };

  const {
    formData,
    handleChange,
    handleSave,
    handleReset,
    isLoading,
    isError,
    handleDeleteUser,
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
                <InputWithErrorMessage
                  value={formData.user_name}
                  onChange={(e) => handleChange("user_name", e.target.value)}
                  isError={formData.user_name.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap w-96">
                <p>使用者信箱:</p>

                <InputWithErrorMessage
                  value={formData.user_email}
                  onChange={(e) => handleChange("user_email", e.target.value)}
                  isError={!formData.user_email.includes("@")}
                  errorMessage={"email格式錯誤"}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap w-96 ">
                <p>使用者密碼:</p>

                <InputWithErrorMessage
                  value={formData.user_password}
                  onChange={(e) =>
                    handleChange("user_password", e.target.value)
                  }
                  isError={formData.user_password.length < 2}
                  errorMessage={"至少六個字"}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap">
                <p>&nbsp;&nbsp;&nbsp;</p>
                <p>是否啟用:</p>
                <Select
                  defaultValue="是"
                  style={{ width: 120 }}
                  options={[{ value: "是" }, { value: "否" }]}
                  onChange={(value) => handleChange("status", value)}
                  value={formData.status}
                />
              </div>
              <div className="inline-flex items-center whitespace-nowrap">
                <p>管理員權限:</p>
                <Select
                  defaultValue="是"
                  style={{ width: 120 }}
                  options={[{ value: "是" }, { value: "否" }]}
                  onChange={(value) => handleChange("isadmin", value)}
                  value={formData.isadmin}
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
        <Button type="default" onClick={() => handleReset()}>
          回復預設
        </Button>
        <Button danger onClick={() => handleDeleteUser()}>
          刪除
        </Button>
      </div>
    </div>
  );
}
