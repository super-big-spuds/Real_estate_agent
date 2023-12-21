import { Input, Select, Button } from 'antd';
import Notice from './Notice';
import { useNavigate } from 'react-router-dom';

export default function Col_mange(props:any) {
    const { TextArea } = Input;
    const navigate = useNavigate();
    const handleback = () => {
        // history
        navigate('/Collection/List'); 
    }
    const {
        formData,
        notices,
        handleChange,
        handleNoticeChange,
        handleSave,
        handleReset,
        onChangeDate,
        onChangeRemindDate,
        handleAddNotice,
        handleDeleteNotice
    } = props;
    
    
    return (
        <div className='flex flex-col w-full h-full '>
            <div className='flex flex-col w-full h-full pt-12 pl-12 pr-16'>
                <button className='flex w-12 h-20' onClick={handleback} >{"< 返回"}</button>
                <div className='inline-flex flex-col ml-5'>
                    <p className='text-4xl whitespace-normal'>代收付管理</p>
                </div>
                <div className='flex flex-col flex-wrap w-full h-full gap-10 p-10 overflow-visible '>
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
            <div className='flex flex-col p-5'>
                <div className='inline-flex flex-row justify-between pl-10 mb-5 pr-96'>
                    <p className='text-2xl whitespace-normal'>提醒設定</p>
                    <Button type='primary' className='bg-blue-600 ' onClick={handleAddNotice}>
                        新增提醒
                    </Button>
                </div>
                <div className='flex flex-col gap-5'>
                    {
                        notices.map((notice:any, index:number) => (
                            <Notice
                                key={index}
                                keya={index}
                                notice={notice}
                                handleNoticeChange={handleNoticeChange}
                                onChangeDate={onChangeDate}
                                onChangeRemindDate={onChangeRemindDate}
                                handleDeleteNotice={handleDeleteNotice}

                            />
                        ))
                    }
                </div>
            </div>
            <div className='flex justify-end gap-5 m-10 '>
                <Button className="bg-blue-600 " type='primary' onClick={handleSave}>儲存</Button>
                <Button danger onClick={() => handleReset()}>回復預設</Button>
            </div>
        </div>
    );
}
