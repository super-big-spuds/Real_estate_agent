import { useState, useEffect } from 'react';
import { DatePickerProps } from 'antd/lib/date-picker';

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

const useCustomHook = () => {
    const [notices, setNotices] = useState<NoticeData[]>([
        {
            visitDate: '2024-01-01',
            record: '',
            remindDate: '2024-01-31',
            remind: '',
        },
    ]);
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

    const handleNoticeChange = (index: number, key: keyof NoticeData, value: string) => {
        setNotices((prevNotices) => {
            const newNotices = [...prevNotices];
            newNotices[index] = {
                ...newNotices[index],
                [key]: value,
            };
            return newNotices;
        });
    };

    const handleDeleteNotice = (index: number) => {
        setNotices((prevNotices) => {
            const newNotices = [...prevNotices];
            newNotices.splice(index, 1);
            return newNotices;
        });
    }


    const handleSave = async () => {
        const res = await fetch('/api/coledit', {
            method: 'POST',
            body: JSON.stringify({
                formData,
                
            }),
        });
        if (!res.ok) {
            throw new Error(res.statusText);
          }
        const notices_psot = await fetch('/api/coledit/notices', {
            method: 'POST',
            body: JSON.stringify({
                notices,
            }),
        });
        if (!notices_psot.ok) {
            throw new Error(notices_psot.statusText);
          }
        const data_notice = await notices_psot.json();
        const data = await res.json();
        console.log(data);
        console.log(data_notice);
    }

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
        setNotices([
            {
                visitDate: '2024-01-01',
                record: '',
                remindDate: '2024-01-31',
                remind: '',
            },
        ]);
    };
    
    const handleAddNotice = () => {
        setNotices((prevNotices) => {
            const newNotices = [...prevNotices];
            newNotices.push({
                visitDate: '2024-01-01',
                record: '',
                remindDate: '2024-01-31',
                remind: '',
            });
            return newNotices;
        });
    }

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        handleNoticeChange(0, 'visitDate', dateString);
    };

    const onChangeRemindDate: DatePickerProps['onChange'] = (date, dateString) => {
        handleNoticeChange(0, 'remindDate', dateString);
    };

    return {
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
    };
};

export default useCustomHook;
