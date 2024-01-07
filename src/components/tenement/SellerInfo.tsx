import { DatePicker, Input } from "antd";
import Uploadfile from "./Uploadfile";

export default function SellerInfo(props: any) {
  return (
    // 買客資訊
    <div className="flex flex-col w-full mt-10">
      <div className="inline-flex mb-10 ml-16 gird ">
        <p className="text-4xl font-bold">買客資訊</p>
      </div>
      <p className="mb-3 ml-5 border-b-2 border-gray-300"></p>
      <div className="flex flex-row ">
        <div className="flex flex-col w-2/5 gap-10 mr-32">
          {/* 下定日期 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">下定日期:</p>
            <DatePicker className="col-span-1" />
          </div>
          {/* 交房日期 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">交房日期:</p>
            <DatePicker className="col-span-1" />
          </div>
          {/* 買客姓名 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">買客姓名:</p>
            <Input className="col-span-1" />
          </div>
          {/* 電話 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">電話:</p>
            <Input className="col-span-1" />
          </div>
          {/* 工作職稱 */}
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">工作職稱:</p>
            <Input className="col-span-1" />
          </div>
        </div>
        <div className="flex w-3/5 ">
          {/* 身分證件翻拍存檔 */}
          <div className="flex flex-col w-2/5 ">
            <div className="grid grid-cols-3 gap-1 ">
              <p className="col-span-2 ">身分證件翻拍存檔:</p>
            </div>
            <Uploadfile />
          </div>
        </div>
      </div>
    </div>
  );
}
