import TenementInfoEdit from "../../components/tenement/TenementInfoEdit";
import React, { useState } from "react";
import InputWithErrorMessage from "../../components/InputWithErrorMessage";
import { Select, Input } from "antd";

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
    bugert: "2000000",
    tenement_status: "1",
    tenement_address: "台北市大安區",
    tenement_birthday: "1950-09-01",
    tenement_hobby: "打球",
    unregistered_area: "10.00",
    market_state: "租房",
    product_type : "套房",
    tenement_area_max: "10",
    tenement_area_min: "5",
    burget_rent_max: "20000",
    burget_rent_min: "10000",
    tenement_photo: [
      {
        url: "https://example.com/image5.jpg",
      },
      {
        url: "https://example.com/image6.jpg",
      },
    ],
    tenement_floor: "4",
    tenement_style: "套房",
  });
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };


  return (
    <TenementInfoEdit formData={formData} setFormData={setFormData}>
      <div>
       

        {/* 要租要買 select  */}
        {/* 預期坪數區間 */}
        <div className="grid grid-cols-5 gap-1 mb-5 ">
          <p className="col-span-1 pt-5 text-right">預期坪數:</p>
          <div className=" inline-grid grid-flow-col items-center">

          <Input
            value={formData.tenement_area_min}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("tenement_area_min", e.target.value)}
            className="col-span-1 h-8 mt-3"
            placeholder="最小值"
          />
          <p className=" pt-3 pl-1 ">~</p>
          </div>
          <Input
            value={formData.tenement_area_max}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("tenement_area_max", e.target.value)}
            className="col-span-1 mt-3"
            placeholder="最大值"
          />
        </div>
        <div className="grid grid-cols-10 gap-1  text-right">
          <p className="col-span-2 pt-1 whitespace-nowrap ">要租要買:</p>
          <Select defaultValue="租房" className="w-20 col-span-1 " value={formData.market_state} onChange={(value) => handleChange("market_state", value)}>
            <Select.Option value="租房">租房</Select.Option>
            <Select.Option value="買房">買房</Select.Option>
          </Select>
        </div>
        {/* 預算 最大值 最小值 */}
        <div className="grid grid-cols-5 gap-1 text-right">
          <p className="col-span-1 pt-5 "> {formData.market_state === "租房" ? "租金預算" : "售價預算(萬)"}:</p>
          <div className=" inline-grid grid-flow-col items-center">
          <Input
            value={formData.burget_rent_min}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("burget_rent_min", e.target.value)}
            className="col-span-1 h-8 mt-3"
            placeholder="最小值"
          />
          <p className="  pt-3 pl-1">~</p>
          </div>
          <Input
            value={formData.burget_rent_max}
            onChange={(e:React.ChangeEvent<HTMLInputElement>) => handleChange("burget_rent_max", e.target.value)}
            className="col-span-1 mt-3"
            placeholder="最大值"
          />
        </div>
      </div>
    </TenementInfoEdit>
  );
};

export default TenemmentAdd;
