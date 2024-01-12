import { DatePicker, Input } from "antd";
import Uploadfile from "./Uploadfile";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

type RenterInfoProps = {
  renterData: any;
  handleRenterChange: any;
};
export default function RenterInfo(props: RenterInfoProps) {
  const { renterData, handleRenterChange } = props;
  const dateFormat = "YYYY-MM-DD";
  const rental_start_date = dayjs(renterData.rental_start_date, dateFormat);
  const rental_end_date = dayjs(renterData.rental_end_date, dateFormat);

  return (
    <div className="flex flex-col w-full px-5 mt-10">
      <div className="inline-flex col-span-2 mb-5 ml-10">
        <p className="text-4xl font-bold">租客資訊</p>
      </div>
      <p className="mb-3 ml-5 border-b-2 border-gray-300"></p>
      <div className="flex flex-row w-full ">
        <div className="flex flex-col w-1/3 gap-10 mr-3 ">
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">起租日期:</p>
            <DatePicker
              className="col-span-2"
              value={rental_start_date}
              onChange={(_, dateString) =>
                handleRenterChange("rental_start_date", dateString)
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">退租日期:</p>
            <DatePicker
              className="col-span-2"
              value={rental_end_date}
              onChange={(_, dateString) =>
                handleRenterChange("rental_end_date", dateString)
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">租客姓名:</p>
            <Input
              className="col-span-2"
              value={renterData.renter_name}
              onChange={(e) =>
                handleRenterChange("renter_name", e.target.value)
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">電話:</p>
            <Input
              className="col-span-2"
              value={renterData.renter_telphone}
              onChange={(e) =>
                handleRenterChange("renter_telphone", e.target.value)
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">工作職稱:</p>
            <Input
              className="col-span-2"
              value={renterData.renter_job}
              onChange={(e) => handleRenterChange("renter_job", e.target.value)}
            />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">保證人姓名:</p>
            <Input
              className="col-span-2"
              value={renterData.guarantor_name}
              onChange={(e) =>
                handleRenterChange("guarantor_name", e.target.value)
              }
            />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">保證人電話:</p>
            <Input
              className="col-span-2"
              value={renterData.guarantor_telphone}
              onChange={(e) =>
                handleRenterChange("guarantor_telphone", e.target.value)
              }
            />
          </div>
        </div>
        <div className="flex flex-col w-1/3 ">
          <div className="grid grid-cols-3 gap-1 ">
            <p className="col-span-2 ">身分證件翻拍存檔:</p>
          </div>
          <Uploadfile />
        </div>
        <div className="flex flex-col w-1/3 ml-5">
          <div className="grid grid-cols-5 gap-1 ">
            <p className="col-span-5 ">備註:</p>
          </div>
          <textarea
            className="w-full h-40 border border-gray-300"
            value={renterData.rent_remark}
            onChange={(e) => handleRenterChange("rent_remark", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
