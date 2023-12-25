import { useState, useEffect } from "react";
import { useGetCollectionEdit, usePostCollectionEdit } from "./useAPI";
import type { FormData, NoticeData } from "../type";
import { useParams } from "react-router-dom";
import { z } from "zod";

const useCollectionEdit = () => {
  const { getCollectionEdit, isError, isLoading, dataEdit } =
    useGetCollectionEdit();
  const {
    handleSaveColumn,
    handleSaveNotice,
    handleDeleteNoticeFetch,
    handleDeleteCollectionFetch,
  } = usePostCollectionEdit();
  const nowdate = new Date();
  const nowyear = nowdate.getFullYear();
  const nowmonth = nowdate.getMonth() + 1;
  const nowday = nowdate.getDate();
  const nowdatestring = `${nowyear}-${nowmonth}-${nowday}`;
  const { id } = useParams();
  const [notices, setNotices] = useState<NoticeData[]>([]);
  const [formData, setFormData] = useState<FormData>({
    tenement_id: "",
    collection_id: "",
    collection_name: "水費",
    type: "代收",
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
    if (notices[index].isNew) return;
    handleDeleteNoticeFetch(notices[index].id);
  };
  const handleDeleteCollection = () => {
    confirm("確定要刪除嗎？");
    handleDeleteCollectionFetch(id || "");
  };

  const handleSave = async () => {
    if (!id) return;

    const schemaform = z.object({
      tenement_id: z.string().min(2, "房號至少兩個字"),
      collection_name: z.string(),
      type: z.string(),
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
    const newformdata = {
      ...parseResult.data,
      collection_id: id,
    };
    await handleSaveColumn(newformdata);
    if (notices.length > 0) {
      await handleSaveNotice(notices);
    }
    alert("儲存成功");
  };

  const handleReset = () => {
    setFormData({
      tenement_id: "",
      collection_id: "",
      collection_name: "水費",
      type: "代收",
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
    setNotices((prevNotices) => {
      const newNotices = [...prevNotices];
      newNotices.push({
        id: Math.random().toString(),
        visitDate: nowdatestring,
        record: "",
        remindDate: nowdatestring,
        remind: "",
        isNew: true,
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
      tenement_id: dataEdit.tenement_id,
      collection_id: dataEdit.collection_id,
      collection_name: dataEdit.collection_name,
      type: dataEdit.type,
      price: dataEdit.price,
      payment: dataEdit.payment,
      collection_remark: dataEdit.collection_remark,
      remittance_bank: dataEdit.remittance_bank,
      remittance_account: dataEdit.remittance_account,
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
    handleDeleteCollection,
    isLoading,
    isError,
  };
};

export default useCollectionEdit;
