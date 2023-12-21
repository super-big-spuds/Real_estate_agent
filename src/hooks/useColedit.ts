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
            visitDate: '2024-01-01',
            record: '',
            remindDate: '2024-01-31',
            remind: '',
        },
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
                visitDate: '',
                record: '',
                remindDate: '',
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
    const getapi = async () => {
        //get url last number
        const url = window.location.href;
        const url_split = url.split('/');
        const url_last = url_split[url_split.length - 1];
        const token = 'YOUR_ACCESS_TOKEN'; 
        const res = await fetch(`http://localhost:5173/api/coledit/${url_last}`, {
            method: 'GET',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
      
        });
        const data = await res.json();
        // if error alert
        if (data.error) {
            alert(data.error);
            return;
        }
        setFormData({
            roomNumber: data.data.roomNumber,
            expenseName: data.data.expenseName,
            expenseAmount: data.data.expenseAmount,
            paymentMethod: data.data.paymentMethod,
            note: data.data.note,
            bankName: data.data.bankName,
            bankAccount: data.data.bankAccount,
        });
        setNotices(data.data.notices);

    };
    useEffect(() => {
        getapi();
    }, []);

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
