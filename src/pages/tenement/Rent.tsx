import TenementInfoEdit from "../../components/tenement/TenementInfoEdit";
import { useState } from "react";
import InputWithErrorMessage from "../../components/InputWithErrorMessage";

const TenemmentAdd = () => {
  const [formData, setFormData] = useState({
    tenement_no: "1234",
    tenement_type: "可租",
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
  const handleChange = (key: string, value: string) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
  };
  const [renterData, setRenterData] = useState({
    rental_start_date: "2021-09-01",
    rental_end_date: "2021-09-05",
    renter_name: "John",
    renter_telphone: "0987654321",
    renter_job: "護理師",
    guarantor_name: "John",
    guarantor_telphone: "0987654321",
    special_agreement: "無",
    buyer_photo: [
      {
        url: "https://example.com/image5.jpg",
      },
      {
        url: "https://example.com/image6.jpg",
      },
    ],
  });

  const handleRenterChange = (key: string, value: string) => {
    setRenterData((prev) => ({ ...prev, [key]: value }));
  };

  return (
    <TenementInfoEdit
      formData={formData}
      setFormData={setFormData}
      renterData={renterData}
      handleRenterChange={handleRenterChange}
    >
      <div className="flex flex-col gap-2">
        {/* 租金 */}
        <div className="grid grid-cols-5 gap-1 text-right">
          <p className="col-span-1 pt-5 ">租金:</p>
          <InputWithErrorMessage
            value={formData.rent}
            onChange={(e) => handleChange("rent", e.target.value)}
            isError={formData.rent.length <= 2}
            errorMessage={"至少兩個字"}
          />
        </div>
        {/* 押金 */}
        <div className="grid grid-cols-5 gap-1 text-right">
          <p className="col-span-1 pt-5 ">押金:</p>
          <InputWithErrorMessage
            value={formData.deposit}
            onChange={(e) => handleChange("deposit", e.target.value)}
            isError={formData.deposit.length <= 2}
            errorMessage={"至少兩個字"}
          />
        </div>
      </div>
    </TenementInfoEdit>
  );
};

export default TenemmentAdd;
