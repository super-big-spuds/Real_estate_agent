
import { Input, Select } from 'antd';
import Notice from './Notice';

export default function Col_mange() {
    const { TextArea } = Input;
    return (
        <div className='flex w-full h-screen bg-gray-300 '>
            <div className='flex flex-col w-full p-12 pt-16 h-1/2'>
                <div className='inline-flex flex-col ml-5'>
                    <p className='text-2xl whitespace-normal'>代收付管理</p>
                    <p>編號 <span>1</span> </p>
                </div>
                <div className='flex flex-col flex-wrap w-full h-full gap-10 p-16 '>
                    <div className='inline-flex items-center whitespace-nowrap w-96'>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>房號:</p>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='inline-flex items-center whitespace-nowrap'>
                        <p>費用名稱:</p>
                        <Select
                            defaultValue="水費"
                            style={{ width: 120 }}
                            options={[
                                { value: '水費' },
                                { value: '電費' },
                                { value: '管理費' },
                            ]}
                        />
                    </div>
                    <div className='inline-flex whitespace-nowrap w-96'>
                        <p>費用金額:</p>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='inline-flex whitespace-nowrap '>
                        <p>繳納方式:</p>
                        <Select
                            defaultValue="現金"
                            style={{ width: 120 }}
                            options={
                                [
                                    { value: '現金' },
                                    { value: '匯款' },
                                ]
                            }
                        >
                        </Select>
                    </div>
                    <div className='inline-flex whitespace-nowrap '>
                    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>備註:</p>
                        <TextArea placeholder='Basic usage' className='h-48 w-72 ' />
                    </div>
                    <div className='inline-flex whitespace-nowrap w-96'>
                        <p>匯款銀行:</p>
                        <Input placeholder='Basic usage' />
                    </div>
                    <div className='inline-flex whitespace-nowrap w-96'>
                        <p>匯款帳號:</p>
                        <Input placeholder='Basic usage' />
                    </div>
                </div>
                <Notice />
            </div>
        </div>
    );
}

