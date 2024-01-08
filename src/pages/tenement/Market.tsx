import TenementInfoEdit from "../../components/tenement/TenementInfoEdit";
import { useState } from "react";
import InputWithErrorMessage from "../../components/InputWithErrorMessage";
import { Select } from "antd";

const TenemmentAdd = () => {
  const [formData, setFormData] = useState({
    tenement_no: "1234",
    tenement_type: "行銷追蹤",
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
    tenement_style: "面海",
  });
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <TenementInfoEdit formData={formData} setFormData={setFormData}>
      <div>
        {/* 要租要買 select  */}
        <div className="grid grid-cols-10 gap-1 mb-5 ml-5 text-right">
          <p className="col-span-2 pt-1 whitespace-nowrap ">要租要買:</p>
          <Select defaultValue="租房" className="w-20 col-span-1 ">
            <Select.Option value="租房">租房</Select.Option>
            <Select.Option value="買房">買房</Select.Option>
          </Select>
        </div>
        {/* 預算 最大值 最小值 */}
        <div className="grid grid-cols-6 gap-1 text-right">
          <p className="col-span-1 pt-5 ">預算:</p>
          <div className="inline-flex col-span-2 ">
            <InputWithErrorMessage
              value={formData.bugert_min}
              onChange={(e) => handleChange("bugert_min", e.target.value)}
              isError={formData.bugert_min.length <= 2}
              errorMessage={"至少兩個字"}
            />
            <span className="pt-5 ">~</span>
          </div>
          <div className="inline-flex col-span-2 ">
            <InputWithErrorMessage
              value={formData.bugert_max}
              onChange={(e) => handleChange("bugert_max", e.target.value)}
              isError={formData.bugert_max.length <= 2}
              errorMessage={"至少兩個字"}
            />
          </div>
        </div>
      </div>
    </TenementInfoEdit>
  );
};

export default TenemmentAdd;
