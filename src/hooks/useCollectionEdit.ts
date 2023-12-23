import { useState, useEffect } from "react";
import { useGetCollectionEdit, usePostCollectionEdit } from "./useAPI";
import type { FormData, NoticeData } from "../type";
import { useParams } from "react-router-dom";
import { z } from "zod";

const useCollectionEdit = () => {
  const { getCollectionEdit, isError, isLoading, dataEdit } =
    useGetCollectionEdit();
  const { handleSaveColumn, handleSaveNotice } = usePostCollectionEdit();
  const nowdate = new Date();
  const nowyear = nowdate.getFullYear();
  const nowmonth = nowdate.getMonth() + 1;
  const nowday = nowdate.getDate();
  const nowdatestring = `${nowyear}-${nowmonth}-${nowday}`;
  const { id } = useParams();
  const [notices, setNotices] = useState<NoticeData[]>([
    {
      visitDate: nowdatestring,
      record: "",
      remindDate: nowdatestring,
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
    const schemaform = z.object({
      roomNumber: z.string().min(2, "房號至少兩個字"),
      expenseName: z.string(),
      type: z.string(),
      expenseAmount: z.string().nonempty("金額不得為空"),
      paymentMethod: z.string(),
      note: z.string(),
      bankName: z.string(),
      bankAccount: z.string(),
    });

    const parseResult = schemaform.safeParse(formData);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map((error) => {
        return error.message;
      });

      alert(errorMessages.join("\n"));
      return;
    }
    const newformdata = {
      ...parseResult.data,
      id: id,
    };
    await handleSaveColumn(newformdata);
    if (notices.length > 0) {
      await handleSaveNotice(notices);
    }
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
        visitDate: nowdatestring,
        record: "",
        remindDate: nowdatestring,
        remind: "",
      },
    ]);
  };

  const handleAddNotice = () => {
    setNotices((prevNotices) => {
      const newNotices = [...prevNotices];
      newNotices.push({
        visitDate: nowdatestring,
        record: "",
        remindDate: nowdatestring,
        remind: "",
      });
      return newNotices;
    });
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
    handleAddNotice,
    handleDeleteNotice,
    isLoading,
    isError,
  };
};

export default useCollectionEdit;
