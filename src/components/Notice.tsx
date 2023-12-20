import { Input, DatePicker, Button } from 'antd';


interface NoticeProps {
    handleNoticeChange: (index: number,key: string, value: string) => void;
    onChangeDate: () => void;
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


export default function Notice({ keya,handleNoticeChange,onChangeDate,onChangeRemindDate, notice,handleDeleteNotice  }: NoticeProps) {
    const { TextArea } = Input;

    

    
    return (
        <div className='flex flex-col w-full pl-4 pr-12 '>
           
            <div className='flex flex-row flex-wrap w-full h-full gap-10 pl-14 '>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>拜訪日期：</p>
                    <DatePicker
                        onChange={onChangeDate}
                       
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>紀錄事項：</p>
                    <TextArea
                        placeholder='Basic usage'
                        rows={1}
                        className='w-72'
                        onChange={(e) => handleNoticeChange(keya,'record', e.target.value)}
                        value={notice.record}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>提醒日期：</p>
                    <DatePicker
                        onChange={onChangeRemindDate}
                        
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <p>提醒事項：</p>
                    <TextArea
                        placeholder='Basic usage'
                        rows={1}
                        className='w-72'
                        onChange={(e) => handleNoticeChange(keya,'remind', e.target.value)}
                        value={notice.remind}
                    />
                </div>
                <div className='inline-flex items-center whitespace-nowrap'>
                    <Button onClick={() => handleDeleteNotice(keya)}>刪除</Button>
                </div>
            </div>
        </div>
    );
}
