import { DatePicker, Input } from "antd";
import Uploadfile from "./Uploadfile";

export default function RenterInfo() {
  return (
    // 租客資訊
    <div className="flex flex-col w-full mt-10">
      <div className="inline-flex mb-10 ml-16 w-96">
        <p className="text-4xl font-bold">租客資訊</p>
      </div>
      <div className="flex flex-row first-letter: ">
        <div className="flex flex-col w-2/5 gap-10 ml-32">
          {/* 租屋期限開始 */}
          <div className="inline-flex items-center whitespace-nowrap w-96">
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>租屋期限開始:</p>
            <DatePicker />
          </div>
          {/* 租屋期限結束 */}
          <div className="inline-flex items-center whitespace-nowrap w-96">
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>租屋期限結束:</p>
            <DatePicker />
          </div>

          {/* 租客姓名 */}
          <div className="inline-flex items-center whitespace-nowrap w-96">
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>租客姓名:</p>
            <Input className="w-96" />
          </div>
          {/* 電話 */}
          <div className="inline-flex items-center whitespace-nowrap w-96">
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
            <p>電話:</p>
            <Input className="w-96" />
          </div>
          {/* 工作職稱 */}
          <div className="inline-flex items-center whitespace-nowrap w-96">
            <p>&nbsp;&nbsp;&nbsp;</p>
            <p>工作職稱:</p>
            <Input className="w-96" />
          </div>
          {/* 保證人姓名 */}
          <div className="inline-flex items-center whitespace-nowrap w-96">
            <p>保證人姓名:</p>
            <Input className="w-96" />
          </div>
          {/* 保證人電話 */}
          <div className="inline-flex items-center whitespace-nowrap w-96">
            <p>保證人電話:</p>
            <Input className="w-96" />
          </div>
        </div>
        <div className="flex w-3/5 ">
          {/* 身分證件翻拍存檔 */}
          <div className="flex flex-col w-2/5 ">
            <div className="inline-flex items-center whitespace-nowrap w-96">
              <p>身分證件翻拍存檔:</p>
            </div>
            <Uploadfile />
          </div>
          {/* 特殊約定 */}
          <div className="flex flex-col w-3/5 ml-10">
            <div className="inline-flex items-center whitespace-nowrap w-96">
              <p>特殊約定:</p>
            </div>
            <Input.TextArea className="w-96" />
          </div>
        </div>
      </div>
    </div>
  );
}
