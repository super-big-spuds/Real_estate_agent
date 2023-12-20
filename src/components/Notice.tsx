import { Input, DatePicker, Button } from 'antd';
import dayjs from 'dayjs';

interface NoticeProps {
    handleNoticeChange: (key: string, value: string) => void;
    onReset: () => void;
    notice: {
        visitDate: string;
        record: string;
        remindDate: string;
        remind: string;
    };
}


export default function Notice({ handleNoticeChange }: NoticeProps) {
    const { TextArea } = Input;

    return (
        <div className='flex flex-col w-full pl-4 pr-12 '>
            <div className='inline-flex flex-row justify-between mb-5  '>
                <p className='text-2xl whitespace-normal'>提醒設定</p>
                <Button type='primary' className='bg-blue-600 '>
                    新增提醒
                </Button>
            </div>
            <div className='flex flex-row flex-wrap w-full h-full gap-10 pl-14 '>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>拜訪日期：</p>
                    <DatePicker
                        onChange={(date, dateString) => handleNoticeChange('visitDate', dateString)}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>紀錄事項：</p>
                    <TextArea
                        placeholder='Basic usage'
                        rows={1}
                        className='w-72'
                        onChange={(e) => handleNoticeChange('record', e.target.value)}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>提醒日期：</p>
                    <DatePicker
                        onChange={(date, dateString) => handleNoticeChange('remindDate', dateString)}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>提醒事項：</p>
                    <TextArea
                        placeholder='Basic usage'
                        rows={1}
                        className='w-72'
                        onChange={(e) => handleNoticeChange('remind', e.target.value)}
                    />
                </div>
            </div>
        </div>
    );
}
