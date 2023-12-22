import { useState, useEffect } from "react";
import { DatePickerProps } from "antd/lib/date-picker";
import { useGetCollectionEdit, usePostCollectionEdit } from "./useAPI";

interface FormData {
  roomNumber: string;
  expenseName: string;
  type: string;
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

const useCollectionEdit = () => {
  const { getCollectionEdit, isError, isLoading, dataEdit } =
    useGetCollectionEdit();
  const { handleSaveColumn, handleSaveNotice } = usePostCollectionEdit();
  const [notices, setNotices] = useState<NoticeData[]>([
    {
      visitDate: "2024-01-01",
      record: "",
      remindDate: "2024-01-31",
      remind: "",
    },
    {
      visitDate: "2024-01-01",
      record: "",
      remindDate: "2024-01-31",
      remind: "",
    },
  ]);
  const [formData, setFormData] = useState<FormData>({
    roomNumber: "",
    expenseName: "水費",
    type: "代收",
    expenseAmount: "",
    paymentMethod: "現金",
    note: "",
    bankName: "",
    bankAccount: "",
  });

  const handleChange = (key: keyof FormData, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleNoticeChange = (
    index: number,
    key: keyof NoticeData,
    value: string
  ) => {
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
  };

  const handleSave = async () => {
    const url = window.location.href;
    const url_split = url.split("/");
    const url_last = url_split[url_split.length - 1];
    const newformdata = {
      ...formData,
      id: url_last,
    };
    const jsonFromData = JSON.stringify(newformdata);
    const jsonNotices = JSON.stringify(notices);
    await handleSaveColumn(jsonFromData);
    await handleSaveNotice(jsonNotices);

    alert("儲存成功");
  };

  const handleReset = () => {
    setFormData({
      roomNumber: "",
      expenseName: "水費",
      type: "代收",
      expenseAmount: "",
      paymentMethod: "現金",
      note: "",
      bankName: "",
      bankAccount: "",
    });
    setNotices([
      {
        visitDate: "2024-01-01",
        record: "",
        remindDate: "2024-01-31",
        remind: "",
      },
    ]);
  };

  const handleAddNotice = () => {
    setNotices((prevNotices) => {
      const newNotices = [...prevNotices];
      newNotices.push({
        visitDate: "",
        record: "",
        remindDate: "",
        remind: "",
      });
      return newNotices;
    });
  };

  const onChangeDate: DatePickerProps["onChange"] = (date, dateString) => {
    handleNoticeChange(0, "visitDate", dateString);
  };

  const onChangeRemindDate: DatePickerProps["onChange"] = (
    date,
    dateString
  ) => {
    handleNoticeChange(0, "remindDate", dateString);
  };
  const getapi = async () => {
    const url = window.location.href;
    const url_split = url.split("/");
    const url_last = url_split[url_split.length - 1];
    await getCollectionEdit(url_last);
  };
  useEffect(() => {
    getapi();
  }, []);
  useEffect(() => {
    if (!dataEdit) return;
    setFormData({
      roomNumber: dataEdit.data.roomNumber,
      expenseName: dataEdit.data.expenseName,
      type: dataEdit.data.type,
      expenseAmount: dataEdit.data.expenseAmount,
      paymentMethod: dataEdit.data.paymentMethod,
      note: dataEdit.data.note,
      bankName: dataEdit.data.bankName,
      bankAccount: dataEdit.data.bankAccount,
    });
    setNotices(dataEdit.data.notices);
  }, [dataEdit]);

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
    handleDeleteNotice,
    isLoading,
    isError,
  };
};

export default useCollectionEdit;
