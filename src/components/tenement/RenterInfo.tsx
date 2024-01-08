import { DatePicker, Input } from "antd";
import Uploadfile from "./Uploadfile";

type RenterInfoProps = {
  handleChange: (key: string | number | symbol, value: string | number) => void;
};
export default function RenterInfo(props: RenterInfoProps) {
  const { handleChange } = props;
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
            <DatePicker className="col-span-2" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">退租日期:</p>
            <DatePicker className="col-span-2" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">租客姓名:</p>
            <Input className="col-span-2" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">電話:</p>
            <Input className="col-span-2" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">工作職稱:</p>
            <Input className="col-span-2" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">保證人姓名:</p>
            <Input className="col-span-2" />
          </div>

          <div className="grid grid-cols-3 gap-1 text-right ">
            <p className="col-span-1 ">保證人電話:</p>
            <Input className="col-span-2" />
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
            <p className="col-span-5 ">特殊約定:</p>
          </div>
          <Input.TextArea rows={20} />
        </div>
      </div>
    </div>
  );
}
