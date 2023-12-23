import { useState, useEffect } from "react";
import { DatePickerProps } from "antd/lib/date-picker";
import { useGetCollectionEdit, usePostCollectionEdit } from "./useAPI";
import type { FormData, NoticeData } from "../type";
import { useParams } from "react-router-dom";

const useCollectionEdit = () => {
  const { getCollectionEdit, isError, isLoading, dataEdit } =
    useGetCollectionEdit();
  const { handleSaveColumn, handleSaveNotice } = usePostCollectionEdit();
  const { id } = useParams();
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
    if (!id) return;
    const newformdata = {
      ...formData,
      id: id,
    };
    await handleSaveColumn(newformdata);
    await handleSaveNotice(notices);
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
    if (!id) return;
    await getCollectionEdit(id);
  };

  useEffect(() => {
    getapi();
  }, []);
  useEffect(() => {
    if (!dataEdit) return;
    setFormData({
      roomNumber: dataEdit.roomNumber,
      expenseName: dataEdit.expenseName,
      type: dataEdit.type,
      expenseAmount: dataEdit.expenseAmount,
      paymentMethod: dataEdit.paymentMethod,
      note: dataEdit.note,
      bankName: dataEdit.bankName,
      bankAccount: dataEdit.bankAccount,
    });
    setNotices(dataEdit.notices as NoticeData[]);
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
