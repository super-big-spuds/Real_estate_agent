import { Button, Radio, RadioChangeEvent } from "antd";
import Notice from "../Notice";
import { useNavigate } from "react-router-dom";
import InputWithErrorMessage from "../InputWithErrorMessage";
import RenterInfo from "./RenterInfo";
import Uploadfile from "./Uploadfile";
import SellerInfo from "./SellerInfo";
import { memo, useState } from "react";
import { set } from "zod";

const SwitchTenementType = memo(
  (props: {
    tenement_type: string;
    handleChange: (
      key: string | number | symbol,
      value: string | number
    ) => void;
  }) => {
    const { tenement_type, handleChange } = props;

    switch (tenement_type) {
      case "可租":
        return <RenterInfo handleChange={handleChange} />;
      case "可售":
        return <SellerInfo handleChange={handleChange} />;
      case "開發追蹤":
        return "";
      case "行銷追蹤":
        return "";
      default:
        return "";
    }
  }
);

export default function TenementInfoEdit(props: any) {
  const { children, formData, setFormData } = props;
  const navigate = useNavigate();
  const handleback = () => {
    navigate("/tenements");
  };

  const { handleDeleteCollection, isLoading, isError } = props;
  const [notices, setNotices] = useState([
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
  ]);
  const handleNoticeChange = (index: number, key: string, value: any) => {
    setNotices((prev) =>
      prev.map((notice, i) =>
        i === index ? { ...notice, [key]: value } : notice
      )
    );
  };
  const handleDeleteNotice = (index: number) => {
    setNotices((prev) => prev.filter((_, i) => i !== index));
  };
  const handleAddNotice = () => {
    setNotices((prev) => [
      ...prev,
      {
        id: "",
        visitDate: "2024-01-01",
        record: "",
        remindDate: "2024-01-01",
        remind: "",
      },
    ]);
  };
  const handleSave = () => {
    alert("儲存成功");
    console.log(formData);
  };
  const handleReset = () => {
    setFormData({
      tenement_no: "1234",
      tenement_type: tenement_type,
      tenement_face: "Maple Street",
      tenement_host_name: "John",
      tenement_host_telphone: "0987654321",
      tenement_host_phone: "0987654321",
      tenement_host_line: "line",
      remittance_bank: "ABC Bank",
      remittance_account: "1234567890",
      Total_rating: "4",
      main_building: "2",
      affiliated_building: "1",
      public_buliding: "1",
      management_fee: "280",
      selling_price: "2000000",
      rent: "20000",
      deposit: "30000",
      bugert_max: "2000000",
      bugert_min: "1000000",
      tenement_status: "1",
      tenement_address: "台北市大安區",
      tenement_birthday: "1950-09-01",
      tenement_hobby: "打球",
      unregistered_area: "10.00",
      tenement_photo: [
        {
          url: "https://example.com/image5.jpg",
        },
        {
          url: "https://example.com/image6.jpg",
        },
      ],
      tenement_floor: "4",
      tenement_style: "店面",
    });
    setNotices([
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
    ]);
  };

  const [tenement_type, setTenement_type] = useState(formData.tenement_type);

  const handletypeChange = (e: RadioChangeEvent) => {
    setTenement_type(e.target.value);
    if (
      window.confirm(
        "是否要切換案件型態?(請確實按下處存，避免切換後部分資料會遺失)"
      )
    ) {
      const id = window.location.pathname.split("/")[2];
      switch (e.target.value) {
        case "可租":
          navigate("/tenement/" + id + "/rent");
          break;
        case "可售":
          navigate("/tenement/" + id + "/sell");
          break;
        case "開發追蹤":
          navigate("/tenement/" + id + "/develop");
          break;
        case "行銷追蹤":
          navigate("/tenement/" + id + "/market");
          break;
        default:
          break;
      }
    } else {
      setTenement_type(formData.tenement_type);
    }
  };

  const handleChange = (key: keyof typeof formData, value: string | number) => {
    setFormData((prev: any) => ({ ...prev, [key]: value }));
  };

  return (
    <div className="flex flex-col items-center w-full h-full ">
      <div className="flex flex-col w-full h-full max-w-screen-xl pb-12 mt-12 mb-10 bg-white shadow-2xl rounded-xl">
        <button className="flex w-12 h-20 mt-10 ml-5" onClick={handleback}>
          {"< 返回"}
        </button>
        <div className="inline-flex flex-col mb-5 ml-8">
          <p className="text-4xl font-bold whitespace-normal">
            {tenement_type}資料
          </p>
        </div>
        <p className="mb-3 ml-5 border-b-2 border-gray-300"></p>
        {isLoading ? (
          <p className="col-span-1 pt-5 ">loading...</p>
        ) : isError ? (
          <p className="col-span-1 pt-5 ">error...</p>
        ) : (
          <div className="flex flex-row ">
            <div className="flex flex-col flex-wrap w-1/2 h-full gap-3 overflow-visible pl-7 ">
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 whitespace-nowrap ">房號:</p>
                <InputWithErrorMessage
                  value={formData.tenement_no}
                  onChange={(e) => handleChange("tenement_no", e.target.value)}
                  isError={formData.tenement_no.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>

              {/* 面向 */}
              <div className="grid grid-cols-5 gap-1 ">
                <p className="col-span-1 text-right whitespace-nowrap ">
                  面向:
                </p>
                <Radio.Group className="col-span-4">
                  <Radio value="海景">海景</Radio>
                  <Radio value="中庭">中庭</Radio>
                  <Radio value="三多路">三多路</Radio>
                  <Radio value="自強路">自強路</Radio>
                  <Radio value="市景風洞">市景風洞</Radio>
                  <Radio value="海景風洞">海景風洞</Radio>
                  <Radio value="其他">其他</Radio>
                </Radio.Group>
              </div>
              {/* 案件狀態 */}
              <div className="grid grid-cols-5 gap-1 ">
                <p className="text-right whitespace-nowrap">物件狀態:</p>
                <Radio.Group className="col-span-4">
                  <Radio value="未成交">未成交</Radio>
                  <Radio value="已成交">已成交</Radio>
                  <Radio value="已成交下架">已成交下架</Radio>
                  <Radio value="過戶完成下架">過戶完成下架</Radio>
                </Radio.Group>
              </div>
              {/* 案件型態 */}
              <div className="grid grid-cols-5 gap-1 ">
                <p className="text-right whitespace-nowrap">物件型態:</p>
                <Radio.Group
                  onChange={handletypeChange}
                  value={tenement_type}
                  className="col-span-4 "
                >
                  <Radio value="可租">可租</Radio>
                  <Radio value="可售">可售</Radio>
                  <Radio value="開發追蹤">開發追蹤</Radio>
                  <Radio value="行銷追蹤">行銷追蹤</Radio>
                </Radio.Group>
              </div>
              {/* 總坪數 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">權狀坪數:</p>
                <InputWithErrorMessage
                  value={formData.Total_rating}
                  onChange={(e) => handleChange("Total_rating", e.target.value)}
                  isError={formData.Total_rating.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 主建物坪數 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 whitespace-nowrap ">主建物:</p>
                <InputWithErrorMessage
                  value={formData.main_building}
                  onChange={(e) =>
                    handleChange("main_building", e.target.value)
                  }
                  isError={formData.main_building.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 附屬建物坪數 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">附屬建物:</p>
                <InputWithErrorMessage
                  value={formData.affiliated_building}
                  onChange={(e) =>
                    handleChange("affiliated_building", e.target.value)
                  }
                  isError={formData.affiliated_building.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 公共設施坪數 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">公設面積:</p>
                <InputWithErrorMessage
                  value={formData.public_buliding}
                  onChange={(e) =>
                    handleChange("public_buliding", e.target.value)
                  }
                  isError={formData.public_buliding.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 未登記面積 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">未登記面積:</p>
                <InputWithErrorMessage
                  value={formData.unregistered_area}
                  onChange={(e) =>
                    handleChange("unregistered_area", e.target.value)
                  }
                  isError={formData.unregistered_area.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 管理費 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">管理費:</p>
                <InputWithErrorMessage
                  value={formData.management_fee}
                  onChange={(e) =>
                    handleChange("management_fee", e.target.value)
                  }
                  isError={formData.management_fee.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {children}
              {/* 樓層 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">樓層:</p>
                <InputWithErrorMessage
                  value={formData.tenement_floor}
                  onChange={(e) =>
                    handleChange("tenement_floor", e.target.value)
                  }
                  isError={formData.tenement_floor.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 房型 */}
              <div className="grid grid-cols-5 gap-1 ">
                <p className="col-span-1 text-right">產品類別:</p>
                {/* radio */}
                <Radio.Group className="col-span-2">
                  <Radio value="套房">套房</Radio>
                  <Radio value="店面">店面</Radio>
                  <Radio value="辦公室">辦公室</Radio>
                  <Radio value="其他">其他</Radio>
                </Radio.Group>
              </div>
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
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">屋主姓名:</p>
                <InputWithErrorMessage
                  value={formData.tenement_host_name}
                  onChange={(e) =>
                    handleChange("tenement_host_name", e.target.value)
                  }
                  isError={formData.tenement_host_name.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 行動電話 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">行動電話:</p>
                <InputWithErrorMessage
                  value={formData.tenement_host_telphone}
                  onChange={(e) =>
                    handleChange("tenement_host_telphone", e.target.value)
                  }
                  isError={formData.tenement_host_telphone.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 電話 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">電話:</p>
                <InputWithErrorMessage
                  value={formData.tenement_host_phone}
                  onChange={(e) =>
                    handleChange("tenement_host_phone", e.target.value)
                  }
                  isError={formData.tenement_host_phone.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* Line */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">Line:</p>
                <InputWithErrorMessage
                  value={formData.tenement_host_line}
                  onChange={(e) =>
                    handleChange("tenement_host_line", e.target.value)
                  }
                  isError={formData.tenement_host_line.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 屋主匯款資訊 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">屋主匯款銀行:</p>
                <InputWithErrorMessage
                  value={formData.remittance_bank}
                  onChange={(e) =>
                    handleChange("remittance_bank", e.target.value)
                  }
                  isError={formData.remittance_bank.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/*  帳號 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">帳號:</p>
                <InputWithErrorMessage
                  value={formData.remittance_account}
                  onChange={(e) =>
                    handleChange("remittance_account", e.target.value)
                  }
                  isError={formData.remittance_account.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 通訊地址 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">通訊地址:</p>
                <InputWithErrorMessage
                  value={formData.tenement_address}
                  onChange={(e) =>
                    handleChange("tenement_address", e.target.value)
                  }
                  isError={formData.tenement_address.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 生日 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">生日:</p>
                <InputWithErrorMessage
                  value={formData.tenement_birthday}
                  onChange={(e) =>
                    handleChange("tenement_birthday", e.target.value)
                  }
                  isError={formData.tenement_birthday.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
              {/* 嗜好 */}
              <div className="grid grid-cols-5 gap-1 text-right">
                <p className="col-span-1 pt-5 ">嗜好:</p>
                <InputWithErrorMessage
                  value={formData.tenement_hobby}
                  onChange={(e) =>
                    handleChange("tenement_hobby", e.target.value)
                  }
                  isError={formData.tenement_hobby.length <= 2}
                  errorMessage={"至少兩個字"}
                />
              </div>
            </div>
          </div>
        )}

        <SwitchTenementType
          tenement_type={tenement_type}
          handleChange={handleChange}
        />
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
