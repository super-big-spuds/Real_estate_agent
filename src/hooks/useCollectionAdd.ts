import { useState } from "react";
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
  const [notices, setNotices] = useState<NoticeData[]>([]);
  const [formData, setFormData] = useState<FormData>({
    tenement_id: "",
    collection_id: "",
    collection_name: "水電空調費",
    collection_type: "代收",
    price: "",
    payment: "現金",
    collection_remark: "",
    remittance_bank: "",
    remittance_account: "",
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
      tenement_id: z.string().min(2, "房號至少兩個字"),
      collection_name: z.string(),
      collection_id: z.string(),
      collection_type: z.string(),
      price: z.string().nonempty("金額不得為空"),
      payment: z.string(),
      collection_remark: z.string(),
      remittance_bank: z.string(),
      remittance_account: z.string(),
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
      tenement_id: "",
      collection_id: "",
      collection_name: "水電空調費",
      collection_type: "代收",
      price: "",
      payment: "現金",
      collection_remark: "",
      remittance_bank: "",
      remittance_account: "",
    });
    setNotices([
      {
        id: Math.random().toString(),
        visitDate: nowdatestring,
        record: "",
        remindDate: nowdatestring,
        remind: "",
        isNew: true,
      },
    ]);
  };

  const handleAddNotice = () => {
    setNotices((prevNotices) => [
      ...prevNotices,
      {
        id: Math.random().toString(),
        visitDate: nowdatestring,
        record: "",
        remindDate: nowdatestring,
        remind: "",
        isNew: true,
      },
    ]);
  };

  return {
    formData,
    notices,
    handleChange,
    handleNoticeChange,
    handleSave,
    handleReset,
    handleAddNotice,
    handleDeleteNotice,
  };
};

export default useCollectionAdd;
