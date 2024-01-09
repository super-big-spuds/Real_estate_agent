import { DatePicker, Input } from "antd";
import Uploadfile from "./Uploadfile";
import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
dayjs.extend(customParseFormat);

type SellerInfoProps = {
  sellerData: any;
  handleChangeSeller: any;
};

export default function SellerInfo(props: SellerInfoProps) {
  const { sellerData, handleChangeSeller } = props;
  const dateFormat = "YYYY-MM-DD";
  const set_date = dayjs(sellerData.set_date, dateFormat);
  const delivery_date = dayjs(sellerData.delivery_date, dateFormat);

  return (
    // 買客資訊
    <div className="flex flex-col w-full px-5 mt-10">
      <div className="inline-flex mb-10 ml-16 gird ">
        <p className="text-4xl font-bold">買客資訊</p>
      </div>
      <p className="mb-3 ml-5 border-b-2 border-gray-300"></p>
      <div className="flex flex-row w-full ">
        <div className="flex flex-col w-1/2 gap-10 pr-10 ">
          {/* 下定日期 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">下定日期:</p>
            <DatePicker
              className="col-span-2"
              value={set_date}
              onChange={(_, dateString) =>
                handleChangeSeller("set_date", dateString)
              }
            />
          </div>
          {/* 交房日期 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">交房日期:</p>
            <DatePicker
              className="col-span-2"
              value={delivery_date}
              onChange={(_, dateString) =>
                handleChangeSeller("delivery_date", dateString)
              }
            />
          </div>
          {/* 買客姓名 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">買客姓名:</p>
            <Input
              className="col-span-2"
              value={sellerData.buyer_name}
              onChange={(e) => handleChangeSeller("buyer_name", e.target.value)}
            />
          </div>
          {/* 電話 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">電話:</p>
            <Input
              className="col-span-2"
              value={sellerData.buyer_telphone}
              onChange={(e) =>
                handleChangeSeller("buyer_telphone", e.target.value)
              }
            />
          </div>
          {/* 工作職稱 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">工作職稱:</p>
            <Input
              className="col-span-2"
              value={sellerData.buyer_job}
              onChange={(e) => handleChangeSeller("buyer_job", e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col w-1/2 ">
          {/* 身分證件拍存檔 */}
          <div className="grid grid-cols-3 gap-1 ">
            <p className="col-span-2 ">身分證件翻拍存檔:</p>
          </div>
          <Uploadfile />
        </div>
        <div className="flex flex-col w-1/3 ml-5">
          <div className="grid grid-cols-5 gap-1 ">
            <p className="col-span-5 ">備註:</p>
          </div>
          <Input.TextArea
            className="h-40"
            value={sellerData.sell_remark}
            onChange={(e) => handleChangeSeller("sell_remark", e.target.value)}
          />
        </div>
      </div>
    </div>
  );
}
