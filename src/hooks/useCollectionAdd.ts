import { useState } from "react";
import { DatePickerProps } from "antd/lib/date-picker";
import { usePostCollectionAdd } from "./useAPI";
import type { FormData, NoticeData } from "../type";
import { z } from "zod";

const useCollectionAdd = () => {
  const { handleSaveColumn, handleSaveNotice } = usePostCollectionAdd();
  const nowdate = new Date();
  const nowyear = nowdate.getFullYear();
  const nowmonth = nowdate.getMonth() + 1;
  const nowday = nowdate.getDate();
  const nowdatestring = `${nowyear}-${nowmonth}-${nowday}`;
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
    expenseName: "水電空調費",
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

    await handleSaveColumn(parseResult.data);
    await handleSaveNotice(notices);
    alert("儲存成功");
  };

  const handleReset = () => {
    setFormData({
      roomNumber: "",
      expenseName: "水電空調費",
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
    setNotices((prevNotices) => [
      ...prevNotices,
      {
        visitDate: nowdatestring,
        record: "",
        remindDate: nowdatestring,
        remind: "",
      },
    ]);
  };

  type onChangeDatetype = (
    keya: number,
    date: any,
    dateString: string,
    type: any
  ) => void;

  const onChangeDate: onChangeDatetype = (keya, date, dateString, type) => {
    handleNoticeChange(keya, type, dateString);
  };

  return {
    formData,
    notices,
    handleChange,
    handleNoticeChange,
    handleSave,
    handleReset,
    onChangeDate,
    handleAddNotice,
    handleDeleteNotice,
  };
};

export default useCollectionAdd;
