import { Input, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
dayjs.extend(customParseFormat);



interface NoticeProps {
    handleNoticeChange: (index: number, key: string, value: string) => void;
    onChangeDate: (date:any,dateString:string) => void;
    onChangeRemindDate: () => void;
    notice: {
        visitDate: string;
        record: string;
        remindDate: string;
        remind: string;
    };
    keya: number;
    handleDeleteNotice: (index: number) => void;
}


export default function Notice({ keya, handleNoticeChange, onChangeDate, onChangeRemindDate, notice, handleDeleteNotice }: NoticeProps) {

    const { TextArea } = Input
    const dateFormat = 'YYYY-MM-DD';
    const visitDate = dayjs(notice.visitDate, dateFormat);
    const remindDate = dayjs(notice.remindDate, dateFormat);

    return (
        <div className='flex flex-col w-full pl-4 pr-12 '>

            <div className='flex flex-row flex-wrap w-full h-full gap-10 pl-14 '>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>拜訪日期：</p>
                    <DatePicker
                        onChange={(date, dateString) => onChangeDate(date,dateString)}  // 注意這裡的修改
                        value={visitDate}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>紀錄事項：</p>
                    <TextArea
                        placeholder='Basic usage'
                        rows={1}
                        className='w-72'
                        onChange={(e) => handleNoticeChange(keya, 'record', e.target.value)}
                        value={notice.record}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>提醒日期：</p>
                    <DatePicker
                        onChange={onChangeRemindDate}
                        value={remindDate}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>提醒事項：</p>
                    <TextArea
                        placeholder='Basic usage'
                        rows={1}
                        className='w-72'
                        onChange={(e) => handleNoticeChange(keya, 'remind', e.target.value)}
                        value={notice.remind}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <Button danger onClick={() => handleDeleteNotice(keya)}>刪除</Button>
                </div>
            </div>
        </div>
    );
}
