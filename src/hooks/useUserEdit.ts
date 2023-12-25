import { useState, useEffect } from "react";
import { useGetUserEdit, usePostUserEdit } from "./useAPI";
import type { User } from "../type";
import { z } from "zod";
import { useParams } from "react-router-dom";

const useCollectionEdit = () => {
  const { isLoading, isError, handleSaveUser, handleDeleteUserFetch } =
    usePostUserEdit();
  const { getUserEdit, dataEdit } = useGetUserEdit();
  const { id } = useParams();

  const [formData, setFormData] = useState<User>({
    user_name: "",
    user_email: "",
    isactive: "是",
    user_password: "",
    isadmin: "否",
  });
  const handleChange = (key: keyof User, value: string) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [key]: value,
    }));
  };

  const handleSave = async () => {
    if (!id) return;
    const newformdata = {
      ...formData,
      id: id,
    };

    const schema = z.object({
      user_name: z.string().min(2, "請輸入至少兩個以上的名字"),
      user_email: z.string().email("不符合Email格式"),
      isactive: z.string(),
      user_password: z.string().min(6, "請輸入至少六個以上的密碼"),
      isadmin: z.string(),
      id: z.string(),
    });

    const parseResult = schema.safeParse(newformdata);

    if (!parseResult.success) {
      const errorMessages = parseResult.error.errors.map((error) => {
        return error.message;
      });

      alert(errorMessages.join("\n"));
      return;
    }

    await handleSaveUser(parseResult.data);
    alert("儲存成功");
  };
  const handleDeleteUser = () => {
    confirm("確定要刪除嗎？");
    handleDeleteUserFetch(id || "");
  };

  const handleReset = () => {
    setFormData({
      user_name: "",
      user_email: "",
      isactive: "是",
      user_password: "",
      isadmin: "否",
    });
  };

  const getapi = async () => {
    if (!id) return;
    await getUserEdit(id);
  };

  useEffect(() => {
    getapi();
  }, []);
  useEffect(() => {
    if (!dataEdit) return;
    setFormData({
      user_name: dataEdit.user_name,
      user_email: dataEdit.user_email,
      isactive: dataEdit.isactive,
      user_password: dataEdit.user_password,
      isadmin: dataEdit.isadmin,
    });
  }, [dataEdit]);

  return {
    formData,
    handleChange,
    handleSave,
    handleReset,
    isLoading,
    isError,
    handleDeleteUser,
  };
};

export default useCollectionEdit;
