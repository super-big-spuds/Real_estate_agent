import { Input, DatePicker,Button } from 'antd';
import { useState } from 'react';

export default function Notice() {
    const { TextArea } = Input;
    const [date, setDate] = useState('');
    const onChange = (date: any, dateString: any) => {
        setDate(dateString);
    };


    return (
            <div className='flex flex-col w-full pt-16 pl-4 pr-12 '>
                <div className='inline-flex flex-row justify-between mb-5 pr-96 '>
                    <p className='text-2xl whitespace-normal'>提醒設定</p>
                    <Button type='primary' className='bg-blue-400 '  >新增提醒</Button>
                </div>
                <div className='flex flex-row flex-wrap w-full h-full gap-10 pl-14 '>
                    {/* 拜訪日期 紀錄事項 提醒日期 提醒事項 */}
                    <div className='inline-flex items-center whitespace-nowrap'>
                        <p>拜訪日期：</p>
                        <DatePicker onChange={onChange} />
                    </div>
                    <div className='inline-flex items-center whitespace-nowrap'>
                        <p>紀錄事項：</p>
                        <TextArea placeholder='Basic usage' className='h-48 w-72 ' />
                    </div>
                    <div className='inline-flex items-center whitespace-nowrap'>
                        <p>提醒日期：</p>
                        <DatePicker onChange={onChange} />
                    </div>
                    <div className='inline-flex items-center whitespace-nowrap'>
                        <p>提醒事項：</p>
                        <TextArea placeholder='Basic usage' className='h-48 w-72 ' />
                    </div>
                </div>
            </div>

    );
}