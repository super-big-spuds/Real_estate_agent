import { DatePicker, Input } from "antd";
import Uploadfile from "./Uploadfile";

export default function RenterInfo(props: any) {
  return (
    <div className="flex flex-col w-full mt-10">
      <div className="inline-flex mb-5 ml-16 w-60">
        <p className="text-4xl font-bold">租客資訊</p>
      </div>
      <p className="mb-3 ml-5 border-b-2 border-gray-300"></p>
      <div className="flex flex-row ">
        <div className="flex flex-col w-2/5 gap-10 ">
          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">租屋開始日:</p>
            <DatePicker className="col-span-1" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">租屋結束日:</p>
            <DatePicker className="col-span-1" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">租客姓名:</p>
            <Input className="w-60" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">電話:</p>
            <Input className="w-60" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">工作職稱:</p>
            <Input className="w-60" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">保證人姓名:</p>
            <Input className="w-60" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">保證人電話:</p>
            <Input className="w-60" />
          </div>
        </div>
        <div className="flex w-3/5 ">
          <div className="flex flex-col w-2/5 ">
            <div className="grid grid-cols-3 gap-1 ">
              <p className="col-span-2 ">身分證件翻拍存檔:</p>
            </div>
            <Uploadfile />
          </div>
          <div className="flex flex-col w-3/5 ml-10">
            <div className="grid grid-cols-3 gap-1 ">
              <p className="col-span-1 ">特殊約定:</p>
            </div>
            <Input.TextArea className=" w-72" rows={20} />
          </div>
        </div>
      </div>
    </div>
  );
}
