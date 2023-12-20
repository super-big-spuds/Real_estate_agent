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

const useColedit = () => {
    const [notices, setNotices] = useState<NoticeData[]>([
        {
            visitDate: '',
            record: '',
            remindDate: '',
            remind: '',
        },
        {
            visitDate: '',
            record: '',
            remindDate: '',
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


    const handleSave = () => {
        console.log(formData);
        console.log(notices);
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
        setNotices([
            {
                visitDate: '',
                record: '',
                remindDate: '',
                remind: '',
            },
        ]);
    };
    
    const handleAddNotice = () => {
        setNotices((prevNotices) => {
            const newNotices = [...prevNotices];
            newNotices.push({
                visitDate: '',
                record: '',
                remindDate: '',
                remind: '',
            });
            return newNotices;
        });
    }

    const onChangeDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
        console.log(dateString);
        handleNoticeChange(0, 'visitDate', dateString);
    };

    const onChangeRemindDate: DatePickerProps['onChange'] = (date, dateString) => {
        console.log(date, dateString);
        console.log(dateString);
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

export default useColedit;
