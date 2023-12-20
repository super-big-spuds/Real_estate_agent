import { useState, useEffect } from 'react';
import { Input, Select, Button } from 'antd';
import Notice from './Notice';

interface FormData {
    roomNumber: string;
    expenseName: string;
    expenseAmount: string;
    paymentMethod: string;
    note: string;
    bankName: string;
    bankAccount: string;
}
interface NoticeData {
    visitDate: string;
    record: string;
    remindDate: string;
    remind: string;
}

export default function Col_mange() {
    const { TextArea } = Input;
    const [notice, setnotice] = useState<NoticeData>({
        visitDate: '',
        record: '',
        remindDate: '',
        remind: '',
    });
    const [formData, setFormData] = useState<FormData>({
        roomNumber: '',
        expenseName: '水費',
        expenseAmount: '',
        paymentMethod: '現金',
        note: '',
        bankName: '',
        bankAccount: '',
    });

    const handleChange = (key: keyof FormData, value: string) => {
        setFormData((prevFormData) => ({
            ...prevFormData,
            [key]: value,
        }));
    };

    const handleNoticeChange = (key: keyof NoticeData, value: string) => {
        setnotice((prevNoticeData) => ({
            ...prevNoticeData,
            [key]: value,
        }));
    }

    const handleSave = () => {
        console.log(formData);
        console.log(notice);
    };
    const handleReset = () => {
        setFormData({
            roomNumber: '',
            expenseName: '水費',
            expenseAmount: '',
            paymentMethod: '現金',
            note: '',
            bankName: '',
            bankAccount: '',
        });
        setnotice({
            visitDate: '',
            record: '',
            remindDate: '',
            remind: '',
        });
    };

    useEffect(() => {
        handleReset
    }, [setFormData, setnotice]);

    return (
        <div className='flex w-full h-full flex-col '>
            <div className='flex flex-col w-full p-12 pb-0 pt-16 h-screen '>
                <div className='inline-flex flex-col ml-5'>
                    <p className='text-2xl whitespace-normal'>代收付管理</p>
                    <p>編號 <span>1</span> </p>
                </div>
                <div className='flex flex-col flex-wrap w-full h-full gap-10 p-16 overflow-visible '>
                    <div className='inline-flex items-center whitespace-nowrap w-96'>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>房號:</p>
                        <Input placeholder='Basic usage' value={formData.roomNumber} onChange={(e) => handleChange('roomNumber', e.target.value)} />
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
                            onChange={(value) => handleChange('expenseName', value)}
                        />
                    </div>
                    <div className='inline-flex whitespace-nowrap w-96'>
                        <p>費用金額:</p>
                        <Input placeholder='Basic usage' value={formData.expenseAmount} onChange={(e) => handleChange('expenseAmount', e.target.value)} />
                    </div>
                    <div className='inline-flex whitespace-nowrap '>
                        <p>繳納方式:</p>
                        <Select
                            defaultValue="現金"
                            style={{ width: 120 }}
                            options={[
                                { value: '現金' },
                                { value: '匯款' },
                            ]}
                            onChange={(value) => handleChange('paymentMethod', value)}
                        />
                    </div>
                    <div className='inline-flex whitespace-nowrap '>
                        <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>備註:</p>
                        <TextArea placeholder='Basic usage' rows={10} className='h-48 w-72' value={formData.note} onChange={(e) => handleChange('note', e.target.value)} />
                    </div>
                    <div className='inline-flex whitespace-nowrap w-96'>
                        <p>匯款銀行:</p>
                        <Input placeholder='Basic usage' value={formData.bankName} onChange={(e) => handleChange('bankName', e.target.value)} />
                    </div>
                    <div className='inline-flex whitespace-nowrap w-96'>
                        <p>匯款帳號:</p>
                        <Input placeholder='Basic usage' value={formData.bankAccount} onChange={(e) => handleChange('bankAccount', e.target.value)} />
                    </div>
                </div>
            </div>
            <div className=' p-5'>

                <Notice handleNoticeChange={handleNoticeChange} onReset={handleReset} notice={notice} />
            </div>
            <div className=' flex justify-end m-10 gap-5'>
                <Button className=" bg-blue-600" type='primary' onClick={handleSave}>儲存</Button>
                <Button danger onClick={handleReset}>回復預設</Button>
            </div>
        </div>
    );
}
